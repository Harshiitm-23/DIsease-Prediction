from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import json
import uvicorn

app = FastAPI(title="MediChat Disease Prediction API")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define data models
class Symptom(BaseModel):
    id: str
    name: str
    description: Optional[str] = None

class PredictionRequest(BaseModel):
    symptoms: List[Symptom]

class Disease(BaseModel):
    id: str
    name: str
    description: str
    causes: List[str]
    symptoms: List[str]
    treatments: List[str]
    prevention: List[str]
    emergency_level: str
    confidence_score: Optional[float] = None

class PredictionResponse(BaseModel):
    diseases: List[Disease]
    additional_questions: Optional[List[str]] = None
    emergency_advice: Optional[str] = None

# Load disease data
diseases = [
    {
        "id": "d1",
        "name": "Common Cold",
        "description": "A viral infection of the upper respiratory tract.",
        "causes": ["Rhinovirus", "Coronavirus", "Other viruses"],
        "symptoms": ["runny nose", "congestion", "sore throat", "cough", "sneezing", "mild fever"],
        "treatments": ["Rest", "Hydration", "Over-the-counter medications"],
        "prevention": ["Hand washing", "Avoiding sick people"],
        "emergency_level": "low"
    },
    {
        "id": "d2",
        "name": "Influenza",
        "description": "A contagious respiratory illness caused by influenza viruses.",
        "causes": ["Influenza viruses"],
        "symptoms": ["fever", "chills", "cough", "sore throat", "muscle pain", "headache", "fatigue"],
        "treatments": ["Antiviral medications", "Rest", "Hydration"],
        "prevention": ["Annual vaccination", "Hand washing"],
        "emergency_level": "medium"
    },
    {
        "id": "d3",
        "name": "COVID-19",
        "description": "A respiratory illness caused by the SARS-CoV-2 virus.",
        "causes": ["SARS-CoV-2 virus"],
        "symptoms": ["fever", "cough", "shortness of breath", "fatigue", "loss of taste", "loss of smell"],
        "treatments": ["Supportive care", "Antiviral medications", "Rest"],
        "prevention": ["Vaccination", "Masks", "Social distancing"],
        "emergency_level": "medium"
    },
    {
        "id": "d4",
        "name": "Bronchitis",
        "description": "Inflammation of the lining of the bronchial tubes.",
        "causes": ["Viruses", "Bacteria", "Irritants"],
        "symptoms": ["cough with mucus", "fatigue", "shortness of breath", "chest discomfort", "mild fever"],
        "treatments": ["Rest", "Hydration", "Medications to reduce inflammation"],
        "prevention": ["Not smoking", "Vaccination", "Hand washing"],
        "emergency_level": "medium"
    },
    {
        "id": "d5",
        "name": "Pneumonia",
        "description": "Infection that inflames air sacs in one or both lungs.",
        "causes": ["Bacteria", "Viruses", "Fungi"],
        "symptoms": ["cough with phlegm", "fever", "chills", "shortness of breath", "chest pain", "fatigue"],
        "treatments": ["Antibiotics", "Antiviral medications", "Oxygen therapy"],
        "prevention": ["Vaccination", "Good hygiene", "Healthy lifestyle"],
        "emergency_level": "high"
    }
]

# Disease prediction endpoint
@app.post("/predict", response_model=PredictionResponse)
async def predict_disease(request: PredictionRequest):
    if not request.symptoms:
        raise HTTPException(status_code=400, detail="No symptoms provided")
    
    # Get symptom names for matching
    symptom_names = [s.name.lower() for s in request.symptoms]
    
    results = []
    for disease in diseases:
        # Convert disease symptoms to lowercase
        disease_symptoms = [s.lower() for s in disease["symptoms"]]
        
        # Count matching symptoms
        matching_symptoms = [s for s in symptom_names if any(ds in s or s in ds for ds in disease_symptoms)]
        
        # Calculate simple confidence score
        match_ratio = len(matching_symptoms) / len(disease_symptoms)
        coverage_ratio = len(matching_symptoms) / len(symptom_names)
        
        # Combined weighted score
        confidence_score = (match_ratio * 0.6) + (coverage_ratio * 0.4)
        
        # Add disease to results if confidence is above threshold
        if confidence_score > 0.15:
            disease_copy = disease.copy()
            disease_copy["confidence_score"] = min(confidence_score, 0.95)  # Cap at 95%
            results.append(disease_copy)
    
    # Sort by confidence score and take top 3
    results = sorted(results, key=lambda x: x["confidence_score"], reverse=True)[:3]
    
    # Check if any high emergency level diseases are in results
    has_emergency = any(d["emergency_level"] == "high" for d in results)
    
    emergency_advice = None
    if has_emergency:
        emergency_advice = "Some of the potential conditions identified require prompt medical attention. Please consult a healthcare provider as soon as possible."
    
    # Determine if we need additional questions
    additional_questions = []
    if len(results) > 1 and results[0]["confidence_score"] < 0.7:
        # Generate disease-specific questions to help narrow down
        for disease in results[:2]:
            for symptom in disease["symptoms"]:
                if symptom.lower() not in symptom_names:
                    additional_questions.append(f"Are you experiencing {symptom}?")
    
    return {
        "diseases": results,
        "additional_questions": additional_questions[:3] if additional_questions else None,
        "emergency_advice": emergency_advice
    }

# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
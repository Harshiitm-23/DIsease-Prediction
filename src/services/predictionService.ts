import { Symptom, Disease, PredictionResponse } from '../types';
import { commonDiseases } from '../data/diseases';

// Simple prediction function that matches symptoms to diseases
export const predictDisease = async (symptoms: Symptom[]): Promise<Disease[]> => {
  return new Promise((resolve) => {
    // Get symptom names for easy matching
    const symptomNames = symptoms.map(s => s.name.toLowerCase());
    
    // Calculate a confidence score for each disease based on symptom match
    const predictions = commonDiseases.map(disease => {
      // Convert disease symptoms to lowercase for case-insensitive matching
      const diseaseSymptoms = disease.symptoms.map(s => s.toLowerCase());
      
      // Count matching symptoms
      const matchingSymptoms = symptomNames.filter(symptom => 
        diseaseSymptoms.some(s => s.includes(symptom) || symptom.includes(s))
      );
      
      // Calculate confidence score
      // Base formula: (matching symptoms / total disease symptoms) * weighting factor
      const matchRatio = matchingSymptoms.length / diseaseSymptoms.length;
      const coverageRatio = matchingSymptoms.length / symptomNames.length;
      
      // Combine ratios with weights
      const confidenceScore = (matchRatio * 0.6) + (coverageRatio * 0.4);
      
      // Return disease with confidence score
      return {
        ...disease,
        confidenceScore: Math.min(confidenceScore, 0.99), // Cap at 99% to avoid absolute certainty
      };
    });
    
    // Filter out diseases with very low confidence scores
    const filteredPredictions = predictions
      .filter(disease => disease.confidenceScore !== undefined && disease.confidenceScore > 0.15)
      .sort((a, b) => (b.confidenceScore || 0) - (a.confidenceScore || 0))
      .slice(0, 3); // Return top 3 matches
    
    // Simulate API delay
    setTimeout(() => {
      resolve(filteredPredictions);
    }, 1000);
  });
};
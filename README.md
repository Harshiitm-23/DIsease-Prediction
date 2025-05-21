# MediChat - AI-Powered Symptom Checker

MediChat is an interactive medical chatbot that helps users understand potential causes for their symptoms using AI-powered analysis. The application provides a user-friendly interface for symptom input and delivers detailed information about possible conditions.

## 🌟 Features

- Interactive chat interface
- Symptom selection and analysis
- Disease prediction with confidence scores
- Emergency resources and guidance
- Detailed condition information including causes, treatments, and prevention
- Mobile-responsive design

## 🚀 Tech Stack

### Frontend
- React.js with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons
- React Markdown for text formatting

### Backend
- FastAPI
- Pydantic for data validation
- CORS middleware
- Uvicorn server

### ML Model
- Rule-based matching system
- Confidence score calculation
- Symptom-disease correlation analysis

## 📁 Project Structure

```
medichat/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AboutModal.tsx
│   │   │   ├── ChatInterface.tsx
│   │   │   ├── ChatMessage.tsx
│   │   │   ├── EmergencyModal.tsx
│   │   │   ├── Layout.tsx
│   │   │   ├── ResultCard.tsx
│   │   │   └── SymptomSelector.tsx
│   │   ├── data/
│   │   │   ├── diseases.ts
│   │   │   └── symptoms.ts
│   │   ├── hooks/
│   │   │   └── useChatbot.ts
│   │   ├── services/
│   │   │   └── predictionService.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
│
├── backend/
│   ├── main.py
│   └── requirements.txt
│
└── README.md
```

## 🛠️ Setup Instructions

1. Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows

# Install dependencies
pip install -r requirements.txt

# Start backend server
uvicorn main:app --reload
```

## 💻 Development

### Frontend Development
- The frontend is built with React and TypeScript
- Uses Vite for fast development and building
- Tailwind CSS for styling with custom theme configuration
- Components are organized by feature and functionality

### Backend Development
- FastAPI provides the REST API endpoints
- Pydantic models ensure type safety and validation
- CORS middleware enables frontend-backend communication
- Structured for easy expansion and modification

### ML Model Development
- Currently uses a rule-based matching system
- Calculates confidence scores based on symptom matches
- Designed for easy integration of more sophisticated ML models

## 🔒 Security Features

- Input validation and sanitization
- CORS protection
- Rate limiting on API endpoints
- Secure error handling

## ⚠️ Disclaimer

MediChat is for informational purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
# MediChat - AI-Powered Symptom Checker

MediChat is an interactive medical chatbot that helps users understand potential causes for their symptoms using AI-powered analysis. The application provides a user-friendly interface for symptom input and delivers detailed information about possible conditions.

 ## Features

- Interactive chat interface
- Symptom selection and analysis
- Disease prediction with confidence scores
- Emergency resources and guidance
- Detailed condition information including causes, treatments, and prevention
- Mobile-responsive design

## Tech Stack

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

##  Project Structure

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


##  Development

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




export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface Symptom {
  id: string;
  name: string;
  description?: string;
}

export interface Disease {
  id: string;
  name: string;
  description: string;
  causes: string[];
  symptoms: string[];
  treatments: string[];
  prevention: string[];
  emergencyLevel: 'low' | 'medium' | 'high';
  confidenceScore?: number;
}

export interface PredictionResponse {
  diseases: Disease[];
  additionalQuestions?: string[];
  emergencyAdvice?: string;
}
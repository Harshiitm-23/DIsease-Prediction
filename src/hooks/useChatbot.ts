import { useState, useEffect, useCallback } from 'react';
import { Message, Symptom, Disease } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { predictDisease } from '../services/predictionService';

export const useChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: uuidv4(),
      role: 'assistant',
      content: "Hi there! I'm MediChat, an AI assistant that can help you understand potential causes for your symptoms. Please describe what you're experiencing, and I'll do my best to provide information. Remember, this is not a replacement for professional medical advice.",
      timestamp: new Date(),
    },
  ]);
  
  const [isTyping, setIsTyping] = useState(false);
  const [symptomSelectionActive, setSymptomSelectionActive] = useState(false);
  const [selectedSymptoms, setSelectedSymptoms] = useState<Symptom[]>([]);
  const [predictions, setPredictions] = useState<Disease[]>([]);

  // Add a user message to the chat
  const sendMessage = useCallback((content: string) => {
    const userMessage: Message = {
      id: uuidv4(),
      role: 'user',
      content,
      timestamp: new Date(),
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setIsTyping(true);
    
    // Simulate processing delay
    setTimeout(() => {
      const lowerContent = content.toLowerCase();
      
      // Check for keywords that might indicate symptoms
      const hasSymptomKeywords = 
        lowerContent.includes('pain') || 
        lowerContent.includes('ache') || 
        lowerContent.includes('feel') ||
        lowerContent.includes('hurt') ||
        lowerContent.includes('sore') ||
        lowerContent.includes('fever') ||
        lowerContent.includes('sick');
      
      if (hasSymptomKeywords) {
        // Respond with symptom selection prompt
        const botResponse: Message = {
          id: uuidv4(),
          role: 'assistant',
          content: "I noticed you mentioned some symptoms. To help me better understand your condition, could you please select all the symptoms you're experiencing from the list below?",
          timestamp: new Date(),
        };
        
        setMessages(prevMessages => [...prevMessages, botResponse]);
        setSymptomSelectionActive(true);
      } else {
        // Generic response
        const botResponse: Message = {
          id: uuidv4(),
          role: 'assistant',
          content: "I'm here to help with medical symptom assessment. Could you please describe any symptoms you're experiencing?",
          timestamp: new Date(),
        };
        
        setMessages(prevMessages => [...prevMessages, botResponse]);
      }
      
      setIsTyping(false);
    }, 1500);
  }, []);

  // Add a symptom to the selected list
  const selectSymptom = useCallback((symptom: Symptom) => {
    setSelectedSymptoms(prev => [...prev, symptom]);
  }, []);

  // Remove a symptom from the selected list
  const removeSymptom = useCallback((symptomId: string) => {
    setSelectedSymptoms(prev => prev.filter(s => s.id !== symptomId));
  }, []);

  // Submit selected symptoms for analysis
  const submitSymptoms = useCallback(async () => {
    if (selectedSymptoms.length === 0) return;
    
    setSymptomSelectionActive(false);
    setIsTyping(true);
    
    // Add a message showing the selected symptoms
    const symptomsList = selectedSymptoms.map(s => s.name).join(', ');
    const userSymptomsMessage: Message = {
      id: uuidv4(),
      role: 'user',
      content: `My symptoms are: ${symptomsList}`,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userSymptomsMessage]);
    
    // Simulate API call delay
    setTimeout(async () => {
      try {
        // Get disease predictions based on symptoms
        const predictions = await predictDisease(selectedSymptoms);
        setPredictions(predictions);
        
        // Add response message
        const botResponse: Message = {
          id: uuidv4(),
          role: 'assistant',
          content: `Based on the symptoms you've reported (${symptomsList}), I've analyzed possible conditions that might be related. Please review the information below, and remember that this is not a diagnosis.`,
          timestamp: new Date(),
        };
        
        setMessages(prev => [...prev, botResponse]);
      } catch (error) {
        console.error('Error predicting disease:', error);
        
        // Error message
        const errorMessage: Message = {
          id: uuidv4(),
          role: 'assistant',
          content: "I'm sorry, but I encountered an error while analyzing your symptoms. Please try again later.",
          timestamp: new Date(),
        };
        
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsTyping(false);
      }
    }, 2000);
  }, [selectedSymptoms]);

  // Reset the chat to initial state
  const resetChat = useCallback(() => {
    setMessages([
      {
        id: uuidv4(),
        role: 'assistant',
        content: "Let's start a new assessment. Please describe what symptoms you're experiencing, and I'll do my best to provide information.",
        timestamp: new Date(),
      },
    ]);
    setSelectedSymptoms([]);
    setPredictions([]);
    setSymptomSelectionActive(false);
  }, []);

  return {
    messages,
    isTyping,
    symptomSelectionActive,
    selectedSymptoms,
    predictions,
    sendMessage,
    selectSymptom,
    removeSymptom,
    submitSymptoms,
    resetChat,
  };
};
import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface AboutModalProps {
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center border-b border-neutral-200 p-4">
          <h2 className="text-lg font-semibold text-neutral-800">About MediChat</h2>
          <button 
            onClick={onClose}
            className="text-neutral-500 hover:text-neutral-700 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4 space-y-4">
          <div>
            <h3 className="font-medium text-neutral-800 mb-2">What is MediChat?</h3>
            <p className="text-neutral-700 text-sm">
              MediChat is an interactive AI-powered symptom checker that uses a machine learning model to predict possible 
              medical conditions based on the symptoms you report. It provides information about potential causes,
              treatments, and preventive measures for various health conditions.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-neutral-800 mb-2">How to Use MediChat</h3>
            <ol className="list-decimal list-inside text-sm text-neutral-700 space-y-2">
              <li>Describe your symptoms in the chat input or select from the suggested prompts</li>
              <li>Use the symptom selector to choose all symptoms you're experiencing</li>
              <li>Review the potential conditions that match your symptoms</li>
              <li>Explore detailed information about each condition</li>
              <li>Start a new assessment if needed</li>
            </ol>
          </div>
          
          <div>
            <h3 className="font-medium text-neutral-800 mb-2">Important Disclaimer</h3>
            <p className="text-neutral-700 text-sm bg-neutral-50 p-3 rounded border border-neutral-200">
              MediChat is not a substitute for professional medical advice, diagnosis, or treatment. 
              Always seek the advice of your physician or other qualified health provider with any questions 
              you may have regarding a medical condition. Never disregard professional medical advice or delay 
              in seeking it because of something you have read on this application.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-neutral-800 mb-2">Privacy Information</h3>
            <p className="text-neutral-700 text-sm">
              MediChat does not store your personal health information. Your symptom data is processed
              locally in your browser and is not saved after you close the application.
            </p>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 p-4">
          <button 
            onClick={onClose}
            className="btn btn-primary w-full"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};
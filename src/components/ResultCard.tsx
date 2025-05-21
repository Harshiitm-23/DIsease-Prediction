import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RotateCcw, ChevronDown, ChevronUp, Heart } from 'lucide-react';
import { Disease } from '../types';

interface ResultCardProps {
  diseases: Disease[];
  onReset: () => void;
}

export const ResultCard: React.FC<ResultCardProps> = ({ diseases, onReset }) => {
  const [expandedDisease, setExpandedDisease] = useState<string | null>(diseases[0]?.id || null);
  
  // Sort diseases by confidence score
  const sortedDiseases = [...diseases].sort((a, b) => 
    (b.confidenceScore || 0) - (a.confidenceScore || 0)
  );
  
  const toggleExpand = (diseaseId: string) => {
    setExpandedDisease(expandedDisease === diseaseId ? null : diseaseId);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card border border-neutral-200"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg text-neutral-800">Possible Conditions</h3>
        <button
          onClick={onReset}
          className="btn btn-outline py-1 px-3 text-sm flex items-center"
        >
          <RotateCcw size={14} className="mr-1.5" />
          Start New Assessment
        </button>
      </div>
      
      <div className="space-y-3 mb-4">
        {sortedDiseases.map(disease => (
          <div 
            key={disease.id}
            className="border border-neutral-200 rounded-lg overflow-hidden"
          >
            {/* Header */}
            <button
              onClick={() => toggleExpand(disease.id)}
              className="w-full flex items-center justify-between p-3 hover:bg-neutral-50 transition-colors"
            >
              <div className="flex items-center">
                <div 
                  className={`
                    w-2 h-2 rounded-full mr-3
                    ${disease.emergencyLevel === 'high' ? 'bg-accent-500' : 
                      disease.emergencyLevel === 'medium' ? 'bg-yellow-500' : 'bg-green-500'}
                  `}
                />
                <span className="font-medium">{disease.name}</span>
                
                {disease.confidenceScore !== undefined && (
                  <div className="ml-2 px-2 py-0.5 bg-primary-100 text-primary-700 rounded text-xs font-medium">
                    {Math.round(disease.confidenceScore * 100)}% match
                  </div>
                )}
              </div>
              
              <div className="text-neutral-500">
                {expandedDisease === disease.id ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </div>
            </button>
            
            {/* Details */}
            {expandedDisease === disease.id && (
              <div className="px-3 pb-3 border-t border-neutral-200 animate-slide-up">
                {disease.emergencyLevel === 'high' && (
                  <div className="bg-accent-50 border border-accent-200 rounded-lg p-3 mb-3 flex items-start">
                    <AlertTriangle className="text-accent-500 mr-2 flex-shrink-0 mt-0.5" size={18} />
                    <p className="text-sm text-accent-700">
                      This condition may require immediate medical attention. Please consult a healthcare professional as soon as possible.
                    </p>
                  </div>
                )}
                
                <p className="text-sm text-neutral-700 mb-3">{disease.description}</p>
                
                <div className="space-y-2">
                  {/* Symptoms */}
                  <div>
                    <h4 className="text-sm font-medium text-neutral-800 mb-1">Common Symptoms</h4>
                    <ul className="list-disc list-inside text-sm text-neutral-600">
                      {disease.symptoms.map((symptom, index) => (
                        <li key={index}>{symptom}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Causes */}
                  <div>
                    <h4 className="text-sm font-medium text-neutral-800 mb-1">Possible Causes</h4>
                    <ul className="list-disc list-inside text-sm text-neutral-600">
                      {disease.causes.map((cause, index) => (
                        <li key={index}>{cause}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Treatments */}
                  <div>
                    <h4 className="text-sm font-medium text-neutral-800 mb-1">Treatment Options</h4>
                    <ul className="list-disc list-inside text-sm text-neutral-600">
                      {disease.treatments.map((treatment, index) => (
                        <li key={index}>{treatment}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Prevention */}
                  <div>
                    <h4 className="text-sm font-medium text-neutral-800 mb-1">Prevention</h4>
                    <ul className="list-disc list-inside text-sm text-neutral-600">
                      {disease.prevention.map((tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="bg-neutral-50 p-3 rounded-lg border border-neutral-200 text-sm text-neutral-700 flex items-start">
        <Heart className="text-primary-500 mr-2 flex-shrink-0 mt-0.5" size={18} />
        <p>
          This is not a medical diagnosis. The information provided is for educational purposes only.
          Always consult with a healthcare professional for proper diagnosis and treatment.
        </p>
      </div>
    </motion.div>
  );
};
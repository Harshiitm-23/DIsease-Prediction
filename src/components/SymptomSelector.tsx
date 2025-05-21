import React, { useState } from 'react';
import { X, Search, CheckCircle, PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Symptom } from '../types';
import { commonSymptoms } from '../data/symptoms';

interface SymptomSelectorProps {
  selectedSymptoms: Symptom[];
  onSelect: (symptom: Symptom) => void;
  onRemove: (symptomId: string) => void;
  onSubmit: () => void;
}

export const SymptomSelector: React.FC<SymptomSelectorProps> = ({
  selectedSymptoms,
  onSelect,
  onRemove,
  onSubmit
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredSymptoms = commonSymptoms.filter(symptom => 
    symptom.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    !selectedSymptoms.some(s => s.id === symptom.id)
  );
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card border border-primary-200 bg-primary-50"
    >
      <h3 className="font-medium text-primary-800 mb-3">Select all your symptoms</h3>
      
      {/* Selected symptoms */}
      <div className="mb-3">
        <p className="text-sm text-neutral-600 mb-2">Selected symptoms:</p>
        <div className="flex flex-wrap gap-2">
          {selectedSymptoms.length === 0 ? (
            <p className="text-sm text-neutral-500 italic">No symptoms selected yet</p>
          ) : (
            selectedSymptoms.map(symptom => (
              <div 
                key={symptom.id}
                className="inline-flex items-center bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm"
              >
                {symptom.name}
                <button 
                  onClick={() => onRemove(symptom.id)}
                  className="ml-1.5 text-primary-600 hover:text-primary-800"
                >
                  <X size={14} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
      
      {/* Search */}
      <div className="relative mb-3">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={16} className="text-neutral-400" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for symptoms..."
          className="input pl-10"
        />
      </div>
      
      {/* Available symptoms */}
      <div className="max-h-40 overflow-y-auto mb-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {filteredSymptoms.length > 0 ? (
            filteredSymptoms.map(symptom => (
              <button
                key={symptom.id}
                onClick={() => onSelect(symptom)}
                className="text-left flex items-center hover:bg-primary-100 p-2 rounded transition-colors text-sm"
              >
                <PlusCircle size={16} className="text-primary-500 mr-2 flex-shrink-0" />
                <span>{symptom.name}</span>
              </button>
            ))
          ) : (
            <p className="text-sm text-neutral-500 italic col-span-2 p-2">
              No matching symptoms found
            </p>
          )}
        </div>
      </div>
      
      {/* Submit button */}
      <button
        onClick={onSubmit}
        disabled={selectedSymptoms.length === 0}
        className={`
          w-full btn flex items-center justify-center
          ${selectedSymptoms.length > 0 ? 'btn-primary' : 'btn-outline opacity-60 cursor-not-allowed'}
        `}
      >
        <CheckCircle size={16} className="mr-2" />
        Submit Symptoms
      </button>
    </motion.div>
  );
};
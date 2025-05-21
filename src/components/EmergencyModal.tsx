import React from 'react';
import { X, PhoneCall, Clock, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

interface EmergencyModalProps {
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center border-b border-neutral-200 p-4 bg-accent-500 text-white rounded-t-xl">
          <h2 className="text-lg font-semibold flex items-center">
            <AlertTriangle className="mr-2" size={20} />
            Emergency Resources
          </h2>
          <button 
            onClick={onClose}
            className="text-white hover:text-neutral-100 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4 space-y-6">
          <div className="bg-accent-50 border border-accent-200 p-3 rounded-lg">
            <p className="text-accent-800 text-sm">
              If you are experiencing a medical emergency, please call emergency services immediately
              or go to your nearest emergency room.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-neutral-800 mb-3 flex items-center">
              <PhoneCall size={18} className="mr-2 text-accent-500" />
              Emergency Contact Numbers
            </h3>
            
            <div className="space-y-3">
              <div className="border border-neutral-200 rounded-lg p-3">
                <h4 className="font-medium text-accent-600">Emergency Services</h4>
                <p className="text-2xl font-bold text-accent-700">911</p>
                <p className="text-xs text-neutral-500">United States</p>
              </div>
              
              <div className="border border-neutral-200 rounded-lg p-3">
                <h4 className="font-medium text-neutral-700">Poison Control</h4>
                <p className="text-lg font-bold text-neutral-800">(800) 222-1222</p>
                <p className="text-xs text-neutral-500">United States</p>
              </div>
              
              <div className="border border-neutral-200 rounded-lg p-3">
                <h4 className="font-medium text-neutral-700">Suicide Prevention Lifeline</h4>
                <p className="text-lg font-bold text-neutral-800">988</p>
                <p className="text-xs text-neutral-500">United States</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-neutral-800 mb-3 flex items-center">
              <Clock size={18} className="mr-2 text-primary-500" />
              When to Seek Immediate Help
            </h3>
            
            <ul className="space-y-2 text-sm text-neutral-700">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-accent-100 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <span className="text-accent-700 text-xs">!</span>
                </div>
                <span>Difficulty breathing or shortness of breath</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-accent-100 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <span className="text-accent-700 text-xs">!</span>
                </div>
                <span>Chest pain or pressure</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-accent-100 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <span className="text-accent-700 text-xs">!</span>
                </div>
                <span>Severe bleeding or wounds</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-accent-100 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <span className="text-accent-700 text-xs">!</span>
                </div>
                <span>Sudden severe headache with no known cause</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-accent-100 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <span className="text-accent-700 text-xs">!</span>
                </div>
                <span>Sudden confusion, trouble speaking or understanding speech</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-accent-100 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                  <span className="text-accent-700 text-xs">!</span>
                </div>
                <span>Sudden numbness or weakness of face, arm or leg</span>
              </li>
            </ul>
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
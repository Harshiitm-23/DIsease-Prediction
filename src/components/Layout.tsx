import React, { ReactNode } from 'react';
import { Heart, AlertCircle, Info, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface LayoutProps {
  children: ReactNode;
  onAboutClick: () => void;
  onEmergencyClick: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  onAboutClick,
  onEmergencyClick
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Heart className="h-6 w-6 text-primary-500 mr-2" />
            <h1 className="text-xl font-bold text-neutral-800">MediChat</h1>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <button 
              onClick={onEmergencyClick}
              className="btn btn-accent flex items-center"
            >
              <AlertCircle size={16} className="mr-2" />
              Emergency
            </button>
            <button 
              onClick={onAboutClick}
              className="btn btn-outline flex items-center"
            >
              <Info size={16} className="mr-2" />
              About
            </button>
          </nav>
        </div>
        
        {/* Mobile menu */}
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t border-neutral-100 px-4 py-2"
          >
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => {
                  onEmergencyClick();
                  setMenuOpen(false);
                }}
                className="btn btn-accent flex items-center justify-center"
              >
                <AlertCircle size={16} className="mr-2" />
                Emergency
              </button>
              <button 
                onClick={() => {
                  onAboutClick();
                  setMenuOpen(false);
                }}
                className="btn btn-outline flex items-center justify-center"
              >
                <Info size={16} className="mr-2" />
                About
              </button>
            </div>
          </motion.div>
        )}
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="bg-white border-t border-neutral-200 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-neutral-500">
            MediChat is for informational purposes only. Always consult a healthcare professional for medical advice.
          </p>
        </div>
      </footer>
    </div>
  );
};
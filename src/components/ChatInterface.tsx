import React, { useState, useRef, useEffect } from 'react';
import { Send, ArrowRight, Loader, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Message } from '../types';
import { ChatMessage } from './ChatMessage';
import { SymptomSelector } from './SymptomSelector';
import { ResultCard } from './ResultCard';
import { useChatbot } from '../hooks/useChatbot';

export const ChatInterface: React.FC = () => {
  const [input, setInput] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  const { 
    messages, 
    isTyping, 
    symptomSelectionActive, 
    selectedSymptoms,
    predictions,
    sendMessage,
    selectSymptom,
    removeSymptom,
    submitSymptoms,
    resetChat
  } = useChatbot();

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <div className="chat-container rounded-2xl shadow-xl border border-white/20 overflow-hidden h-[calc(100vh-12rem)] flex flex-col">
        {/* Chat header */}
        <div className="p-4 border-b border-neutral-200 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-lg">
              <MessageSquare className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-lg">MediChat Assistant</h2>
              <p className="text-sm text-neutral-500">AI-powered symptom analysis</p>
            </div>
          </div>
        </div>

        {/* Chat messages */}
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-4"
        >
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ChatMessage message={message} />
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-start"
            >
              <div className="assistant-message p-3 max-w-[80%]">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            </motion.div>
          )}
          
          {symptomSelectionActive && (
            <SymptomSelector 
              selectedSymptoms={selectedSymptoms}
              onSelect={selectSymptom}
              onRemove={removeSymptom}
              onSubmit={submitSymptoms}
            />
          )}
          
          {predictions.length > 0 && (
            <ResultCard 
              diseases={predictions}
              onReset={resetChat}
            />
          )}
        </div>
        
        {/* Input area */}
        <form 
          onSubmit={handleSubmit}
          className="border-t border-neutral-200 p-4 bg-white/80 backdrop-blur-sm"
        >
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe your symptoms..."
              className="input flex-1"
              disabled={isTyping || symptomSelectionActive}
            />
            <button 
              type="submit"
              className="btn btn-primary"
              disabled={!input.trim() || isTyping || symptomSelectionActive}
            >
              {isTyping ? (
                <Loader className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
              <span className="sr-only">Send</span>
            </button>
          </div>
          
          {messages.length <= 1 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-3 flex flex-wrap gap-2"
            >
              {[
                "I have a headache and fever",
                "My throat hurts and I have a cough",
                "I feel tired and dizzy"
              ].map((prompt, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="btn btn-outline text-sm py-1.5 group"
                >
                  {prompt}
                  <ArrowRight className="h-3 w-3 ml-1.5 transition-transform group-hover:translate-x-1" />
                </button>
              ))}
            </motion.div>
          )}
        </form>
      </div>
    </div>
  );
};
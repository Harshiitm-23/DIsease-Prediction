import React from 'react';
import { Heart, User } from 'lucide-react';
import { Message } from '../types';
import ReactMarkdown from 'react-markdown';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex items-start ${isUser ? 'justify-end' : 'justify-start'} group`}>
      {!isUser && (
        <div className="flex-shrink-0 mr-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <Heart className="h-4 w-4 text-white" />
          </div>
        </div>
      )}
      
      <div className={`
        max-w-[80%] p-3
        ${isUser 
          ? 'user-message rounded-tr-none' 
          : 'assistant-message rounded-tl-none'}
      `}>
        <div className="prose prose-sm">
          <ReactMarkdown>{message.content}</ReactMarkdown>
        </div>
      </div>
      
      {isUser && (
        <div className="flex-shrink-0 ml-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
            <User className="h-4 w-4 text-white" />
          </div>
        </div>
      )}
    </div>
  );
};
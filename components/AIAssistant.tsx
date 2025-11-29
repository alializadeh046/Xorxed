import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';
import { getShoppingAdvice } from '../services/geminiService';
import { ChatMessage, MessageRole } from '../types';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: MessageRole.MODEL, text: "سلام! 👋 من دستیار هوشمند مهران ۳دی‌پی هستم. چطور می‌تونم در خرید پرینتر یا مواد مصرفی بهتون کمک کنم؟" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setIsLoading(true);

    const newMessages = [
        ...messages,
        { role: MessageRole.USER, text: userMsg }
    ];
    setMessages(newMessages);

    // Format history for Gemini
    const history = newMessages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
    }));

    const response = await getShoppingAdvice(userMsg, history.slice(0, -1)); // Send history excluding current user msg (handled by sendMsg if chat session, but here simplifying to simple prompt or session logic)
    
    // In this specific Gemini SDK version pattern, we usually maintain session state in the service if using chat.sendMessage. 
    // For simplicity in this UI component, we append response.
    
    setMessages(prev => [...prev, { role: MessageRole.MODEL, text: response }]);
    setIsLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-secondary hover:bg-primary text-white p-4 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center gap-2 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <Sparkles size={20} className="text-yellow-400" />
        <span className="font-bold hidden md:inline">مشاوره هوشمند</span>
      </button>

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 md:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden max-h-[500px] animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-secondary p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
                <div className="bg-white/20 p-1.5 rounded-lg">
                    <Bot size={20} />
                </div>
                <div>
                    <h3 className="font-bold text-sm">مشاور مهران ۳دی‌پی</h3>
                    <span className="text-[10px] text-green-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                        آنلاین (Gemini AI)
                    </span>
                </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3 h-[300px]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === MessageRole.USER ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed ${
                  msg.role === MessageRole.USER 
                    ? 'bg-primary text-white rounded-br-none' 
                    : 'bg-white border border-gray-200 text-gray-700 rounded-bl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-none p-3 shadow-sm flex items-center gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="سوال خود را بپرسید..."
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-primary hover:bg-green-600 text-white p-2 rounded-full transition-colors disabled:opacity-50"
            >
              <Send size={18} className={isLoading ? 'opacity-0' : 'opacity-100'} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

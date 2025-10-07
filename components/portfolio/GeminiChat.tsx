import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ChatMessage } from '../../types';
import { generateChatResponse } from '../../services/geminiService';
import { useScrollAnimation, sectionVariants, itemVariants } from '../../hooks/useScrollAnimation';
import { SendIcon } from '../Icons';

const GeminiChat: React.FC = () => {
    const [ref, controls] = useScrollAnimation();
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        // Only scroll to the bottom if there are messages to prevent scrolling on initial load.
        if (messages.length > 0) {
            scrollToBottom();
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: ChatMessage = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        const aiResponseText = await generateChatResponse(input);
        
        const aiMessage: ChatMessage = { sender: 'gemini', text: aiResponseText };
        setMessages(prev => [...prev, aiMessage]);
        setIsLoading(false);
    };

    return (
        <motion.section 
            id="chat" 
            className="py-24"
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={controls}
        >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-text-light mb-12 text-center">
                Chat with my AI Assistant
            </motion.h2>
            <motion.div variants={itemVariants} className="max-w-2xl mx-auto bg-primary rounded-lg shadow-xl flex flex-col h-[60vh] max-h-[700px]">
                <div className="flex-grow p-4 overflow-y-auto">
                    {messages.length === 0 ? (
                        <div className="flex justify-center items-center h-full">
                            <p className="text-text-muted">Ask me anything about my portfolio!</p>
                        </div>
                    ) : (
                        <AnimatePresence>
                            {messages.map((msg, index) => (
                                <motion.div
                                    key={index}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{
                                        opacity: { duration: 0.2 },
                                        layout: {
                                            type: "spring",
                                            bounce: 0.4,
                                            duration: 0.4
                                        }
                                    }}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
                                >
                                    <div className={`max-w-xs md:max-w-md p-3 rounded-lg ${msg.sender === 'user' ? 'bg-accent text-white' : 'bg-gray-700 text-text-normal'}`}>
                                        <p style={{whiteSpace: 'pre-wrap'}}>{msg.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    )}
                    {isLoading && (
                        <div className="flex justify-start mb-4">
                            <div className="max-w-xs md:max-w-md p-3 rounded-lg bg-gray-700 text-text-normal">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-text-muted rounded-full animate-pulse"></div>
                                    <div className="w-2 h-2 bg-text-muted rounded-full animate-pulse delay-75"></div>
                                    <div className="w-2 h-2 bg-text-muted rounded-full animate-pulse delay-150"></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                <div className="p-4 border-t border-gray-700">
                    <div className="flex items-center bg-dark-bg rounded-full border border-gray-700 focus-within:ring-2 focus-within:ring-accent">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type your message..."
                            className="w-full bg-transparent px-4 py-2 text-text-light focus:outline-none"
                            disabled={isLoading}
                        />
                        <button onClick={handleSend} disabled={isLoading || !input.trim()} className="p-3 text-accent disabled:text-text-muted disabled:cursor-not-allowed hover:opacity-80 transition-opacity">
                            <SendIcon />
                        </button>
                    </div>
                </div>
            </motion.div>
        </motion.section>
    );
};

export default GeminiChat;
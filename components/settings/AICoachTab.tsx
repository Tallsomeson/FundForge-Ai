import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

interface Message {
    text: string;
    sender: 'user' | 'ai';
}

export const AICoachTab: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSendMessage = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { text: input, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);
        setError('');

        if (!process.env.API_KEY) {
            setError("API Key not configured.");
            setIsLoading(false);
            const aiMessage: Message = { text: "I can't respond without an API key.", sender: 'ai' };
            setMessages(prev => [...prev, aiMessage]);
            return;
        }

        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const systemInstruction = `You are an AI Coach for startup founders, specializing in fundraising strategy.
        Your name is Forge. You are supportive, insightful, and provide actionable advice.
        Keep your answers concise and focused on the founder's questions.
        You can answer questions about pitch decks, investor outreach, term sheets, and general startup strategy.`;

        const history = messages.map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
        }));

        try {
            const chat = ai.chats.create({
                model: 'gemini-2.5-pro',
                config: { systemInstruction },
                history: history
            });
            const response = await chat.sendMessage({ message: input });

            const aiMessage: Message = { text: response.text, sender: 'ai' };
            setMessages(prev => [...prev, aiMessage]);
        } catch (err) {
            console.error(err);
            const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred.";
            setError(`Failed to get response: ${errorMessage}`);
            const aiMessage: Message = { text: `Sorry, I encountered an error: ${errorMessage}`, sender: 'ai' };
            setMessages(prev => [...prev, aiMessage]);
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <div className="flex flex-col h-full max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-light-gray">AI Fundraising Coach</h2>
            <p className="mt-2 text-medium-gray">Ask me anything about your pitch deck, investor strategy, or term sheets. I'm here to help.</p>

            <div className="mt-6 flex-1 bg-dark-gray/50 rounded-lg border border-gray-700/50 flex flex-col overflow-hidden">
                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                    {messages.length === 0 && (
                        <div className="text-center text-medium-gray p-8">
                            <p>No messages yet. Start the conversation!</p>
                            <p className="text-sm mt-2">e.g., "How should I structure my 'Go-to-Market' slide?"</p>
                        </div>
                    )}
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-lg p-3 rounded-lg ${msg.sender === 'user' ? 'bg-green-accent text-darker-gray' : 'bg-navy'}`}>
                                <p className="text-sm" style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</p>
                            </div>
                        </div>
                    ))}
                     {isLoading && (
                        <div className="flex justify-start">
                            <div className="max-w-lg p-3 rounded-lg bg-navy">
                               <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse [animation-delay:0.2s]"></div>
                                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse [animation-delay:0.4s]"></div>
                               </div>
                            </div>
                        </div>
                    )}
                    {error && <p className="text-sm text-red-400 text-center">{error}</p>}
                </div>
                <div className="p-4 border-t border-gray-700 bg-dark-gray">
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
                            placeholder="Ask a question..."
                            className="flex-1 rounded-md border-0 bg-navy py-1.5 px-3 text-white shadow-sm ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-green-accent"
                            disabled={isLoading}
                        />
                        <button
                            onClick={handleSendMessage}
                            disabled={isLoading}
                            className="rounded-md bg-green-accent p-2 text-darker-gray shadow-sm hover:bg-green-accent/80 disabled:opacity-50"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.949a.75.75 0 00.95.826L11.25 9.25v1.5L4.643 11.98a.75.75 0 00-.95.826l-1.414 4.95a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

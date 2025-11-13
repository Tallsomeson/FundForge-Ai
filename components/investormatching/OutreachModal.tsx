import React, { useState, useEffect } from 'react';
import { Investor } from './mockData';
import { GoogleGenAI } from '@google/genai';

interface OutreachModalProps {
    investor: Investor;
    onClose: () => void;
}

export const OutreachModal: React.FC<OutreachModalProps> = ({ investor, onClose }) => {
    const [subject, setSubject] = useState(`Intro: [Your Company Name] - Revolutionizing [Your Sector]`);
    const [body, setBody] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [error, setError] = useState('');

    const generateEmailBody = async () => {
        if (!process.env.API_KEY) {
            setError("API Key is not configured. Cannot generate email.");
            return;
        }
        setIsGenerating(true);
        setError('');
        setBody('');

        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        const prompt = `You are a helpful assistant for a startup founder. Your task is to draft a concise, compelling, and professional cold outreach email to a potential investor.

        **Investor Details:**
        - Name: ${investor.name}
        - Fund: ${investor.fund}
        - Investment Thesis: ${investor.thesis}
        - Focus Sectors: ${investor.sectors.join(', ')}

        **Instructions:**
        1.  Start with a personalized greeting to ${investor.name}.
        2.  Briefly introduce the startup (use "[Your Company Name]" as a placeholder).
        3.  Clearly state the problem the startup is solving in the "[Your Sector]" space.
        4.  Explain the solution and highlight key traction or metrics (use placeholders like "[Key Metric e.g., $10k MRR]" or "[Key Achievement e.g., 20% MoM growth]").
        5.  Explicitly connect the startup to the investor's thesis and/or portfolio. Why are they a good fit?
        6.  End with a clear call to action (e.g., a brief 15-minute call).
        7.  Keep the entire email under 200 words. It should be easily scannable.
        8.  Do not include a subject line.

        Draft the email body now.`;

        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-pro',
                contents: prompt,
                config: {
                    temperature: 0.5,
                }
            });

            setBody(response.text.trim());
        } catch (err) {
            console.error("Error generating email:", err);
            setError(err instanceof Error ? `Failed to generate email: ${err.message}` : "An unknown error occurred.");
            setBody("Could not generate email body. Please try again or write your own.");
        } finally {
            setIsGenerating(false);
        }
    };
    
    // Auto-generate on mount
    useEffect(() => {
        generateEmailBody();
    }, []);

    return (
         <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-darker-gray bg-opacity-80 backdrop-blur-sm transition-opacity"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-2xl bg-navy text-left shadow-2xl shadow-navy/50 transition-all sm:my-8 sm:w-full sm:max-w-2xl border border-gray-700">
                        <div className="bg-navy p-6 sm:p-8">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold leading-6 text-light-gray" id="modal-title">
                                        Draft Outreach to {investor.name}
                                    </h3>
                                    <p className="mt-1 text-sm text-medium-gray">Review and edit the AI-generated draft below.</p>
                                </div>
                                <button onClick={onClose} className="-m-2 p-2 text-gray-400 hover:text-white">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>

                            <div className="mt-6 space-y-4">
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-300">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                        className="mt-1 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-accent sm:text-sm"
                                    />
                                </div>
                                <div>
                                     <label htmlFor="body" className="block text-sm font-medium leading-6 text-gray-300">Body</label>
                                     <div className="relative mt-1">
                                         <textarea
                                            id="body"
                                            rows={12}
                                            value={body}
                                            onChange={(e) => setBody(e.target.value)}
                                            className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-accent sm:text-sm"
                                            placeholder="Generating email..."
                                        />
                                        {isGenerating && (
                                            <div className="absolute inset-0 bg-navy/50 flex items-center justify-center">
                                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-accent"></div>
                                            </div>
                                        )}
                                     </div>
                                      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
                                </div>
                            </div>
                             <div className="mt-6 flex justify-between items-center">
                                <button 
                                    onClick={generateEmailBody}
                                    disabled={isGenerating}
                                    className="text-sm font-semibold text-gold-accent hover:text-gold-accent/80 disabled:opacity-50"
                                >
                                    Regenerate
                                </button>
                                <div className="flex gap-4">
                                    <button onClick={onClose} className="rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20">
                                        Cancel
                                    </button>
                                    <button onClick={onClose} className="rounded-md bg-green-accent px-4 py-2 text-sm font-semibold text-darker-gray shadow-sm hover:bg-green-accent/80">
                                        Send Email
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

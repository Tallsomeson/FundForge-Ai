import React, { useState, useEffect } from 'react';
import { Company } from './mockData';
import { GoogleGenAI } from '@google/genai';

interface LPReportModalProps {
    companies: Company[];
    onClose: () => void;
}

export const LPReportModal: React.FC<LPReportModalProps> = ({ companies, onClose }) => {
    const [report, setReport] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const [error, setError] = useState('');

    const generateReport = async () => {
        if (!process.env.API_KEY) {
            setError("API Key is not configured.");
            return;
        }
        setIsGenerating(true);
        setError('');
        setReport('');

        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        const companiesData = companies.map(c => 
            `- ${c.name} (${c.sector}): Invested ${c.invested} for ${c.ownership}%. Recent KPIs: ${c.kpis.map(k => `${k.name}: ${k.value} (${k.change > 0 ? '+' : ''}${k.change}%)`).join(', ')}.`
        ).join('\n');

        const prompt = `You are a Venture Capital fund manager writing a quarterly update for your Limited Partners (LPs).
        Based on the following portfolio data, write a concise but insightful summary of the fund's performance this quarter.

        **Portfolio Data:**
        ${companiesData}

        **Instructions:**
        1. Start with a high-level summary of the portfolio's health.
        2. Highlight 1-2 top-performing companies, mentioning their strong KPI growth (e.g., MRR).
        3. Briefly mention any potential concerns or companies to watch, without being overly negative.
        4. Conclude with an optimistic outlook for the next quarter.
        5. The tone should be professional, confident, and transparent.
        6. The entire report should be 3-4 paragraphs long.

        Generate the report now.`;

        try {
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-pro',
                contents: prompt,
                config: { temperature: 0.6 }
            });
            setReport(response.text.trim());
        } catch (err) {
            setError(err instanceof Error ? `Failed to generate report: ${err.message}` : "An unknown error occurred.");
        } finally {
            setIsGenerating(false);
        }
    };
    
    useEffect(() => {
        generateReport();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
         <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-darker-gray bg-opacity-80 backdrop-blur-sm transition-opacity"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-2xl bg-navy text-left shadow-2xl shadow-navy/50 transition-all sm:my-8 sm:w-full sm:max-w-2xl border border-gray-700">
                        <div className="bg-navy p-6 sm:p-8">
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-bold leading-6 text-light-gray" id="modal-title">
                                    AI-Generated LP Report Draft
                                </h3>
                                <button onClick={onClose} className="-m-2 p-2 text-gray-400 hover:text-white">
                                     <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>

                            <div className="mt-6">
                                 <div className="relative mt-1">
                                     <textarea
                                        rows={15}
                                        value={report}
                                        readOnly
                                        className="block w-full rounded-md border-0 bg-dark-gray p-3 text-white ring-1 ring-inset ring-gray-600 leading-relaxed"
                                        placeholder="Generating report..."
                                    />
                                    {isGenerating && (
                                        <div className="absolute inset-0 bg-navy/50 flex items-center justify-center rounded-md">
                                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold-accent"></div>
                                        </div>
                                    )}
                                 </div>
                                  {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
                            </div>

                             <div className="mt-6 flex justify-between items-center">
                                <button 
                                    onClick={generateReport}
                                    disabled={isGenerating}
                                    className="text-sm font-semibold text-gold-accent hover:text-gold-accent/80 disabled:opacity-50"
                                >
                                    Regenerate
                                </button>
                                <div className="flex gap-4">
                                    <button onClick={onClose} className="rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20">
                                        Close
                                    </button>
                                    <button onClick={() => navigator.clipboard.writeText(report)} className="rounded-md bg-green-accent px-4 py-2 text-sm font-semibold text-darker-gray shadow-sm hover:bg-green-accent/80">
                                        Copy Report
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

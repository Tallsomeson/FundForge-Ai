import React, { useState, useCallback, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { analyzeDeck } from '../services/geminiService';
// Fix: Corrected import path to be relative
import { DeckAnalysisResult } from '../types';
import { ShareModal } from './pitchdeck/ShareModal';

const ResultDisplay: React.FC<{ result: DeckAnalysisResult; onShare: () => void; onAnalyzeNew: () => void }> = ({ result, onShare, onAnalyzeNew }) => {
    
    const getScoreColor = (score: number, maxScore: number = 100) => {
        const percentage = (score / maxScore) * 100;
        if (percentage < 50) return 'text-red-400';
        if (percentage < 80) return 'text-yellow-400';
        return 'text-green-accent';
    };

    return (
        <div className="bg-dark-gray/50 p-6 sm:p-8 rounded-lg border border-gray-700/50 animate-fade-in">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-2xl font-bold text-light-gray">Analysis Complete</h3>
                    <p className="mt-1 text-medium-gray">Here's the breakdown of your pitch deck.</p>
                </div>
                <div className="flex gap-2">
                    <button onClick={onShare} className="rounded-md bg-white/10 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20">Share</button>
                    <button onClick={onAnalyzeNew} className="rounded-md bg-green-accent px-3 py-1.5 text-sm font-semibold text-darker-gray shadow-sm hover:bg-green-accent/80">Analyze New Deck</button>
                </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1 bg-navy/50 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-sm font-semibold text-medium-gray uppercase tracking-wider">Overall Score</h4>
                    <p className={`text-6xl font-bold mt-2 ${getScoreColor(result.overallScore)}`}>{result.overallScore}<span className="text-3xl text-medium-gray">/100</span></p>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 mt-4">
                        <div className="bg-green-accent h-2.5 rounded-full" style={{ width: `${result.overallScore}%` }}></div>
                    </div>
                </div>
                <div className="md:col-span-2 bg-navy/50 p-6 rounded-lg border border-gray-700">
                    <h4 className="text-sm font-semibold text-medium-gray uppercase tracking-wider">Executive Summary</h4>
                    <p className="mt-2 text-light-gray">{result.overallSummary}</p>
                </div>
            </div>

            <div className="mt-8">
                <h4 className="text-xl font-bold text-light-gray">Slide-by-Slide Breakdown</h4>
                <div className="mt-4 space-y-4">
                    {result.slideBySlideAnalysis.map((slide) => (
                        <details key={slide.slideNumber} className="bg-navy/50 rounded-lg border border-gray-700 open:ring-1 open:ring-gray-600">
                            <summary className="p-4 cursor-pointer flex justify-between items-center">
                                <div className="font-semibold text-light-gray">{`Slide ${slide.slideNumber}: ${slide.title}`}</div>
                                <div className={`font-bold ${getScoreColor(slide.score, 10)}`}>{slide.score}/10</div>
                            </summary>
                            <div className="p-4 border-t border-gray-700">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h5 className="font-semibold text-green-accent">Positive Points</h5>
                                        <ul className="list-disc list-inside mt-2 text-medium-gray space-y-1">
                                            {slide.positivePoints.map((point, i) => <li key={i}>{point}</li>)}
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="font-semibold text-yellow-400">Areas for Improvement</h5>
                                        <ul className="list-disc list-inside mt-2 text-medium-gray space-y-1">
                                            {slide.improvementAreas.map((point, i) => <li key={i}>{point}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </div>
    );
};


export const DeckDoctor: React.FC = () => {
    const [deckFile, setDeckFile] = useState<File | null>(null);
    const [analysisResult, setAnalysisResult] = useState<DeckAnalysisResult | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showShareModal, setShowShareModal] = useState(false);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            setError(null);
            setDeckFile(acceptedFiles[0]);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'application/pdf': ['.pdf'] },
        maxFiles: 1,
        multiple: false,
    });
    
    const handleAnalyzeClick = async () => {
        if (!deckFile) {
            setError("Please select a deck file first.");
            return;
        }
        setIsLoading(true);
        setError(null);
        setAnalysisResult(null);
        try {
            const result = await analyzeDeck(deckFile);
            setAnalysisResult(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : "An unknown error occurred.");
        } finally {
            setIsLoading(false);
        }
    };
    
    const resetState = () => {
        setDeckFile(null);
        setAnalysisResult(null);
        setError(null);
        setIsLoading(false);
    }
    
    const fileName = useMemo(() => deckFile?.name, [deckFile]);

    if (isLoading) {
        return (
            <div className="bg-dark-gray/50 p-8 rounded-lg border border-gray-700/50 text-center animate-fade-in">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-accent mx-auto"></div>
                <h3 className="mt-4 text-xl font-semibold text-light-gray">Analyzing Your Deck...</h3>
                <p className="mt-2 text-medium-gray">This can take a minute. Our AI is reviewing every slide.</p>
            </div>
        );
    }

    if (analysisResult) {
        return <ResultDisplay result={analysisResult} onShare={() => setShowShareModal(true)} onAnalyzeNew={resetState} />;
    }

    return (
        <>
        <div className="bg-dark-gray/50 p-6 sm:p-8 rounded-lg border border-gray-700/50">
            <div {...getRootProps()} className={`p-10 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${isDragActive ? 'border-green-accent bg-navy/30' : 'border-gray-600 hover:border-gray-500'}`}>
                <input {...getInputProps()} />
                <div className="text-center">
                     <svg className="mx-auto h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    <p className="mt-4 text-sm text-medium-gray">
                        {isDragActive ?
                            "Drop the file here..." :
                            "Drag 'n' drop your pitch deck here, or click to select a file"
                        }
                    </p>
                    <p className="text-xs text-gray-500 mt-1">PDF up to 20MB</p>
                </div>
            </div>
            {fileName && (
                <div className="mt-4 text-center text-sm text-green-accent font-medium">
                    Selected file: {fileName}
                </div>
            )}
             {error && (
                <div className="mt-4 text-center text-sm text-red-400">
                    {error}
                </div>
            )}
            <div className="mt-6 text-center">
                <button
                    onClick={handleAnalyzeClick}
                    disabled={!deckFile || isLoading}
                    className="rounded-md bg-green-accent px-8 py-3 text-base font-semibold text-darker-gray shadow-sm hover:bg-green-accent/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-accent disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Analyze My Deck
                </button>
            </div>
        </div>
        {showShareModal && <ShareModal onClose={() => setShowShareModal(false)} />}
        </>
    );
};

import React from 'react';
import { Deck } from './mockData';

interface DeckCardProps {
    deck: Deck;
}

export const DeckCard: React.FC<DeckCardProps> = ({ deck }) => {
    const getScoreColor = (score: number) => {
        if (score < 50) return 'text-red-400';
        if (score < 80) return 'text-yellow-400';
        return 'text-green-accent';
    };

    return (
        <div className="bg-dark-gray/50 p-6 rounded-lg border border-gray-700/50 flex flex-col justify-between">
            <div>
                <h3 className="font-bold text-light-gray">{deck.name} (v{deck.version})</h3>
                <p className="text-xs text-medium-gray mt-1">Last updated: {deck.lastUpdated}</p>
            </div>
            <div className="mt-4 flex justify-between items-end">
                <div>
                    <p className="text-xs text-medium-gray uppercase">AI Score</p>
                    <p className={`text-2xl font-bold ${getScoreColor(deck.analysisScore)}`}>{deck.analysisScore}</p>
                </div>
                <div>
                    <p className="text-xs text-medium-gray uppercase">Views</p>
                    <p className="text-2xl font-bold text-light-gray">{deck.views}</p>
                </div>
                <a href="#" className="text-sm font-semibold text-gold-accent hover:text-gold-accent/80">
                    View
                </a>
            </div>
        </div>
    );
};

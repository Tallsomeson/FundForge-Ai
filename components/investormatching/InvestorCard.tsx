import React from 'react';
import { Investor } from './mockData';

interface InvestorCardProps {
    investor: Investor;
    isSelected: boolean;
    onSelect: () => void;
}

export const InvestorCard: React.FC<InvestorCardProps> = ({ investor, isSelected, onSelect }) => {
    return (
        <button
            onClick={onSelect}
            className={`w-full text-left p-4 border-b border-gray-700 flex items-start gap-4 transition-colors ${isSelected ? 'bg-navy' : 'hover:bg-dark-gray/60'}`}
        >
            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <div>
                        <p className="font-bold text-light-gray">{investor.name}</p>
                        <p className="text-sm text-medium-gray">{investor.title}, {investor.fund}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-semibold text-green-accent font-mono">{investor.matchScore}%</p>
                        <p className="text-xs text-medium-gray">Match</p>
                    </div>
                </div>
                <p className="mt-2 text-xs text-gray-400 line-clamp-2">
                    {investor.thesis}
                </p>
            </div>
        </button>
    );
};
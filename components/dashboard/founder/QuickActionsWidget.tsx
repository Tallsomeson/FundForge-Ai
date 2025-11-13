
import React from 'react';

export const QuickActionsWidget: React.FC = () => {
    return (
        <div className="bg-dark-gray/50 p-6 rounded-lg border border-gray-700/50 h-full flex flex-col justify-center">
            <h4 className="text-sm font-semibold text-medium-gray uppercase tracking-wider mb-4 text-center">Quick Actions</h4>
            <div className="space-y-3">
                <button className="w-full rounded-md bg-green-accent px-3 py-2 text-sm font-semibold text-darker-gray shadow-sm hover:bg-green-accent/80">
                    Analyze a New Deck
                </button>
                 <button className="w-full rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20">
                    Find New Investors
                </button>
                 <button className="w-full rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20">
                    Update Data Room
                </button>
            </div>
        </div>
    );
};

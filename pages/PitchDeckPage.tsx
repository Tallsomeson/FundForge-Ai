import React from 'react';
import { mockDecks } from '../components/deck/mockData';
import { DeckCard } from '../components/deck/DeckCard';

export const PitchDeckPage: React.FC = () => {
    return (
        <div className="p-4 sm:p-8 space-y-8 animate-fade-in">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white">My Pitch Decks</h1>
                    <p className="mt-2 text-medium-gray">Manage, analyze, and share your pitch decks.</p>
                </div>
                <button className="rounded-md bg-green-accent px-4 py-2 text-sm font-semibold text-darker-gray shadow-sm hover:bg-green-accent/80">
                    Upload New Deck
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockDecks.map(deck => <DeckCard key={deck.id} deck={deck} />)}
            </div>
        </div>
    );
};

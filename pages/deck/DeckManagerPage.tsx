import React from 'react';
import { mockDecks } from '../../components/deck/mockData';
import { DeckCard } from '../../components/deck/DeckCard';

export const DeckManagerPage: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-light-gray">My Pitch Decks</h2>
                    <p className="mt-2 text-medium-gray">Manage, analyze, and share your pitch decks.</p>
                </div>
                <a href="/deck/upload" className="rounded-md bg-green-accent px-4 py-2 text-sm font-semibold text-darker-gray shadow-sm hover:bg-green-accent/80">
                    Upload New Deck
                </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockDecks.map(deck => <DeckCard key={deck.id} deck={deck} />)}
            </div>
        </div>
    );
};

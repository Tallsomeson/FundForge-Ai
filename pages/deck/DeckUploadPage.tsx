import React from 'react';
import { DeckDoctor } from '../../components/DeckDoctor';

export const DeckUploadPage: React.FC = () => {
    return (
        <div className="p-4 sm:p-8">
            <h1 className="text-3xl font-bold text-white">Upload & Analyze Deck</h1>
            <div className="mt-8 max-w-4xl">
                <DeckDoctor />
            </div>
        </div>
    );
};

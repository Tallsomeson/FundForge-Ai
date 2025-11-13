
export interface Deck {
    id: string;
    name: string;
    version: number;
    lastUpdated: string;
    analysisScore: number;
    views: number;
}

export const mockDecks: Deck[] = [
    { id: '1', name: 'Seed Round Deck', version: 3, lastUpdated: '2024-07-18', analysisScore: 88, views: 42 },
    { id: '2', name: 'Investor Update Q2', version: 1, lastUpdated: '2024-07-01', analysisScore: 75, views: 15 },
    { id: '3', name: 'Product Deep Dive', version: 2, lastUpdated: '2024-06-20', analysisScore: 92, views: 8 },
];


export type InvestorStage = 'Research' | 'Contacted' | 'Meeting' | 'Due Diligence' | 'Closed';

export interface InvestorCardData {
    id: string;
    name: string;
    fund: string;
    stage: InvestorStage;
}

export const mockInvestorPipeline: Record<InvestorStage, InvestorCardData[]> = {
    'Research': [
        { id: '1', name: 'Aria Montgomery', fund: 'Velocity Ventures', stage: 'Research' },
        { id: '2', name: 'Caleb Rivers', fund: 'Nexus Capital', stage: 'Research' },
    ],
    'Contacted': [
        { id: '3', name: 'Hanna Marin', fund: 'Marin Investments', stage: 'Contacted' },
    ],
    'Meeting': [
         { id: '4', name: 'Spencer Hastings', fund: 'Frontier Growth', stage: 'Meeting' },
    ],
    'Due Diligence': [],
    'Closed': [],
};

export interface ActivityItem {
    id: string;
    type: 'deck_view' | 'new_match' | 'comment';
    text: string;
    timestamp: string;
}

export const mockActivityFeed: ActivityItem[] = [
    { id: '1', type: 'deck_view', text: 'Aria Montgomery viewed your Seed Round Deck.', timestamp: '2h ago' },
    { id: '2', type: 'new_match', text: 'New investor match: Ezra Fitz from Rosewood Equity.', timestamp: '8h ago' },
    { id: '3', type: 'deck_view', text: 'Caleb Rivers viewed your Seed Round Deck.', timestamp: '1d ago' },
];

export interface DeckPerformanceData {
    views: number;
    viewRate: number;
    avgTime: string;
}

export const mockDeckPerformance: DeckPerformanceData = {
    views: 42,
    viewRate: 68,
    avgTime: '2m 45s'
};


export interface Document {
    id: string;
    name: string;
    type: 'folder' | 'pdf' | 'spreadsheet' | 'deck';
    size?: string;
    lastUpdated: string;
    sharedWith: number;
    children?: Document[];
}

export const mockDocuments: Document[] = [
    { id: '1', name: 'Pitch Decks', type: 'folder', lastUpdated: '2024-07-20', sharedWith: 5, children: [
        { id: '1-1', name: 'Seed Round Deck v3.pdf', type: 'deck', size: '12.4 MB', lastUpdated: '2024-07-18', sharedWith: 5 },
        { id: '1-2', name: 'Investor Update Q2.pdf', type: 'pdf', size: '2.1 MB', lastUpdated: '2024-07-01', sharedWith: 3 },
    ]},
    { id: '2', name: 'Financials', type: 'folder', lastUpdated: '2024-07-19', sharedWith: 3, children: [
        { id: '2-1', name: '5-Year Projections.xlsx', type: 'spreadsheet', size: '850 KB', lastUpdated: '2024-07-19', sharedWith: 3 },
        { id: '2-2', name: 'P&L Statement 2023.pdf', type: 'pdf', size: '400 KB', lastUpdated: '2024-06-15', sharedWith: 2 },
    ]},
    { id: '3', name: 'Product', type: 'folder', lastUpdated: '2024-07-10', sharedWith: 2, children: [] },
    { id: '4', name: 'Legal', type: 'folder', lastUpdated: '2024-06-25', sharedWith: 1, children: [] },
    { id: '5', name: 'Team Bios.pdf', type: 'pdf', size: '3.5 MB', lastUpdated: '2024-07-05', sharedWith: 5 },
];

export interface InvestorAccess {
    id: string;
    name: string;
    fund: string;
    status: 'Active' | 'Pending' | 'Expired';
    accessGranted: string;
    lastViewed: string;
}

export const mockInvestorAccess: InvestorAccess[] = [
    { id: '1', name: 'Aria Montgomery', fund: 'Velocity Ventures', status: 'Active', accessGranted: '2024-07-18', lastViewed: '2024-07-21' },
    { id: '2', name: 'Caleb Rivers', fund: 'Nexus Capital', status: 'Active', accessGranted: '2024-07-15', lastViewed: '2024-07-20' },
    { id: '3', name: 'Spencer Hastings', fund: 'Frontier Growth', status: 'Pending', accessGranted: '2024-07-21', lastViewed: 'Never' },
    { id: '4', name: 'John Smith', fund: 'Seed Investors LLC', status: 'Expired', accessGranted: '2024-06-10', lastViewed: '2024-06-15' },
];
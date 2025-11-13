export type DealStage = 'Screening' | 'Meeting' | 'Due Diligence' | 'Committed' | 'Passed';

export interface DealCardData {
    id: string;
    companyName: string;
    sector: string;
    stage: DealStage;
}

export const mockDealPipeline: Record<DealStage, DealCardData[]> = {
    'Screening': [
        { id: 'd1', companyName: 'QuantumLeap AI', sector: 'AI/ML', stage: 'Screening' },
        { id: 'd2', companyName: 'CarbonCapture Inc.', sector: 'Climate Tech', stage: 'Screening' },
    ],
    'Meeting': [
        { id: 'd3', companyName: 'BioSynth', sector: 'Biotech', stage: 'Meeting' },
    ],
    'Due Diligence': [
         { id: 'd4', companyName: 'Connectly', sector: 'B2B SaaS', stage: 'Due Diligence' },
    ],
    'Committed': [],
    'Passed': [
        { id: 'd5', companyName: 'AdTech Innovations', sector: 'AdTech', stage: 'Passed' },
    ],
};

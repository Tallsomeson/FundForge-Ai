export interface Kpi {
    name: 'MRR' | 'Burn Rate' | 'Runway' | 'Gross Margin';
    value: string;
    change: number; // percentage
}

export interface Company {
    id: number;
    name: string;
    logo: string; // url or path
    description: string;
    sector: string;
    stage: string;
    invested: string; // e.g., '$500k'
    ownership: number; // percentage
    lastUpdate: string;
    kpis: Kpi[];
}

export const mockPortfolio: Company[] = [
    {
        id: 1,
        name: "DataWeave",
        logo: "dataweave.png",
        description: "AI-powered data analytics platform for e-commerce.",
        sector: "B2B SaaS",
        stage: "Series A",
        invested: "$750k",
        ownership: 12.5,
        lastUpdate: "2024-07-15",
        kpis: [
            { name: "MRR", value: "$120k", change: 15 },
            { name: "Burn Rate", value: "$50k/mo", change: -5 },
            { name: "Runway", value: "18 mos", change: 0 },
            { name: "Gross Margin", value: "85%", change: 2 },
        ]
    },
    {
        id: 2,
        name: "SynthAI",
        logo: "synthai.png",
        description: "Generative AI platform for enterprise content creation.",
        sector: "AI/ML",
        stage: "Seed",
        invested: "$250k",
        ownership: 8.0,
        lastUpdate: "2024-07-18",
        kpis: [
            { name: "MRR", value: "$45k", change: 22 },
            { name: "Burn Rate", value: "$30k/mo", change: 10 },
            { name: "Runway", value: "12 mos", change: 0 },
            { name: "Gross Margin", value: "78%", change: -1 },
        ]
    },
    {
        id: 3,
        name: "HealthJoy",
        logo: "healthjoy.png",
        description: "Personalized healthcare navigation platform for employees.",
        sector: "HealthTech",
        stage: "Series B",
        invested: "$1.2M",
        ownership: 7.2,
        lastUpdate: "2024-07-10",
        kpis: [
            { name: "MRR", value: "$450k", change: 8 },
            { name: "Burn Rate", value: "$150k/mo", change: -8 },
            { name: "Runway", value: "24 mos", change: 0 },
            { name: "Gross Margin", value: "65%", change: 3 },
        ]
    }
];

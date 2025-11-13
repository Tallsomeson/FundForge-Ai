export interface Investor {
    id: number;
    name: string;
    title: string;
    fund: string;
    matchScore: number;
    thesis: string;
    sectors: string[];
    stage: string[];
    checkSize: string;
    portfolio: string[];
}

export const mockInvestors: Investor[] = [
    {
        id: 1,
        name: "Aria Montgomery",
        title: "Partner",
        fund: "Velocity Ventures",
        matchScore: 92,
        thesis: "Investing in disruptive B2B SaaS and AI/ML companies at the Seed and Series A stages. We look for strong technical teams with a clear path to product-market fit and scalability.",
        sectors: ["B2B SaaS", "AI/ML", "Fintech"],
        stage: ["Seed", "Series A"],
        checkSize: "$500k - $2M",
        portfolio: ["DataWeave", "SynthAI", "Connectly"]
    },
    {
        id: 2,
        name: "Caleb Rivers",
        title: "Principal",
        fund: "Nexus Capital",
        matchScore: 88,
        thesis: "Focused on deep tech and infrastructure software. We back founders building the foundational layers of the next-generation internet, from developer tools to cybersecurity.",
        sectors: ["DevTools", "Cybersecurity", "Infrastructure"],
        stage: ["Pre-seed", "Seed"],
        checkSize: "$250k - $1M",
        portfolio: ["CodeGuard", "NetSecure", "CloudMatrix"]
    },
    {
        id: 3,
        name: "Spencer Hastings",
        title: "General Partner",
        fund: "Frontier Growth",
        matchScore: 81,
        thesis: "Our focus is on Climate Tech and HealthTech startups with the potential for massive global impact. We prioritize companies with strong IP and a clear regulatory pathway.",
        sectors: ["Climate Tech", "HealthTech", "Biotech"],
        stage: ["Seed", "Series A"],
        checkSize: "$1M - $5M",
        portfolio: ["CarbonCapture Inc.", "HealthJoy", "BioSynth"]
    }
];

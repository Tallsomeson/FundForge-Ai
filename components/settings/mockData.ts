
import { MarketTrend, FundingRound } from "../../types";

export const mockMarketTrends: MarketTrend[] = [
    { metric: "Total Funding (Last 30 Days)", value: "$1.2B", change: 15 },
    { metric: "Number of Deals", value: "245", change: -5 },
    { metric: "Trending Sector", value: "AI Infrastructure", change: 28 },
    { metric: "Median Seed Valuation", value: "$12M", change: 2 },
];

export const mockFundingRounds: FundingRound[] = [
    { id: '1', companyName: "QuantumLeap AI", sector: "AI/ML", stage: "Series A", amount: "$25M", leadInvestor: "Velocity Ventures" },
    { id: '2', companyName: "CarbonCapture Inc.", sector: "Climate Tech", stage: "Seed", amount: "$8M", leadInvestor: "Frontier Growth" },
    { id: '3', companyName: "Connectly", sector: "B2B SaaS", stage: "Series B", amount: "$50M", leadInvestor: "Nexus Capital" },
    { id: '4', companyName: "BioSynth", sector: "Biotech", stage: "Seed", amount: "$12M", leadInvestor: "Andreessen Horowitz" },
];
export interface SlideAnalysis {
  slideNumber: number;
  title: string;
  score: number;
  positivePoints: string[];
  improvementAreas: string[];
}

export interface DeckAnalysisResult {
  overallScore: number;
  overallSummary: string;
  slideBySlideAnalysis: SlideAnalysis[];
}

export interface MarketTrend {
    metric: string;
    value: string;
    change: number;
}

export interface FundingRound {
    id: string;
    companyName: string;
    sector: string;
    stage: string;
    amount: string;
    leadInvestor: string;
}

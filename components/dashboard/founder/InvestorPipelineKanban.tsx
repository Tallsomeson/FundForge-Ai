
import React from 'react';
import { mockInvestorPipeline, InvestorCardData, InvestorStage } from './mockData';

const InvestorCard: React.FC<{ investor: InvestorCardData }> = ({ investor }) => (
    <div className="p-3 bg-navy rounded-lg border border-gray-700 shadow-sm mb-3">
        <p className="font-semibold text-sm text-light-gray">{investor.name}</p>
        <p className="text-xs text-medium-gray">{investor.fund}</p>
    </div>
);

const KanbanColumn: React.FC<{ title: InvestorStage, investors: InvestorCardData[] }> = ({ title, investors }) => (
    <div className="w-64 bg-dark-gray rounded-lg p-3 flex-shrink-0">
        <h3 className="font-bold text-light-gray text-sm mb-3 px-1">{title} ({investors.length})</h3>
        <div>
            {investors.map(investor => <InvestorCard key={investor.id} investor={investor} />)}
        </div>
    </div>
);


export const InvestorPipelineKanban: React.FC = () => {
    return (
        <div className="bg-dark-gray/50 p-6 rounded-lg border border-gray-700/50">
            <h3 className="text-xl font-bold text-white mb-4">Investor Pipeline</h3>
            <div className="flex space-x-4 overflow-x-auto pb-4">
                {Object.entries(mockInvestorPipeline).map(([stage, investors]) => (
                    <KanbanColumn key={stage} title={stage as InvestorStage} investors={investors} />
                ))}
            </div>
        </div>
    );
};

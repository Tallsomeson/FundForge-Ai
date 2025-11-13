import React from 'react';
import { mockDealPipeline, DealCardData, DealStage } from './mockData';

const DealCard: React.FC<{ deal: DealCardData }> = ({ deal }) => (
    <div className="p-3 bg-navy rounded-lg border border-gray-700 shadow-sm mb-3">
        <p className="font-semibold text-sm text-light-gray">{deal.companyName}</p>
        <p className="text-xs text-medium-gray">{deal.sector}</p>
    </div>
);

const KanbanColumn: React.FC<{ title: DealStage, deals: DealCardData[] }> = ({ title, deals }) => (
    <div className="w-64 bg-dark-gray rounded-lg p-3 flex-shrink-0">
        <h3 className="font-bold text-light-gray text-sm mb-3 px-1">{title} ({deals.length})</h3>
        <div>
            {deals.map(deal => <DealCard key={deal.id} deal={deal} />)}
        </div>
    </div>
);


export const DealFlowKanban: React.FC = () => {
    return (
        <div className="bg-dark-gray/50 p-6 rounded-lg border border-gray-700/50">
            <h3 className="text-xl font-bold text-white mb-4">Deal Pipeline</h3>
            <div className="flex space-x-4 overflow-x-auto pb-4">
                {Object.entries(mockDealPipeline).map(([stage, deals]) => (
                    <KanbanColumn key={stage} title={stage as DealStage} deals={deals} />
                ))}
            </div>
        </div>
    );
};

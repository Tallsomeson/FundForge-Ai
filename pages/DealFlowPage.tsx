import React from 'react';
import { DealFlowKanban } from '../components/dealflow/DealFlowKanban';

export const DealFlowPage: React.FC = () => {
    return (
        <div className="p-4 sm:p-8 space-y-8 animate-fade-in">
            <div>
                <h1 className="text-3xl font-bold text-white">Deal Flow</h1>
                <p className="mt-2 text-medium-gray">Manage your investment pipeline from screening to close.</p>
            </div>
            
            <DealFlowKanban />
        </div>
    );
};

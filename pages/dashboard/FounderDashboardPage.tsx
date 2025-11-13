
import React from 'react';
import { FundraisingProgressWidget } from '../../components/dashboard/founder/FundraisingProgressWidget';
import { QuickActionsWidget } from '../../components/dashboard/founder/QuickActionsWidget';
import { DeckPerformanceWidget } from '../../components/dashboard/founder/DeckPerformanceWidget';
import { InvestorPipelineKanban } from '../../components/dashboard/founder/InvestorPipelineKanban';
import { ActivityFeedWidget } from '../../components/dashboard/founder/ActivityFeedWidget';

export const FounderDashboardPage: React.FC = () => {
    return (
        <div className="p-4 sm:p-8 space-y-8 animate-fade-in">
            <div>
                <h1 className="text-3xl font-bold text-white">Founder Dashboard</h1>
                <p className="mt-2 text-medium-gray">Welcome back! Here's what's happening with your fundraise.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <FundraisingProgressWidget />
                </div>
                <div>
                    <QuickActionsWidget />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                 <div className="lg:col-span-2">
                    <DeckPerformanceWidget />
                 </div>
                 <div>
                    <ActivityFeedWidget />
                 </div>
            </div>

            <div>
                <InvestorPipelineKanban />
            </div>
        </div>
    );
};

import React from 'react';
import { DashboardCard } from '../../components/dashboard/DashboardCard';
import { ChartPlaceholder } from '../../components/dashboard/ChartPlaceholder';

export const InvestorDashboardPage: React.FC = () => {
    return (
        <div className="p-4 sm:p-8 space-y-8 animate-fade-in">
            <div>
                <h1 className="text-3xl font-bold text-white">Investor Dashboard</h1>
                <p className="mt-2 text-medium-gray">Here's your deal flow and portfolio at a glance.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <DashboardCard title="New Deals This Week" value="14" change="+3 from last week" />
                <DashboardCard title="Deals Under Review" value="8" />
                <DashboardCard title="Portfolio Companies" value="22" />
                <DashboardCard title="Total Capital Deployed" value="$12.5M" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                 <ChartPlaceholder title="Deal Flow by Sector" />
                 <ChartPlaceholder title="Portfolio Performance" />
            </div>
        </div>
    );
};


import React from 'react';
import { DashboardCard } from '../DashboardCard';

export const FundraisingProgressWidget: React.FC = () => {
    const target = 1500000;
    const committed = 350000;
    const progress = (committed / target) * 100;

    return (
        <DashboardCard title="Fundraising Progress">
            <div className="mt-4">
                <div className="flex justify-between text-sm font-medium text-medium-gray">
                    <span>Committed</span>
                    <span>Target</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-light-gray font-mono">
                    <span>${committed.toLocaleString()}</span>
                    <span>${target.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5 mt-2">
                    <div className="bg-green-accent h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        </DashboardCard>
    );
};


import React from 'react';
import { DashboardCard } from '../DashboardCard';
import { mockDeckPerformance } from './mockData';

export const DeckPerformanceWidget: React.FC = () => {
    const { views, viewRate, avgTime } = mockDeckPerformance;

    return (
         <DashboardCard title="Deck Performance (Last 30 Days)">
            <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                    <p className="text-2xl font-bold text-light-gray font-mono">{views}</p>
                    <p className="text-xs text-medium-gray uppercase">Views</p>
                </div>
                 <div>
                    <p className="text-2xl font-bold text-light-gray font-mono">{viewRate}%</p>
                    <p className="text-xs text-medium-gray uppercase">View Rate</p>
                </div>
                 <div>
                    <p className="text-2xl font-bold text-light-gray font-mono">{avgTime}</p>
                    <p className="text-xs text-medium-gray uppercase">Avg. Time</p>
                </div>
            </div>
        </DashboardCard>
    );
};

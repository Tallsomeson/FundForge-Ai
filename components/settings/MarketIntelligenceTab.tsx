import React from 'react';
import { DashboardCard } from '../dashboard/DashboardCard';
import { mockMarketTrends, mockFundingRounds } from './mockData';

export const MarketIntelligenceTab: React.FC = () => {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-light-gray">Market Snapshot</h2>
                <p className="mt-2 text-medium-gray">High-level trends in the current venture landscape.</p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {mockMarketTrends.map(trend => (
                        <DashboardCard 
                            key={trend.metric}
                            title={trend.metric} 
                            value={trend.value} 
                            change={`${trend.change > 0 ? '+' : ''}${trend.change}%`} 
                        />
                    ))}
                </div>
            </div>
            <div>
                 <h2 className="text-2xl font-bold text-light-gray">Recent Noteworthy Rounds</h2>
                 <p className="mt-2 text-medium-gray">Keep an eye on significant movements in the market.</p>
                 <div className="mt-6 bg-dark-gray/50 rounded-lg border border-gray-700/50 overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-700">
                        <thead className="bg-dark-gray">
                            <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-light-gray sm:pl-6">Company</th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-light-gray">Stage</th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-light-gray">Amount</th>
                                <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-light-gray sm:table-cell">Lead Investor</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800 bg-navy">
                            {mockFundingRounds.map((round) => (
                                <tr key={round.id} className="hover:bg-dark-gray/40">
                                    <td className="py-4 pl-4 pr-3 text-sm sm:pl-6">
                                        <div className="font-medium text-white">{round.companyName}</div>
                                        <div className="text-medium-gray">{round.sector}</div>
                                    </td>
                                    <td className="px-3 py-4 text-sm text-medium-gray">{round.stage}</td>
                                    <td className="px-3 py-4 text-sm font-semibold text-light-gray font-mono">{round.amount}</td>
                                    <td className="hidden px-3 py-4 text-sm text-medium-gray sm:table-cell">{round.leadInvestor}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                 </div>
            </div>
        </div>
    );
};
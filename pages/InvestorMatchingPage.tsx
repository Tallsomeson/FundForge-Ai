
import React, { useState } from 'react';
import { mockInvestors, Investor } from '../components/investormatching/mockData';
import { InvestorCard } from '../components/investormatching/InvestorCard';
import { InvestorProfilePanel } from '../components/investormatching/InvestorProfilePanel';

export const InvestorMatchingPage: React.FC = () => {
    const [selectedInvestor, setSelectedInvestor] = useState<Investor | null>(mockInvestors[0]);

    return (
        <div className="h-full flex flex-col animate-fade-in">
            <header className="p-4 sm:p-6 border-b border-gray-700 flex-shrink-0">
                 <div>
                    <h1 className="text-3xl font-bold text-white">Investor Discovery</h1>
                    <p className="mt-2 text-medium-gray">Find and connect with investors that match your startup's profile.</p>
                </div>
            </header>
             <div className="flex-1 flex overflow-hidden">
                <div className="w-1/3 border-r border-gray-700 flex flex-col">
                    <div className="p-4 border-b border-gray-700">
                         <input
                            type="text"
                            placeholder="Search investors..."
                            className="w-full rounded-md border-0 bg-dark-gray py-1.5 px-3 text-white shadow-sm ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-green-accent"
                        />
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {mockInvestors.map(investor => (
                            <InvestorCard
                                key={investor.id}
                                investor={investor}
                                isSelected={selectedInvestor?.id === investor.id}
                                onSelect={() => setSelectedInvestor(investor)}
                            />
                        ))}
                    </div>
                </div>

                <div className="w-2/3 overflow-y-auto">
                    {selectedInvestor && <InvestorProfilePanel investor={selectedInvestor} />}
                </div>
            </div>
        </div>
    );
};

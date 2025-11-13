import React, { useState } from 'react';
import { mockPortfolio, Company } from '../components/portfolio/mockData';
import { CompanyDetailPanel } from '../components/portfolio/CompanyDetailPanel';
import { LPReportModal } from '../components/portfolio/LPReportModal';

const CompanyListItem: React.FC<{ company: Company; isSelected: boolean; onSelect: () => void }> = ({ company, isSelected, onSelect }) => (
    <button
        onClick={onSelect}
        className={`w-full text-left p-4 border-b border-gray-700 flex items-center gap-4 transition-colors ${isSelected ? 'bg-navy' : 'hover:bg-dark-gray/60'}`}
    >
        {/* Placeholder for logo */}
        <div className="w-10 h-10 rounded-full bg-dark-gray flex-shrink-0 flex items-center justify-center text-sm font-bold text-light-gray">
            {company.name.charAt(0)}
        </div>
        <div className="flex-1">
            <p className="font-bold text-light-gray">{company.name}</p>
            <p className="text-sm text-medium-gray">{company.sector}</p>
        </div>
    </button>
);

export const PortfolioPage: React.FC = () => {
    const [selectedCompany, setSelectedCompany] = useState<Company | null>(mockPortfolio[0]);
    const [isReportModalOpen, setIsReportModalOpen] = useState(false);

    return (
        <>
        <div className="h-full flex flex-col animate-fade-in">
            <header className="p-4 sm:p-6 border-b border-gray-700 flex-shrink-0 flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-white">Portfolio Management</h1>
                    <p className="mt-2 text-medium-gray">Monitor the health and performance of your investments.</p>
                </div>
                <button 
                    onClick={() => setIsReportModalOpen(true)}
                    className="rounded-md bg-gold-accent px-4 py-2 text-sm font-semibold text-darker-gray shadow-sm hover:bg-gold-accent/80"
                >
                    Generate LP Report
                </button>
            </header>
            <div className="flex-1 flex overflow-hidden">
                <div className="w-1/3 border-r border-gray-700 flex flex-col">
                    <div className="p-4 border-b border-gray-700">
                         <input
                            type="text"
                            placeholder="Search company..."
                            className="w-full rounded-md border-0 bg-dark-gray py-1.5 px-3 text-white shadow-sm ring-1 ring-inset ring-gray-600 focus:ring-2 focus:ring-inset focus:ring-green-accent"
                        />
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        {mockPortfolio.map(company => (
                            <CompanyListItem
                                key={company.id}
                                company={company}
                                isSelected={selectedCompany?.id === company.id}
                                onSelect={() => setSelectedCompany(company)}
                            />
                        ))}
                    </div>
                </div>

                <div className="w-2/3 overflow-y-auto">
                    {selectedCompany && <CompanyDetailPanel company={selectedCompany} />}
                </div>
            </div>
        </div>
        {isReportModalOpen && <LPReportModal companies={mockPortfolio} onClose={() => setIsReportModalOpen(false)} />}
        </>
    );
};

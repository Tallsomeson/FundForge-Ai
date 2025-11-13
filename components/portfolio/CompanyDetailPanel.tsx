import React from 'react';
import { Company, Kpi } from './mockData';
import { ChartPlaceholder } from '../dashboard/ChartPlaceholder';

const KpiCard: React.FC<{ kpi: Kpi }> = ({ kpi }) => {
    const isPositive = kpi.change >= 0;
    return (
        <div className="bg-navy p-4 rounded-lg">
            <p className="text-sm text-medium-gray">{kpi.name}</p>
            <p className="text-2xl font-bold text-light-gray mt-1 font-mono">{kpi.value}</p>
            {/* FIX: Changed text-red to text-red-400 for consistency */}
            <p className={`text-sm font-semibold font-mono ${isPositive ? 'text-green-accent' : 'text-red-400'}`}>
                {isPositive ? '↑' : '↓'} {Math.abs(kpi.change)}%
            </p>
        </div>
    );
};

export const CompanyDetailPanel: React.FC<{ company: Company }> = ({ company }) => {
    return (
        <div className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg bg-dark-gray flex-shrink-0 flex items-center justify-center text-2xl font-bold text-light-gray">
                    {company.name.charAt(0)}
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">{company.name}</h2>
                    <p className="text-lg text-medium-gray">{company.sector}</p>
                </div>
            </div>

            <div>
                <p className="text-light-gray">{company.description}</p>
            </div>

            <div className="bg-dark-gray/50 p-6 rounded-lg border border-gray-700/50">
                <h4 className="font-semibold text-light-gray mb-4">Key Performance Indicators (KPIs)</h4>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {company.kpis.map(kpi => <KpiCard key={kpi.name} kpi={kpi} />)}
                </div>
            </div>
            
             <div className="bg-dark-gray/50 p-6 rounded-lg border border-gray-700/50">
                <h4 className="font-semibold text-light-gray">Investment Details</h4>
                <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <dt className="text-medium-gray">Stage</dt>
                    <dd className="text-light-gray font-medium">{company.stage}</dd>
                    <dt className="text-medium-gray">Amount Invested</dt>
                    <dd className="text-light-gray font-medium font-mono">{company.invested}</dd>
                    <dt className="text-medium-gray">Ownership</dt>
                    <dd className="text-light-gray font-medium font-mono">{company.ownership}%</dd>
                    <dt className="text-medium-gray">Last Update</dt>
                    <dd className="text-light-gray font-medium font-mono">{company.lastUpdate}</dd>
                </dl>
            </div>
            
            <ChartPlaceholder title="MRR Growth Over Time" />

        </div>
    );
};

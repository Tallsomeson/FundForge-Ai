import React from 'react';

interface DashboardCardProps {
    title: string;
    value?: string | number;
    change?: string;
    children?: React.ReactNode;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, change, children }) => {
    const isPositiveChange = change && change.startsWith('+');
    const isNegativeChange = change && change.startsWith('-');
    
    return (
        <div className="bg-dark-gray/50 p-6 rounded-lg border border-gray-700/50">
            <h4 className="text-sm font-semibold text-medium-gray uppercase tracking-wider">{title}</h4>
            {/* FIX: Conditionally render value and change only if value is provided */}
            {value !== undefined && (
                 <>
                    <p className="mt-2 text-3xl font-bold text-light-gray font-mono">{value}</p>
                    {change && (
                        // FIX: Changed text-red to text-red-400 for consistency
                        <p className={`mt-1 text-sm font-mono ${isPositiveChange ? 'text-green-accent' : isNegativeChange ? 'text-red-400' : 'text-medium-gray'}`}>
                            {change}
                        </p>
                    )}
                </>
            )}
            {children}
        </div>
    );
};

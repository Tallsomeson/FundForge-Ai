import React from 'react';

interface ChartPlaceholderProps {
    title: string;
}

export const ChartPlaceholder: React.FC<ChartPlaceholderProps> = ({ title }) => {
    return (
        <div className="bg-dark-gray/50 rounded-lg p-6 border border-gray-700/50">
            <h4 className="text-lg font-semibold text-light-gray">{title}</h4>
            <div className="mt-4 flex items-center justify-center h-64 bg-navy/30 rounded-md border border-dashed border-gray-600">
                <p className="text-medium-gray text-sm">[ Chart Data Coming Soon ]</p>
            </div>
        </div>
    );
};

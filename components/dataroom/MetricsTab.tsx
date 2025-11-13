
import React from 'react';
import { ChartPlaceholder } from '../dashboard/ChartPlaceholder';

export const MetricsTab: React.FC = () => {
    return (
        <div>
             <p className="mb-6 text-medium-gray">Connect your business tools to display real-time metrics for investors. This section is currently showing placeholder data.</p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ChartPlaceholder title="Monthly Recurring Revenue (MRR)" />
                <ChartPlaceholder title="Customer Acquisition Cost (CAC)" />
                <ChartPlaceholder title="Lifetime Value (LTV)" />
                <ChartPlaceholder title="User Growth (MoM)" />
             </div>
        </div>
    );
};
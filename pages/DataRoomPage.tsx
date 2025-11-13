
import React, { useState } from 'react';
import { DocumentTab } from '../components/dataroom/DocumentTab';
import { MetricsTab } from '../components/dataroom/MetricsTab';
import { AccessManagementTab } from '../components/dataroom/AccessManagementTab';

type Tab = 'Documents' | 'Metrics' | 'Access Management';

export const DataRoomPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('Documents');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Documents':
                return <DocumentTab />;
            case 'Metrics':
                return <MetricsTab />;
            case 'Access Management':
                return <AccessManagementTab />;
            default:
                return <DocumentTab />;
        }
    };

    return (
        <div className="p-4 sm:p-8 space-y-8 animate-fade-in h-full flex flex-col">
            <div>
                <h1 className="text-3xl font-bold text-white">Secure Data Room</h1>
                <p className="mt-2 text-medium-gray">Manage and share your company's due diligence materials with investors.</p>
            </div>
            
            <div className="border-b border-gray-700">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {(['Documents', 'Metrics', 'Access Management'] as Tab[]).map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`${
                                activeTab === tab
                                    ? 'border-green-accent text-green-accent'
                                    : 'border-transparent text-medium-gray hover:text-gray-300 hover:border-gray-500'
                            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                        >
                            {tab}
                        </button>
                    ))}
                </nav>
            </div>

            <div className="flex-1 mt-6">
                {renderTabContent()}
            </div>
        </div>
    );
};
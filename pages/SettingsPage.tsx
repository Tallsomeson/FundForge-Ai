import React, { useState } from 'react';
import { UserType } from '../App';
import { AICoachTab } from '../components/settings/AICoachTab';
import { MarketIntelligenceTab } from '../components/settings/MarketIntelligenceTab';
import { IntegrationsTab } from '../components/settings/IntegrationsTab';
import { ApiAndBillingTab } from '../components/settings/ApiAndBillingTab';

interface SettingsPageProps {
    userType: UserType;
}

type SettingsTab = 'AI Coach' | 'Market Intelligence' | 'Integrations' | 'API & Billing';

export const SettingsPage: React.FC<SettingsPageProps> = ({ userType }) => {
    
    const availableTabs: SettingsTab[] = userType === 'founder'
        ? ['AI Coach', 'Market Intelligence', 'Integrations', 'API & Billing']
        : ['Market Intelligence', 'Integrations', 'API & Billing'];

    const [activeTab, setActiveTab] = useState<SettingsTab>(availableTabs[0]);

    const renderTabContent = () => {
        switch (activeTab) {
            case 'AI Coach':
                return <AICoachTab />;
            case 'Market Intelligence':
                return <MarketIntelligenceTab />;
            case 'Integrations':
                return <IntegrationsTab />;
            case 'API & Billing':
                return <ApiAndBillingTab />;
            default:
                return null;
        }
    };

    return (
        <div className="p-4 sm:p-8 space-y-8 h-full flex flex-col">
            <div>
                <h1 className="text-3xl font-bold text-white">Settings & Advanced Features</h1>
                <p className="mt-2 text-medium-gray">Manage your account, integrations, and access powerful tools.</p>
            </div>
            
            <div className="border-b border-gray-700">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {availableTabs.map(tab => (
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
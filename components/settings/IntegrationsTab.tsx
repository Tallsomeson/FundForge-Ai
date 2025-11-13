import React from 'react';

const integrations = [
    { name: 'Stripe', category: 'Financial', connected: true },
    { name: 'Google Analytics', category: 'Analytics', connected: true },
    { name: 'Salesforce', category: 'CRM', connected: false },
    { name: 'HubSpot', category: 'CRM', connected: false },
    { name: 'QuickBooks', category: 'Financial', connected: true },
    { name: 'Slack', category: 'Communication', connected: false },
];

export const IntegrationsTab: React.FC = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-light-gray">App Integrations</h2>
            <p className="mt-2 text-medium-gray">Connect your favorite tools to streamline your workflow and automate data sync.</p>
            <ul role="list" className="mt-6 divide-y divide-gray-700 border-t border-b border-gray-700">
                {integrations.map((integration, idx) => (
                    <li key={idx} className="flex items-center justify-between gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            {/* Icon placeholder */}
                            <div className="h-12 w-12 flex-none rounded-lg bg-dark-gray flex items-center justify-center text-medium-gray">
                                {integration.name.charAt(0)}
                            </div>
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-white">{integration.name}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-400">{integration.category}</p>
                            </div>
                        </div>
                        <div className="flex flex-none items-center gap-x-4">
                             <button
                                type="button"
                                className={`rounded-md px-3 py-1.5 text-sm font-semibold shadow-sm ${
                                    integration.connected 
                                    ? 'bg-white/10 text-white hover:bg-white/20' 
                                    : 'bg-green-accent text-dark-gray hover:bg-green-accent/80'
                                }`}
                            >
                                {integration.connected ? 'Manage' : 'Connect'}
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
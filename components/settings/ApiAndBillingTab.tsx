import React from 'react';

export const ApiAndBillingTab: React.FC = () => {
    return (
        <div className="space-y-8 max-w-3xl">
            <div>
                <h2 className="text-2xl font-bold text-light-gray">Subscription & Billing</h2>
                <p className="mt-2 text-medium-gray">Manage your subscription plan and view your billing history.</p>
                <div className="mt-6 bg-dark-gray/50 p-6 rounded-lg border border-gray-700/50">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-semibold text-light-gray">Current Plan: <span className="text-green-accent">Startup</span></p>
                            <p className="text-sm text-medium-gray">$99/month, renews on August 21, 2024</p>
                        </div>
                        <button className="rounded-md bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20">
                            Manage Subscription
                        </button>
                    </div>
                </div>
            </div>

             <div>
                <h2 className="text-2xl font-bold text-light-gray">API Access</h2>
                <p className="mt-2 text-medium-gray">Integrate FundForge data with your own tools using our API (coming soon).</p>
                 <div className="mt-6 bg-dark-gray/50 p-6 rounded-lg border border-gray-700/50">
                    <p className="text-sm text-medium-gray">API access is not yet available. Check back for updates.</p>
                </div>
            </div>
        </div>
    );
};

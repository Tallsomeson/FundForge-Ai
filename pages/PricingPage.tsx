import React from 'react';

const CheckIcon = () => (
    <svg className="h-6 w-5 flex-none text-green-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.75 12.8665L8.33995 16.4138C8.75253 16.9639 9.58189 16.8833 9.87974 16.258L18.25 4.75" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Plan: React.FC<{ name: string, price: string, description: string, features: string[], isFeatured: boolean }> = ({ name, price, description, features, isFeatured }) => (
    <div className={`rounded-3xl p-8 ring-1 ${isFeatured ? 'ring-green-accent bg-dark-gray' : 'ring-gray-700'}`}>
        <h3 className={`text-lg font-semibold leading-8 ${isFeatured ? 'text-green-accent' : 'text-white'}`}>{name}</h3>
        <p className="mt-4 text-sm leading-6 text-medium-gray">{description}</p>
        <p className="mt-6 flex items-baseline gap-x-1">
            <span className="text-4xl font-bold tracking-tight text-white">{price}</span>
            {price !== 'Contact Us' && <span className="text-sm font-semibold leading-6 text-gray-400">/month</span>}
        </p>
        <a href="#" className={`mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${isFeatured ? 'bg-green-accent text-darker-gray hover:bg-green-accent/80 focus-visible:outline-green-accent' : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white'}`}>
            Get started
        </a>
        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
            {features.map(feature => (
                <li key={feature} className="flex gap-x-3">
                    <CheckIcon />
                    {feature}
                </li>
            ))}
        </ul>
    </div>
);

export const PricingPage: React.FC = () => {
    const plans = [
        { name: 'Founder', price: '$49', description: 'Essential tools to get your fundraising off the ground.', features: ['AI Deck Doctor (5 credits/mo)', 'Investor Matching (Basic)', 'Secure Data Room (1)', 'Standard Support'], isFeatured: false },
        { name: 'Startup', price: '$99', description: 'The complete workbench for a successful fundraise.', features: ['AI Deck Doctor (Unlimited)', 'AI Fundraising Coach', 'Investor Matching (Advanced)', 'Secure Data Room (Unlimited)', 'Portfolio Tracking', 'Priority Support'], isFeatured: true },
        { name: 'Investor', price: 'Contact Us', description: 'For VCs and Angels to manage deal flow and portfolio.', features: ['AI Deal Screening', 'Collaborative Due Diligence', 'Portfolio KPI Monitoring', 'LP Reporting Tools', 'Dedicated Account Manager'], isFeatured: false },
    ];

    return (
        <div className="container mx-auto px-6 py-16 sm:py-24">
            <div className="max-w-4xl text-center mx-auto">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Pricing Plans</h2>
                <p className="mt-6 text-lg leading-8 text-medium-gray">
                    Choose the right plan for your needs. Simple, transparent pricing to help you succeed.
                </p>
            </div>
            <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {plans.map(plan => <Plan key={plan.name} {...plan} />)}
            </div>
        </div>
    );
};

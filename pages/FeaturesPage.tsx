import React from 'react';

const FeatureCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-dark-gray/50 p-8 rounded-lg border border-gray-700/50 transform hover:-translate-y-1 transition-transform duration-300">
        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-accent text-darker-gray">
            {icon}
        </div>
        <h3 className="mt-6 text-xl font-bold text-light-gray">{title}</h3>
        <p className="mt-4 text-medium-gray">{description}</p>
    </div>
);

export const FeaturesPage: React.FC = () => {
    const features = [
        {
            title: "AI Deck Doctor",
            description: "Receive an instant, slide-by-slide critique of your pitch deck. Our AI, trained on thousands of successful decks, provides actionable feedback on narrative, design, and data presentation to help you make the perfect impression.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-1.5c1.455-1.455 1.5-3.83 0-5.25A4.5 4.5 0 0 0 9 3.75c-1.455 1.455-1.5 3.83 0 5.25a6.01 6.01 0 0 0 1.5 1.5m0 0v5.25m0 0A2.25 2.25 0 0 0 9.75 21a2.25 2.25 0 0 0 4.5 0A2.25 2.25 0 0 0 12 18Z" /></svg>
        },
        {
            title: "Intelligent Investor Matching",
            description: "Stop wasting time on cold outreach. Our algorithm matches you with a curated list of over 24,000+ global investors whose investment thesis, stage, and sector focus align perfectly with your startup.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.5-2.952a4.5 4.5 0 0 1-9 0 4.5 4.5 0 0 1 9 0Zm-9-2.952a4.5 4.5 0 0 0 9 0m-9 0a4.5 4.5 0 0 1 9 0" /></svg>
        },
        {
            title: "Secure Data Room & Due Diligence",
            description: "Manage your entire due diligence process in one place. Create a secure data room, share sensitive documents with granular controls, and track investor engagement to know who's truly interested.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
        },
        {
            title: "Portfolio Management for Investors",
            description: "For VCs and Angels. Streamline your deal flow with AI-powered screening, collaborate with your team on due diligence, and monitor the performance of your portfolio companies with real-time KPI dashboards.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" /></svg>
        }
    ];

    return (
        <div className="container mx-auto px-6 py-16 sm:py-24">
            <div className="max-w-4xl text-center mx-auto">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">The Ultimate Fundraising Workbench</h2>
                <p className="mt-6 text-lg leading-8 text-medium-gray">
                    FundForge is more than just a tool; it's an end-to-end platform designed to make fundraising faster, smarter, and more efficient for founders and investors alike.
                </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                {features.map(feature => <FeatureCard key={feature.title} {...feature} />)}
            </div>
        </div>
    );
};

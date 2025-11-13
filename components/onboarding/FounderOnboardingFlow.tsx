import React, { useState } from 'react';
import { OnboardingContainer } from './OnboardingContainer';
import { DeckDoctor } from '../DeckDoctor';

interface FounderOnboardingFlowProps {
    onComplete: () => void;
}

const stepNames = [
    "Profile Creation",
    "Business Integrations",
    "Deck Analysis",
    "Investor Preferences",
    "Goal Setting"
];

export const FounderOnboardingFlow: React.FC<FounderOnboardingFlowProps> = ({ onComplete }) => {
    const [currentStep, setCurrentStep] = useState(1);
    
    const nextStep = () => setCurrentStep(prev => prev + 1);
    const prevStep = () => setCurrentStep(prev => prev - 1);

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <OnboardingContainer currentStep={1} totalSteps={5} stepNames={stepNames} title="Create Your Profile" description="Tell us about you and your company.">
                        <form onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
                            <div className="space-y-6">
                                {/* Form fields */}
                                <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-300">Full Name</label>
                                        <input type="text" id="full-name" required className="mt-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-accent"/>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="company-name" className="block text-sm font-medium leading-6 text-gray-300">Company Name</label>
                                        <input type="text" id="company-name" required className="mt-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-accent"/>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="stage" className="block text-sm font-medium leading-6 text-gray-300">Fundraising Stage</label>
                                        <select id="stage" required className="mt-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-accent">
                                            <option>Pre-seed</option>
                                            <option>Seed</option>
                                            <option>Series A</option>
                                        </select>
                                    </div>
                                     <div className="sm:col-span-3">
                                        <label htmlFor="raise-amount" className="block text-sm font-medium leading-6 text-gray-300">Target Raise Amount ($)</label>
                                        <input type="number" id="raise-amount" required placeholder="e.g., 1,500,000" className="mt-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-accent"/>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <button type="submit" className="rounded-md bg-green-accent px-4 py-2 text-sm font-semibold text-darker-gray shadow-sm hover:bg-green-accent/80">Next</button>
                                </div>
                            </div>
                        </form>
                    </OnboardingContainer>
                );
             case 2:
                return (
                    <OnboardingContainer currentStep={2} totalSteps={5} stepNames={stepNames} title="Connect Your Business Tools" description="Automatically populate your data room with real-time metrics (optional).">
                        <div className="space-y-4">
                            {['Stripe', 'Google Analytics', 'QuickBooks', 'Plaid'].map(tool => (
                                <button key={tool} className="w-full flex justify-between items-center p-4 rounded-lg bg-dark-gray hover:bg-dark-gray/60 border border-gray-700">
                                    <span className="font-semibold">{tool}</span>
                                    <span className="text-sm text-green-accent">Connect</span>
                                </button>
                            ))}
                        </div>
                        <div className="mt-8 flex justify-between">
                            <button onClick={prevStep} className="text-sm font-semibold text-gray-300 hover:text-white">Back</button>
                            <button onClick={nextStep} className="rounded-md bg-green-accent px-4 py-2 text-sm font-semibold text-darker-gray shadow-sm hover:bg-green-accent/80">Next</button>
                        </div>
                    </OnboardingContainer>
                );
            case 3:
                return (
                     <OnboardingContainer currentStep={3} totalSteps={5} stepNames={stepNames} title="Upload Your Pitch Deck" description="Let's get your first AI analysis done. This is the core of FundForge!">
                        <DeckDoctor />
                        <div className="mt-8 flex justify-between">
                            <button onClick={prevStep} className="text-sm font-semibold text-gray-300 hover:text-white">Back</button>
                            <button onClick={nextStep} className="rounded-md bg-green-accent px-4 py-2 text-sm font-semibold text-darker-gray shadow-sm hover:bg-green-accent/80">Next</button>
                        </div>
                    </OnboardingContainer>
                );
             case 4:
                return (
                    <OnboardingContainer currentStep={4} totalSteps={5} stepNames={stepNames} title="Investor Preferences" description="Help us find the perfect investors for you.">
                        <form onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
                           <div className="space-y-6">
                                {/* Form fields */}
                                <div>
                                    <label className="block text-sm font-medium leading-6 text-gray-300">Geographic Preferences</label>
                                    <input type="text" placeholder="e.g., North America, Europe" className="mt-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10"/>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium leading-6 text-gray-300">Sector Focus</label>
                                    <input type="text" placeholder="e.g., Fintech, SaaS, HealthTech" className="mt-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10"/>
                                </div>
                                 <div className="mt-8 flex justify-between">
                                    <button onClick={prevStep} type="button" className="text-sm font-semibold text-gray-300 hover:text-white">Back</button>
                                    <button type="submit" className="rounded-md bg-green-accent px-4 py-2 text-sm font-semibold text-darker-gray shadow-sm hover:bg-green-accent/80">Next</button>
                                </div>
                            </div>
                        </form>
                    </OnboardingContainer>
                );
            case 5:
                return (
                     <OnboardingContainer currentStep={5} totalSteps={5} stepNames={stepNames} title="You're All Set!" description="Your fundraising workbench is ready. Let's find your next investor.">
                        <div className="text-center">
                            <p className="text-medium-gray">You've successfully set up your FundForge profile. You can now access your dashboard to manage your deck, discover investors, and track your progress.</p>
                            <div className="mt-8 flex justify-between">
                                <button onClick={prevStep} className="text-sm font-semibold text-gray-300 hover:text-white">Back</button>
                                <button onClick={onComplete} className="rounded-md bg-green-accent px-6 py-3 text-base font-semibold text-darker-gray shadow-sm hover:bg-green-accent/80">Go to Dashboard</button>
                            </div>
                        </div>
                    </OnboardingContainer>
                );
            default:
                return null;
        }
    };
    
    return <div>{renderStepContent()}</div>;
};

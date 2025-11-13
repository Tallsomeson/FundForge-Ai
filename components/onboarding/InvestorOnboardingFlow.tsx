import React, { useState } from 'react';
import { OnboardingContainer } from './OnboardingContainer';

interface InvestorOnboardingFlowProps {
    onComplete: () => void;
}

const stepNames = [
    "Investor Profile",
    "Investment Criteria",
    "Platform Configuration",
    "Portfolio Import"
];

export const InvestorOnboardingFlow: React.FC<InvestorOnboardingFlowProps> = ({ onComplete }) => {
    const [currentStep, setCurrentStep] = useState(1);
    
    const nextStep = () => setCurrentStep(prev => prev + 1);
    const prevStep = () => setCurrentStep(prev => prev - 1);

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <OnboardingContainer currentStep={1} totalSteps={4} stepNames={stepNames} title="Setup Your Investor Profile" description="Let us know what kind of investor you are.">
                        <form onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
                            <div className="space-y-6">
                               <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="investor-type" className="block text-sm font-medium leading-6 text-gray-300">Investor Type</label>
                                        <select id="investor-type" required className="mt-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white">
                                            <option>Angel</option>
                                            <option>Micro-VC</option>
                                            <option>Institutional VC</option>
                                            <option>Corporate VC</option>
                                            <option>Family Office</option>
                                        </select>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="fund-name" className="block text-sm font-medium leading-6 text-gray-300">Fund or Group Name</label>
                                        <input type="text" id="fund-name" required className="mt-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white"/>
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="check-size" className="block text-sm font-medium leading-6 text-gray-300">Typical Check Size ($)</label>
                                        <input type="text" id="check-size" placeholder="e.g., 50k - 250k" required className="mt-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white"/>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <button type="submit" className="rounded-md bg-gold-accent px-4 py-2 text-sm font-semibold text-darker-gray shadow-sm hover:bg-gold-accent/80">Next</button>
                                </div>
                            </div>
                        </form>
                    </OnboardingContainer>
                );
             case 2:
                return (
                    <OnboardingContainer currentStep={2} totalSteps={4} stepNames={stepNames} title="Define Your Investment Criteria" description="Specify your thesis so we can send you high-quality, relevant deal flow.">
                        <form onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
                           <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium leading-6 text-gray-300">Sector Preferences</label>
                                    <input type="text" placeholder="e.g., B2B SaaS, AI/ML, Climate Tech" className="mt-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white"/>
                                </div>
                                 <div>
                                    <label className="block text-sm font-medium leading-6 text-gray-300">Investment Thesis Summary</label>
                                    <textarea rows={4} placeholder="Describe what you look for in a company..." className="mt-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white"></textarea>
                                </div>
                                 <div className="mt-8 flex justify-between">
                                    <button onClick={prevStep} type="button" className="text-sm font-semibold text-gray-300 hover:text-white">Back</button>
                                    <button type="submit" className="rounded-md bg-gold-accent px-4 py-2 text-sm font-semibold text-darker-gray shadow-sm hover:bg-gold-accent/80">Next</button>
                                </div>
                            </div>
                        </form>
                    </OnboardingContainer>
                );
            case 3:
                return (
                     <OnboardingContainer currentStep={3} totalSteps={4} stepNames={stepNames} title="Platform Configuration" description="Invite team members and set your preferences.">
                         <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300">Invite Team Members (by email)</label>
                                <input type="email" placeholder="colleague@myfund.com" className="mt-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white"/>
                            </div>
                             <div>
                                <label className="block text-sm font-medium text-gray-300">Deal Flow Notifications</label>
                                <select className="mt-2 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white">
                                    <option>Daily Digest</option>
                                    <option>Weekly Digest</option>
                                    <option>Instantly</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-8 flex justify-between">
                            <button onClick={prevStep} className="text-sm font-semibold text-gray-300 hover:text-white">Back</button>
                            <button onClick={nextStep} className="rounded-md bg-gold-accent px-4 py-2 text-sm font-semibold text-darker-gray shadow-sm hover:bg-gold-accent/80">Next</button>
                        </div>
                    </OnboardingContainer>
                );
             case 4:
                return (
                    <OnboardingContainer currentStep={4} totalSteps={4} stepNames={stepNames} title="You're Ready to Invest" description="Your deal flow engine is configured. Let's find your next unicorn.">
                       <div className="text-center">
                            <p className="text-medium-gray">You've successfully set up your FundForge investor profile. You can now access your dashboard to discover curated deals, manage your pipeline, and monitor your portfolio.</p>
                            <div className="mt-8 flex justify-between">
                                <button onClick={prevStep} className="text-sm font-semibold text-gray-300 hover:text-white">Back</button>
                                <button onClick={onComplete} className="rounded-md bg-gold-accent px-6 py-3 text-base font-semibold text-darker-gray shadow-sm hover:bg-gold-accent/80">Go to Dashboard</button>
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

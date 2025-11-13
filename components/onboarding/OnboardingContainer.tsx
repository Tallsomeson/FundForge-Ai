import React from 'react';
import { StepIndicator } from './StepIndicator';

interface OnboardingContainerProps {
    currentStep: number;
    totalSteps: number;
    stepNames: string[];
    title: string;
    description: string;
    children: React.ReactNode;
}

export const OnboardingContainer: React.FC<OnboardingContainerProps> = ({ currentStep, totalSteps, stepNames, title, description, children }) => {
    return (
        <div className="container mx-auto px-6 py-12 animate-fade-in">
             <div className="max-w-4xl mx-auto">
                <StepIndicator currentStep={currentStep} totalSteps={totalSteps} stepNames={stepNames} />
                <div className="mt-8">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
                    <p className="mt-3 text-lg leading-8 text-medium-gray">{description}</p>
                </div>
                <div className="mt-8 bg-dark-gray/50 p-6 sm:p-8 rounded-lg border border-gray-700/50">
                    {children}
                </div>
            </div>
        </div>
    );
};

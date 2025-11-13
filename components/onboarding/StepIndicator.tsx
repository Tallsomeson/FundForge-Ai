import React from 'react';

interface StepIndicatorProps {
    currentStep: number;
    totalSteps: number;
    stepNames: string[];
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps, stepNames }) => {
    return (
        <nav aria-label="Progress">
            <ol role="list" className="space-y-4 md:flex md:space-x-8 md:space-y-0">
                {Array.from({ length: totalSteps }).map((_, index) => {
                    const step = index + 1;
                    const isCompleted = step < currentStep;
                    const isCurrent = step === currentStep;

                    return (
                        <li key={step} className="md:flex-1">
                            {isCompleted ? (
                                <div className="group flex flex-col border-l-4 border-green-accent py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                                    <span className="text-sm font-medium text-green-accent transition-colors ">{`Step ${step}`}</span>
                                    <span className="text-sm font-medium text-light-gray">{stepNames[index]}</span>
                                </div>
                            ) : isCurrent ? (
                                <div className="flex flex-col border-l-4 border-gold-accent py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4" aria-current="step">
                                    <span className="text-sm font-medium text-gold-accent">{`Step ${step}`}</span>
                                    <span className="text-sm font-medium text-light-gray">{stepNames[index]}</span>
                                </div>
                            ) : (
                                <div className="group flex flex-col border-l-4 border-gray-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                                    <span className="text-sm font-medium text-gray-400 transition-colors">{`Step ${step}`}</span>
                                    <span className="text-sm font-medium text-medium-gray">{stepNames[index]}</span>
                                </div>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

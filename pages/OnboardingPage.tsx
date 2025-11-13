// Fix: Replaced placeholder content with the onboarding page component.
// This component acts as a router to show the correct onboarding flow based on user type.
import React from 'react';
import { UserType } from '../App';
import { FounderOnboardingFlow } from '../components/onboarding/FounderOnboardingFlow';
import { InvestorOnboardingFlow } from '../components/onboarding/InvestorOnboardingFlow';

interface OnboardingPageProps {
    userType: UserType;
    onComplete: () => void;
}

export const OnboardingPage: React.FC<OnboardingPageProps> = ({ userType, onComplete }) => {
    return (
        <div>
            {userType === 'founder' ? (
                <FounderOnboardingFlow onComplete={onComplete} />
            ) : (
                <InvestorOnboardingFlow onComplete={onComplete} />
            )}
        </div>
    );
};

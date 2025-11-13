import React from 'react';

export const AboutPage: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-16 sm:py-24">
            <div className="max-w-4xl mx-auto text-center">
                 <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">About FundForge</h2>
                 <p className="mt-6 text-lg leading-8 text-medium-gray">
                    We're building the infrastructure for the future of fundraising.
                </p>
            </div>
            
            <div className="mt-16 max-w-5xl mx-auto space-y-12">
                <div className="bg-dark-gray/50 p-8 rounded-lg border border-gray-700/50">
                    <h3 className="text-2xl font-bold text-green-accent">Our Mission</h3>
                    <p className="mt-4 text-lg text-light-gray leading-relaxed">
                        To democratize access to capital for visionary founders everywhere. We believe that a great idea, backed by a solid plan, should have its chance to change the world. Fundraising is one of the greatest hurdles for any startup, and we're dedicated to making it more data-driven, efficient, and transparent for both sides of the table.
                    </p>
                </div>

                <div className="bg-dark-gray/50 p-8 rounded-lg border border-gray-700/50">
                    <h3 className="text-2xl font-bold text-gold-accent">Our Story</h3>
                    <p className="mt-4 text-light-gray leading-relaxed space-y-4">
                        <span>FundForge was born from the frustrating, time-consuming, and often demoralizing experience of fundraising. Our founders, a team of serial entrepreneurs and former venture capitalists, saw the same problems from both sides: founders "spraying and praying" with generic pitches, and investors drowning in a sea of unqualified deal flow.</span>
                        <span>We knew there had to be a better way. Instead of relying on who you know, we envisioned a platform where what you've built and the strength of your vision are what matter most. We started by building the AI Deck Doctor to solve our own pitch deck anxieties and quickly realized its potential. From there, FundForge grew into the comprehensive workbench it is today, built to give every founder the tools to succeed and every investor the signal they need in a noisy market.</span>
                    </p>
                </div>
            </div>

        </div>
    );
};

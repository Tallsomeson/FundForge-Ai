import React from 'react';
import { DeckDoctor } from '../components/DeckDoctor';
import { UserType } from '../App';

interface HomePageProps {
    onLogin: (userType: UserType) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onLogin }) => {
  return (
    <div className="container mx-auto px-6 py-16 sm:py-24">
      <div className="max-w-4xl text-center mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Your AI Co-Pilot for Fundraising
        </h1>
        <p className="mt-6 text-lg leading-8 text-medium-gray">
          Analyze your pitch deck, find the right investors, and close your round faster. FundForge is the ultimate workbench for ambitious founders.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
            <button onClick={() => onLogin('founder')} className="rounded-md bg-green-accent px-8 py-3 text-base font-semibold text-darker-gray shadow-sm hover:bg-green-accent/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-accent">
                I'm a Founder
            </button>
             <button onClick={() => onLogin('investor')} className="rounded-md bg-white/10 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-white/20">
                I'm an Investor
            </button>
        </div>
      </div>
      <div className="mt-20 max-w-4xl mx-auto">
        <DeckDoctor />
      </div>
    </div>
  );
};

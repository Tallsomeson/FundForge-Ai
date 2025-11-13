
import React, { useState } from 'react';
import { Investor } from './mockData';
import { OutreachModal } from './OutreachModal';

export const InvestorProfilePanel: React.FC<{ investor: Investor }> = ({ investor }) => {
    const [showOutreachModal, setShowOutreachModal] = useState(false);

    return (
        <>
            <div className="p-6 sm:p-8 space-y-6">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-2xl font-bold text-white">{investor.name}</h2>
                        <p className="text-lg text-medium-gray">{investor.title}, <span className="font-semibold">{investor.fund}</span></p>
                    </div>
                     <button 
                        onClick={() => setShowOutreachModal(true)}
                        className="rounded-md bg-green-accent px-4 py-2 text-sm font-semibold text-darker-gray shadow-sm hover:bg-green-accent/80"
                    >
                        Draft Outreach
                    </button>
                </div>

                 <div className="bg-dark-gray/50 p-6 rounded-lg border border-gray-700/50">
                    <h4 className="font-semibold text-light-gray mb-2">Investment Thesis</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">{investor.thesis}</p>
                </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-dark-gray/50 p-6 rounded-lg border border-gray-700/50">
                         <h4 className="font-semibold text-light-gray mb-4">Focus Areas</h4>
                        <dl className="text-sm space-y-2">
                             <div>
                                <dt className="text-medium-gray">Sectors</dt>
                                <dd className="text-light-gray font-medium flex flex-wrap gap-1 mt-1">
                                    {investor.sectors.map(s => <span key={s} className="bg-navy px-2 py-0.5 rounded-full text-xs">{s}</span>)}
                                </dd>
                            </div>
                             <div>
                                <dt className="text-medium-gray">Stage</dt>
                                <dd className="text-light-gray font-medium">{investor.stage.join(', ')}</dd>
                            </div>
                             <div>
                                <dt className="text-medium-gray">Typical Check Size</dt>
                                <dd className="text-light-gray font-medium font-mono">{investor.checkSize}</dd>
                            </div>
                        </dl>
                    </div>
                    <div className="bg-dark-gray/50 p-6 rounded-lg border border-gray-700/50">
                        <h4 className="font-semibold text-light-gray mb-4">Portfolio Highlights</h4>
                        <ul className="text-sm space-y-2">
                            {investor.portfolio.map(company => (
                                <li key={company} className="text-light-gray">{company}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {showOutreachModal && <OutreachModal investor={investor} onClose={() => setShowOutreachModal(false)} />}
        </>
    );
};

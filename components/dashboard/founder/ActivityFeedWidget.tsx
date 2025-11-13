
import React from 'react';
import { mockActivityFeed } from './mockData';

export const ActivityFeedWidget: React.FC = () => {
    return (
        <div className="bg-dark-gray/50 p-6 rounded-lg border border-gray-700/50 h-full">
            <h4 className="text-sm font-semibold text-medium-gray uppercase tracking-wider mb-4">Activity Feed</h4>
            <ul className="space-y-4">
                {mockActivityFeed.map(item => (
                    <li key={item.id} className="flex items-start">
                        <div className="flex-shrink-0">
                            {/* Icon placeholder */}
                            <div className="h-8 w-8 rounded-full bg-navy flex items-center justify-center">
                                <svg className="h-4 w-4 text-green-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-light-gray">{item.text}</p>
                            <p className="text-xs text-medium-gray">{item.timestamp}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

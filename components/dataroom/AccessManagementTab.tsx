import React, { useState } from 'react';
import { mockInvestorAccess } from './mockData';
import { GrantAccessModal } from './GrantAccessModal';

const StatusBadge: React.FC<{ status: 'Active' | 'Pending' | 'Expired' }> = ({ status }) => {
    const baseClasses = "px-2 inline-flex text-xs leading-5 font-semibold rounded-full";
    const statusClasses = {
        Active: "bg-green-accent/20 text-green-accent",
        Pending: "bg-gold-accent/20 text-gold-accent",
        // FIX: Changed text-red to text-red-400 for consistency
        Expired: "bg-red-400/20 text-red-400",
    };
    return <span className={`${baseClasses} ${statusClasses[status]}`}>{status}</span>;
};

export const AccessManagementTab: React.FC = () => {
    const [isGrantingAccess, setIsGrantingAccess] = useState(false);

    return (
        <>
            <div>
                <div className="flex justify-end mb-4">
                    <button 
                        onClick={() => setIsGrantingAccess(true)}
                        className="rounded-md bg-green-accent px-4 py-2 text-sm font-semibold text-darker-gray shadow-sm hover:bg-green-accent/80"
                    >
                        Grant Access
                    </button>
                </div>
                <div className="bg-dark-gray/50 rounded-lg border border-gray-700/50 overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-700">
                        <thead className="bg-dark-gray">
                            <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-light-gray sm:pl-6">Investor</th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-light-gray">Status</th>
                                <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-light-gray sm:table-cell">Last Viewed</th>
                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800 bg-navy">
                            {mockInvestorAccess.map((access) => (
                                <tr key={access.id} className="hover:bg-dark-gray/40">
                                    <td className="py-4 pl-4 pr-3 text-sm sm:pl-6">
                                        <div className="font-medium text-white">{access.name}</div>
                                        <div className="text-medium-gray">{access.fund}</div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-medium-gray">
                                        <StatusBadge status={access.status} />
                                    </td>
                                    <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-medium-gray sm:table-cell font-mono">{access.lastViewed}</td>
                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                        <a href="#" className="text-gold-accent hover:text-gold-accent/80">Manage<span className="sr-only">, {access.name}</span></a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isGrantingAccess && <GrantAccessModal onClose={() => setIsGrantingAccess(false)} />}
        </>
    );
};

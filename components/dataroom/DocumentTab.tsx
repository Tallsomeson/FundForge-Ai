
import React from 'react';
import { mockDocuments } from './mockData';

const FileIcon: React.FC<{ type: string }> = ({ type }) => {
    // Basic icon mapping
    const icons: { [key: string]: React.ReactNode } = {
        folder: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gold-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>,
        pdf: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
        deck: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" /></svg>,
        spreadsheet: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    };
    return icons[type] || icons['pdf'];
};

export const DocumentTab: React.FC = () => {
    return (
        <div>
            <div className="flex justify-end mb-4">
                <button className="rounded-md bg-green-accent px-4 py-2 text-sm font-semibold text-darker-gray shadow-sm hover:bg-green-accent/80">
                    Upload File
                </button>
            </div>
            <div className="bg-dark-gray/50 rounded-lg border border-gray-700/50 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-dark-gray">
                        <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-light-gray sm:pl-6">Name</th>
                            <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-light-gray lg:table-cell">Last Updated</th>
                            <th scope="col" className="hidden px-3 py-3.5 text-left text-sm font-semibold text-light-gray sm:table-cell">Size</th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-light-gray">Shared With</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800 bg-navy">
                        {mockDocuments.map((doc) => (
                            <tr key={doc.id} className="hover:bg-dark-gray/40">
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">
                                    <div className="flex items-center">
                                        <FileIcon type={doc.type} />
                                        <span className="ml-3">{doc.name}</span>
                                    </div>
                                </td>
                                <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-medium-gray lg:table-cell">{doc.lastUpdated}</td>
                                <td className="hidden whitespace-nowrap px-3 py-4 text-sm text-medium-gray sm:table-cell">{doc.size || '—'}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-medium-gray">{doc.sharedWith} investors</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
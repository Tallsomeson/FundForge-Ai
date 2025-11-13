
import React from 'react';

export const GrantAccessModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    return (
        <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-darker-gray bg-opacity-80 backdrop-blur-sm transition-opacity"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-2xl bg-navy text-left shadow-2xl shadow-navy/50 transition-all sm:my-8 sm:w-full sm:max-w-lg border border-gray-700">
                        <form onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                            <div className="bg-navy p-6 sm:p-8">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-bold leading-6 text-light-gray" id="modal-title">
                                        Grant Data Room Access
                                    </h3>
                                    <button type="button" onClick={onClose} className="-m-2 p-2 text-gray-400 hover:text-white">
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </div>
                                <div className="mt-6 space-y-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-300">Investor Email</label>
                                        <input type="email" id="email" required placeholder="investor@vc.com" className="mt-1 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-accent"/>
                                    </div>
                                    <div>
                                        <label htmlFor="access-duration" className="block text-sm font-medium leading-6 text-gray-300">Access Duration</label>
                                        <select id="access-duration" className="mt-1 block w-full rounded-md border-0 bg-white/5 py-1.5 text-white">
                                            <option>7 Days</option>
                                            <option>14 Days</option>
                                            <option>30 Days</option>
                                            <option>Indefinite</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-dark-gray/50 px-6 py-4 sm:flex sm:flex-row-reverse">
                                <button type="submit" className="inline-flex w-full justify-center rounded-md bg-green-accent px-3 py-2 text-sm font-semibold text-darker-gray shadow-sm hover:bg-green-accent/80 sm:ml-3 sm:w-auto">
                                    Grant Access
                                </button>
                                <button type="button" onClick={onClose} className="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20 sm:mt-0 sm:w-auto">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
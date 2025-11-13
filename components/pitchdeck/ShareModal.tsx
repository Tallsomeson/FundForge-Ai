import React from 'react';

interface ShareModalProps {
    onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ onClose }) => {
    return (
        <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-darker-gray bg-opacity-80 backdrop-blur-sm transition-opacity"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-2xl bg-navy text-left shadow-2xl shadow-navy/50 transition-all sm:my-8 sm:w-full sm:max-w-md border border-gray-700">
                        <div className="bg-navy p-6 sm:p-8">
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-bold leading-6 text-light-gray" id="modal-title">
                                    Share Deck Analysis
                                </h3>
                                <button onClick={onClose} className="-m-2 p-2 text-gray-400 hover:text-white">
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>

                            <div className="mt-6 space-y-4">
                                <div>
                                    <label htmlFor="share-link" className="block text-sm font-medium leading-6 text-gray-300">Shareable Link</label>
                                    <div className="mt-2 flex rounded-md shadow-sm">
                                        <input
                                            type="text"
                                            id="share-link"
                                            readOnly
                                            value="https://fundforge.com/deck/share/a1b2c3d4e5"
                                            className="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-0 bg-white/5 py-1.5 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-accent sm:text-sm"
                                        />
                                        <button
                                            type="button"
                                            className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-white bg-white/10 hover:bg-white/20"
                                        >
                                            Copy
                                        </button>
                                    </div>
                                </div>
                                <p className="text-xs text-medium-gray">Anyone with this link will be able to view the analysis report.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

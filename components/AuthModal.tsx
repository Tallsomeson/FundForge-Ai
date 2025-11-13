import React from 'react';

interface AuthModalProps {
    onClose: () => void;
    mode: 'signin' | 'signup';
}

export const AuthModal: React.FC<AuthModalProps> = ({ onClose, mode }) => {
    // This is a placeholder component and might not be used in the current app structure.
    return (
        <div className="relative z-50">
            <div className="fixed inset-0 bg-darker-gray bg-opacity-80 backdrop-blur-sm"></div>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <div className="relative transform overflow-hidden rounded-2xl bg-navy sm:w-full sm:max-w-md border border-gray-700">
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-center text-white">
                                {mode === 'signin' ? 'Sign In' : 'Sign Up'}
                            </h2>
                            {/* Form content would go here */}
                            <button onClick={onClose} className="mt-4 w-full rounded-md bg-white/10 py-2 text-white">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

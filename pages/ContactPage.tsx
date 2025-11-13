import React from 'react';

export const ContactPage: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-16 sm:py-24">
            <div className="max-w-4xl text-center mx-auto">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Contact Us</h2>
                <p className="mt-6 text-lg leading-8 text-medium-gray">
                    Have questions about our platform or enterprise plans? We'd love to hear from you.
                </p>
                <div className="mt-8">
                    <a href="mailto:sales@fundforge.com" className="text-xl font-semibold text-green-accent hover:text-green-accent/80">
                        sales@fundforge.com
                    </a>
                </div>
            </div>
        </div>
    );
};

import React from 'react';

interface NavbarProps {
    isAuthenticated: boolean;
    onLogin: () => void;
    onSignUp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isAuthenticated }) => {
    // In a real app, you would use react-router-dom's Link component.
    const Link = ({ href, children }: { href: string, children: React.ReactNode }) => <a href={href} className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">{children}</a>;

    return (
        <header className="bg-darker-gray/80 backdrop-blur-sm sticky top-0 z-40">
            <nav className="container mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="text-xl font-bold text-white">FundForge</span>
                    </a>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link href="/features">Features</Link>
                    <Link href="/pricing">Pricing</Link>
                    <Link href="/about">About</Link>
                    <Link href="/resources">Resources</Link>
                </div>
                <div className="flex flex-1 justify-end items-center gap-x-4">
                    {isAuthenticated ? (
                        <span className="text-sm font-semibold text-white">Dashboard</span>
                    ) : (
                        <>
                            <a href="/signin" className="text-sm font-semibold leading-6 text-gray-300 hover:text-white">Log in <span aria-hidden="true">&rarr;</span></a>
                            <a href="/signup" className="rounded-md bg-green-accent px-3.5 py-2.5 text-sm font-semibold text-darker-gray shadow-sm hover:bg-green-accent/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-accent">Sign up</a>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
};

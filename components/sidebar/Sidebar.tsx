import React from 'react';
import { UserType } from '../../App';

// Placeholder for an icon component
const IconPlaceholder = () => <div className="w-5 h-5 bg-gray-600 rounded-sm"></div>;

// In a real app, you'd use NavLink from react-router-dom
const NavItem: React.FC<{ href: string, icon: React.ReactNode, children: React.ReactNode }> = ({ href, icon, children }) => (
    <li>
        <a href={href} className="flex items-center p-2 text-gray-300 rounded-lg hover:bg-dark-gray hover:text-white group">
            {icon}
            <span className="ml-3">{children}</span>
        </a>
    </li>
);

interface SidebarProps {
    userType: UserType;
    onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ userType, onLogout }) => {
    const founderNav = [
        { name: 'Dashboard', href: '/dashboard', icon: <IconPlaceholder /> },
        { name: 'Pitch Deck', href: '/pitch-deck', icon: <IconPlaceholder /> },
        { name: 'Investor Matching', href: '/investor-matching', icon: <IconPlaceholder /> },
        { name: 'Data Room', href: '/data-room', icon: <IconPlaceholder /> },
    ];

    const investorNav = [
        { name: 'Dashboard', href: '/dashboard', icon: <IconPlaceholder /> },
        { name: 'Deal Flow', href: '/deal-flow', icon: <IconPlaceholder /> },
        { name: 'Portfolio', href: '/portfolio', icon: <IconPlaceholder /> },
    ];

    const navItems = userType === 'founder' ? founderNav : investorNav;

    return (
        <aside className="w-64 flex-shrink-0" aria-label="Sidebar">
            <div className="flex flex-col h-full px-3 py-4 overflow-y-auto bg-navy border-r border-gray-700">
                <a href="/" className="flex items-center pl-2.5 mb-5">
                    <span className="self-center text-xl font-semibold whitespace-nowrap text-white">FundForge</span>
                </a>
                <ul className="space-y-2 font-medium flex-1">
                    {navItems.map(item => <NavItem key={item.name} href={item.href} icon={item.icon}>{item.name}</NavItem>)}
                </ul>
                <div className="mt-auto">
                     <ul className="pt-4 mt-4 space-y-2 font-medium border-t border-gray-700">
                        <NavItem href="/settings" icon={<IconPlaceholder />}>Settings</NavItem>
                        <li>
                           <button onClick={onLogout} className="flex items-center p-2 text-gray-300 rounded-lg hover:bg-dark-gray hover:text-white group w-full">
                                <IconPlaceholder />
                               <span className="ml-3">Log Out</span>
                           </button>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
};

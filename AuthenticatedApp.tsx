import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/sidebar/Sidebar';
import { FounderDashboardPage } from './pages/dashboard/FounderDashboardPage';
import { InvestorDashboardPage } from './pages/dashboard/InvestorDashboardPage';
import { PitchDeckPage } from './pages/PitchDeckPage';
import { InvestorMatchingPage } from './pages/InvestorMatchingPage';
import { DataRoomPage } from './pages/DataRoomPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { DealFlowPage } from './pages/DealFlowPage';
import { SettingsPage } from './pages/SettingsPage';
import { UserType } from './App';

interface AuthenticatedAppProps {
    userType: UserType;
    onLogout: () => void;
}

export const AuthenticatedApp: React.FC<AuthenticatedAppProps> = ({ userType, onLogout }) => {
    return (
        <Router>
            <div className="flex h-screen bg-darker-gray text-white">
                <Sidebar userType={userType} onLogout={onLogout} />
                <main className="flex-1 overflow-y-auto">
                    <Routes>
                        {userType === 'founder' ? (
                            <>
                                <Route path="/" element={<Navigate to="/dashboard" />} />
                                <Route path="/dashboard" element={<FounderDashboardPage />} />
                                <Route path="/pitch-deck" element={<PitchDeckPage />} />
                                <Route path="/investor-matching" element={<InvestorMatchingPage />} />
                                <Route path="/data-room" element={<DataRoomPage />} />
                            </>
                        ) : (
                             <>
                                <Route path="/" element={<Navigate to="/dashboard" />} />
                                <Route path="/dashboard" element={<InvestorDashboardPage />} />
                                <Route path="/deal-flow" element={<DealFlowPage />} />
                                <Route path="/portfolio" element={<PortfolioPage />} />
                            </>
                        )}
                        <Route path="/settings" element={<SettingsPage userType={userType} />} />
                        <Route path="*" element={<Navigate to="/dashboard" />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

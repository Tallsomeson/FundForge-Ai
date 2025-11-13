import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthenticatedApp } from './AuthenticatedApp';
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { ContactPage } from './pages/ContactPage';
import { SignInPage } from './pages/auth/SignInPage';
import { SignUpPage } from './pages/auth/SignUpPage';
import { PasswordResetPage } from './pages/auth/PasswordResetPage';
import { OnboardingPage } from './pages/OnboardingPage';
import { Navbar } from './components/Navbar';

export type UserType = 'founder' | 'investor';

const App: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userType, setUserType] = useState<UserType>('founder');
    const [isOnboarding, setIsOnboarding] = useState(false);

    const handleLogin = (type: UserType) => {
        setUserType(type);
        setIsOnboarding(true); // Go to onboarding after login/signup
        // In a real app, you would set isAuthenticated after onboarding
    };

    const handleOnboardingComplete = () => {
        setIsOnboarding(false);
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    if (isAuthenticated) {
        return <AuthenticatedApp userType={userType} onLogout={handleLogout} />;
    }

    if (isOnboarding) {
        return <OnboardingPage userType={userType} onComplete={handleOnboardingComplete} />;
    }

    return (
        <Router>
            <div className="bg-darker-gray min-h-screen text-white">
                <Navbar onLogin={() => {}} onSignUp={() => {}} isAuthenticated={false} />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage onLogin={handleLogin} />} />
                        <Route path="/features" element={<FeaturesPage />} />
                        <Route path="/pricing" element={<PricingPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/resources" element={<ResourcesPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/signin" element={<SignInPage onLogin={handleLogin} />} />
                        <Route path="/signup" element={<SignUpPage onLogin={handleLogin} />} />
                        <Route path="/reset-password" element={<PasswordResetPage />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;

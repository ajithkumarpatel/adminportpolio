import React, { useState, useEffect, lazy, Suspense } from 'react';

const PortfolioPage = lazy(() => import('./views/PortfolioPage'));
const AdminPage = lazy(() => import('./views/AdminPage'));

const App: React.FC = () => {
    const [route, setRoute] = useState(window.location.hash);

    useEffect(() => {
        const handleHashChange = () => {
            setRoute(window.location.hash);
        };
        
        // Set initial route based on hash
        setRoute(window.location.hash);

        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    const renderRoute = () => {
        switch (route) {
            case '#admin':
                return <AdminPage />;
            default:
                return <PortfolioPage />;
        }
    };

    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-dark-bg text-text-light font-semibold">Loading...</div>}>
            {renderRoute()}
        </Suspense>
    );
};

export default App;
import React, { useState } from 'react';
import AdminLogin from '../components/admin/AdminLogin';
import AdminDashboard from '../components/admin/AdminDashboard';

const AdminPage: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    return (
        <div className="bg-dark-bg min-h-screen text-text-normal flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold text-text-light mb-2">Admin Panel</h1>
            <p className="text-text-muted mb-8">Portfolio Contact Messages</p>
            
            {!isLoggedIn ? (
                <AdminLogin onLoginSuccess={handleLoginSuccess} />
            ) : (
                <AdminDashboard />
            )}
            
            <a href="/" className="text-xs text-text-muted mt-8 hover:text-accent transition-colors">Back to Portfolio</a>
        </div>
    );
};

export default AdminPage;
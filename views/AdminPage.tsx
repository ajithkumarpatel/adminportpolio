import React, { useState, useEffect } from 'react';
import AdminLogin from '../components/admin/AdminLogin';
import AdminDashboard from '../components/admin/AdminDashboard';
import { auth, onAuthStateChanged, signOut } from '../services/firebase';
import type { User } from 'firebase/auth';

const AdminPage: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!auth) {
            console.error("Firebase auth is not initialized.");
            setLoading(false);
            return;
        }
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        if (!auth) return;
        try {
            await signOut(auth);
            // onAuthStateChanged listener will set user to null
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    return (
        <div className="bg-dark-bg min-h-screen text-text-normal flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold text-text-light mb-2">Admin Panel</h1>
            <p className="text-text-muted mb-8">Portfolio Contact Messages</p>
            
            {loading ? (
                <p>Authenticating...</p>
            ) : user ? (
                <AdminDashboard onLogout={handleLogout} />
            ) : (
                <AdminLogin />
            )}
            
            <a href="#" className="text-xs text-gray-600 mt-8 hover:text-accent">Back to Portfolio</a>
        </div>
    );
};

export default AdminPage;
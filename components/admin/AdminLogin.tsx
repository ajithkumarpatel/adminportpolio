import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../../services/firebase';

const AdminLogin: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if (!auth) {
            setError("Firebase authentication is not initialized.");
            setLoading(false);
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password);
            // onAuthStateChanged in AdminPage will handle the redirect.
        } catch (err: any) {
            if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password' || err.code === 'auth/invalid-credential') {
                setError('Invalid email or password.');
            } else {
                setError('An error occurred during login. Please try again.');
                console.error(err);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-sm p-8 bg-primary rounded-lg shadow-lg">
            <form onSubmit={handleLogin} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-normal mb-2">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-dark-bg text-text-light rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="admin@example.com"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-text-normal mb-2">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 bg-dark-bg text-text-light rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Enter admin password"
                        required
                    />
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-3 bg-accent text-white rounded hover:bg-blue-500 transition-colors duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
             <p className="text-xs text-text-muted text-center mt-4">
                Hint: Use email <code className="font-mono">admin@example.com</code> and password <code className="font-mono">password123</code>.
                <br/>(Ensure this user exists in Firebase Auth)
             </p>
        </div>
    );
};

export default AdminLogin;
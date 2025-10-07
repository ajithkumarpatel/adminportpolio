import React, { useState } from 'react';

interface AdminLoginProps {
    onLoginSuccess: () => void;
}

// In a real application, this should be handled securely on a server.
// For this portfolio, the password is hardcoded for simplicity.
const ADMIN_PASSWORD = 'password123';

const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setError('');
            onLoginSuccess();
        } else {
            setError('Incorrect password. Please try again.');
        }
    };

    return (
        <div className="w-full max-w-sm p-8 bg-primary rounded-lg shadow-lg">
            <form onSubmit={handleLogin} className="space-y-4">
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-text-normal mb-2">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 bg-dark-bg text-text-light rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Enter admin password"
                    />
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button
                    type="submit"
                    className="w-full px-6 py-3 bg-accent text-white rounded hover:bg-blue-500 transition-colors duration-300 font-semibold"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default AdminLogin;
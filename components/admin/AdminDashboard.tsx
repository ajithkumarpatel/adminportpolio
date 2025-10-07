import React, { useState, useEffect, useCallback } from 'react';
import type { ContactMessage } from '../../types';
import { db, collection, getDocs, query, orderBy, doc, deleteDoc, updateDoc } from '../../services/firebase';
import { TrashIcon, EyeIcon, EyeOffIcon } from '../Icons';

interface AdminDashboardProps {
    onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [deletingId, setDeletingId] = useState<string | null>(null);
    const [togglingReadId, setTogglingReadId] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchMessages = useCallback(async () => {
        setLoading(true);
        setError(null);

        if (!db) {
            setError("Firebase is not initialized. Please check your configuration and console for errors.");
            setLoading(false);
            return;
        }

        try {
            const messagesCollection = collection(db, 'contacts');
            const q = query(messagesCollection, orderBy('timestamp', 'desc'));
            const querySnapshot = await getDocs(q);
            const fetchedMessages = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            } as ContactMessage));
            setMessages(fetchedMessages);
        } catch (err) {
            console.error("Error fetching messages:", err);
            setError("Failed to fetch messages. Please check the console for details.");
        } finally {
            setLoading(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        fetchMessages();
    }, [fetchMessages]);
    
    const handleDelete = async (id: string) => {
        if (!window.confirm("Are you sure you want to delete this message?")) return;
        
        setDeletingId(id);
        try {
            if (!db) throw new Error("Firebase is not initialized.");
            await deleteDoc(doc(db, 'contacts', id));
            setMessages(prev => prev.filter(msg => msg.id !== id));
        } catch (err) {
            console.error("Error deleting message:", err);
            setError("Failed to delete message. Please try again.");
        } finally {
            setDeletingId(null);
        }
    };

    const handleToggleRead = async (id: string, currentStatus: boolean | undefined) => {
        setTogglingReadId(id);
        try {
            if (!db) throw new Error("Firebase is not initialized.");
            const messageRef = doc(db, 'contacts', id);
            await updateDoc(messageRef, { read: !currentStatus });
            setMessages(prev => prev.map(msg => msg.id === id ? { ...msg, read: !currentStatus } : msg));
        } catch (err) {
            console.error("Error updating message status:", err);
            setError("Failed to update message status. Please try again.");
        } finally {
            setTogglingReadId(null);
        }
    };

    const formatDate = (timestamp: { seconds: number; nanoseconds: number }) => {
        if (!timestamp) return 'N/A';
        return new Date(timestamp.seconds * 1000).toLocaleString();
    };

    const filteredMessages = messages.filter(msg =>
        msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        msg.message.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="w-full max-w-4xl p-8 bg-primary rounded-lg shadow-lg text-center">
                <p>Loading messages...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full max-w-4xl p-8 bg-primary rounded-lg shadow-lg text-center text-red-400">
                <p>{error}</p>
                 <button onClick={fetchMessages} className="mt-4 px-4 py-2 bg-accent text-white rounded hover:bg-blue-500">Retry</button>
            </div>
        );
    }
    
    return (
        <div className="w-full max-w-5xl p-4 sm:p-8 bg-primary rounded-lg shadow-lg">
             <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <input
                    type="text"
                    placeholder="Search messages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full sm:w-auto max-w-sm px-4 py-2 bg-dark-bg text-text-light rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                    onClick={onLogout}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-300 font-semibold text-sm"
                >
                    Logout
                </button>
            </div>
            {messages.length === 0 ? (
                <p className="text-center">No messages found.</p>
            ) : filteredMessages.length === 0 ? (
                <p className="text-center">No messages match your search.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-text-normal">
                        <thead className="text-xs text-text-light uppercase bg-gray-700">
                            <tr>
                                <th scope="col" className="px-6 py-3">Timestamp</th>
                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3">Email</th>
                                <th scope="col" className="px-6 py-3">Message</th>
                                <th scope="col" className="px-6 py-3 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredMessages.map(msg => (
                                <tr key={msg.id} className={`border-b border-gray-700 transition-colors ${!msg.read ? 'bg-blue-900/20' : 'bg-primary'} hover:bg-gray-700/50`}>
                                    <td className="px-6 py-4 font-mono whitespace-nowrap">{formatDate(msg.timestamp)}</td>
                                    <td className={`px-6 py-4 font-medium whitespace-nowrap ${!msg.read ? 'text-text-light' : ''}`}>{msg.name}</td>
                                    <td className="px-6 py-4">{msg.email}</td>
                                    <td className="px-6 py-4 whitespace-pre-wrap" style={{ minWidth: '200px' }}>{msg.message}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-center gap-4">
                                            <button 
                                                onClick={() => handleToggleRead(msg.id, msg.read)} 
                                                disabled={togglingReadId === msg.id}
                                                className="text-text-muted hover:text-accent disabled:opacity-50 disabled:cursor-wait"
                                                aria-label={msg.read ? "Mark as unread" : "Mark as read"}
                                            >
                                                {msg.read ? <EyeOffIcon /> : <EyeIcon />}
                                            </button>
                                            <button 
                                                onClick={() => handleDelete(msg.id)} 
                                                disabled={deletingId === msg.id}
                                                className="text-red-500 hover:text-red-400 disabled:opacity-50 disabled:cursor-wait"
                                                aria-label="Delete message"
                                            >
                                                <TrashIcon />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
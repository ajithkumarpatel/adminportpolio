import React, { useState, useEffect, useCallback } from 'react';
import type { ContactMessage } from '../../types';
import { db, collection, getDocs, query, orderBy } from '../../services/firebase';

const AdminDashboard: React.FC = () => {
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchMessages = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const messagesCollection = collection(db, 'contacts');
            const q = query(messagesCollection, orderBy('timestamp', 'desc'));
            const querySnapshot = await getDocs(q);
            // Fix: Replaced spread operator with explicit property mapping to resolve TypeScript error.
            const fetchedMessages = querySnapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    id: doc.id,
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    timestamp: data.timestamp
                } as ContactMessage;
            });
            setMessages(fetchedMessages);
        } catch (err: any) {
            console.error("Error fetching messages:", err);
            if (err.code === 'permission-denied') {
                setError("Failed to fetch messages: Permission Denied. Please check your Firestore security rules. You need to allow reads on the 'contacts' collection for the admin panel to work.");
            } else {
                setError("Failed to fetch messages. Please check the console for details and ensure your Firebase setup is correct.");
            }
        } finally {
            setLoading(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        fetchMessages();
    }, [fetchMessages]);
    
    const formatDate = (timestamp: { seconds: number; nanoseconds: number }) => {
        if (!timestamp) return 'N/A';
        return new Date(timestamp.seconds * 1000).toLocaleString();
    };

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
            </div>
        );
    }
    
    return (
        <div className="w-full max-w-5xl p-4 sm:p-8 bg-primary rounded-lg shadow-lg">
            {messages.length === 0 ? (
                <p className="text-center">No messages found.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-text-normal">
                        <thead className="text-xs text-text-light uppercase bg-gray-700">
                            <tr>
                                <th scope="col" className="px-6 py-3">Timestamp</th>
                                <th scope="col" className="px-6 py-3">Name</th>
                                <th scope="col" className="px-6 py-3">Email</th>
                                <th scope="col" className="px-6 py-3">Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map(msg => (
                                <tr key={msg.id} className="bg-primary border-b border-gray-700 hover:bg-gray-700/50 transition-colors">
                                    <td className="px-6 py-4 font-mono whitespace-nowrap">{formatDate(msg.timestamp)}</td>
                                    <td className="px-6 py-4 font-medium text-text-light whitespace-nowrap">{msg.name}</td>
                                    <td className="px-6 py-4">{msg.email}</td>
                                    <td className="px-6 py-4 whitespace-pre-wrap">{msg.message}</td>
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
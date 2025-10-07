import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation, sectionVariants, itemVariants } from '../../hooks/useScrollAnimation';
import { db, collection, addDoc, serverTimestamp } from '../../services/firebase';

const Contact: React.FC = () => {
    const [ref, controls] = useScrollAnimation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        
        // Ensure no fields are undefined before sending to Firestore.
        const dataToSend = {
            name: name || '',
            email: email || '',
            message: message || '',
            timestamp: serverTimestamp()
        };

        try {
            if (!db) {
                throw new Error("Firestore is not initialized. Please check your Firebase configuration in services/firebase.ts");
            }
            await addDoc(collection(db, 'contacts'), dataToSend);
            setStatus('success');
            setName('');
            setEmail('');
            setMessage('');
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error("Error adding document: ", error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <motion.section 
            id="contact" 
            className="py-24"
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={controls}
        >
            <motion.div variants={itemVariants} className="text-center max-w-xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-text-light my-4">Get In Touch</h2>
                <p className="text-text-normal mb-8">
                    I'm currently seeking new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
            </motion.div>
            <motion.form 
                variants={itemVariants} 
                onSubmit={handleSubmit} 
                className="max-w-xl mx-auto space-y-8"
            >
                <div className="relative">
                    <input 
                        type="text" 
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="peer w-full px-4 py-3 bg-primary text-text-light rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent transition-colors placeholder-transparent"
                        placeholder="Name"
                    />
                    <label htmlFor="name" className="absolute left-4 -top-3.5 text-text-muted text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-text-normal peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-accent peer-focus:text-sm">Name</label>
                </div>
                 <div className="relative">
                    <input 
                        type="email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="peer w-full px-4 py-3 bg-primary text-text-light rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent transition-colors placeholder-transparent"
                        placeholder="Email"
                    />
                     <label htmlFor="email" className="absolute left-4 -top-3.5 text-text-muted text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-text-normal peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-accent peer-focus:text-sm">Email</label>
                </div>
                <div className="relative">
                    <textarea 
                        id="message"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={5}
                        className="peer w-full px-4 py-3 bg-primary text-text-light rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent transition-colors placeholder-transparent" 
                    ></textarea>
                    <label htmlFor="message" className="absolute left-4 -top-3.5 text-text-muted text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-text-normal peer-placeholder-shown:top-3.5 peer-focus:-top-3.5 peer-focus:text-accent peer-focus:text-sm">Message</label>
                </div>
                <div className="text-center">
                    <motion.button 
                        type="submit" 
                        disabled={status === 'loading'}
                        className="px-8 py-3 bg-accent text-white rounded-md hover:bg-blue-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </motion.button>
                </div>
            </motion.form>
            <div className="mt-6 text-center h-6">
                <AnimatePresence>
                    {status === 'success' && (
                        <motion.p 
                            className="text-green-400"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                        >
                            Message sent successfully! Thank you.
                        </motion.p>
                    )}
                    {status === 'error' && (
                        <motion.p 
                            className="text-red-400"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                        >
                            Something went wrong. Please try again.
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </motion.section>
    );
};

export default Contact;
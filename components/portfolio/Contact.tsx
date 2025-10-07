import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, sectionVariants, itemVariants } from '../../hooks/useScrollAnimation';
import { db, collection, addDoc, serverTimestamp } from '../../services/firebase';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';
type StatusMessage = {
    type: FormStatus;
    text: string;
} | null;

/**
 * Wraps a promise with a timeout.
 * @param promise The promise to wrap.
 * @param ms The timeout duration in milliseconds.
 * @param timeoutError The error to reject with on timeout.
 * @returns A new promise that races the original promise against the timeout.
 */
// FIX: Add generic type parameter <T> to declare it for use in the function signature. A trailing comma is used to avoid ambiguity with JSX syntax.
const promiseWithTimeout = <T,>(promise: Promise<T>, ms: number, timeoutError = new Error('Request timed out')): Promise<T> => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(timeoutError);
    }, ms);

    promise.then(
      (res) => {
        clearTimeout(timeoutId);
        resolve(res);
      },
      (err) => {
        clearTimeout(timeoutId);
        reject(err);
      }
    );
  });
};


const Contact: React.FC = () => {
    const [ref, controls] = useScrollAnimation();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<FormStatus>('idle');
    const [statusMessage, setStatusMessage] = useState<StatusMessage>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setStatusMessage(null);

        // 1. Check for Firebase connection
        if (!db) {
            console.error("Firebase is not initialized.");
            setStatusMessage({ type: 'error', text: "Server connection failed. Please try again later." });
            setStatus('error');
            return;
        }

        // 2. Basic validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setStatusMessage({ type: 'error', text: "Please fill out all fields." });
            setStatus('idle'); // Revert status to allow another attempt
            return;
        }

        try {
            // 3. Create the submission promise
            const submissionPromise = addDoc(collection(db, 'contacts'), {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                timestamp: serverTimestamp(),
                read: false
            });

            // 4. Submit to Firebase with a 15-second timeout
            await promiseWithTimeout(submissionPromise, 15000);

            setStatus('success');
            setStatusMessage({ type: 'success', text: "Message sent successfully! Thank you." });
            setFormData({ name: '', email: '', message: '' }); // Clear form
            setTimeout(() => {
                setStatus('idle');
                setStatusMessage(null);
            }, 5000);
        } catch (error) {
            // 5. Handle submission errors with more specific feedback
            console.error("Error adding document: ", error);
            setStatus('error');
            
            let message = "Failed to send message. Please try again later.";

            if (error instanceof Error && error.message === 'Request timed out') {
                 message = "Submission timed out. Please check your connection.";
            // Check for Firebase-specific error codes
            } else if (error && typeof error === 'object' && 'code' in error) {
                const firebaseError = error as { code: string; message: string };
                if (firebaseError.code === 'permission-denied') {
                    message = "Submission failed: Permission denied. Please check Firestore security rules.";
                } else if (firebaseError.code === 'unavailable') {
                    message = "The service is currently unavailable. Please try again later.";
                } else {
                    message = `An error occurred: ${firebaseError.message}`;
                }
            }
            
            setStatusMessage({ type: 'error', text: message });
            
             setTimeout(() => {
                setStatus('idle');
                setStatusMessage(null);
            }, 8000); // Increased timeout to allow user to read the message
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
                className="max-w-xl mx-auto space-y-4"
                noValidate // Disable native validation to use our own
            >
                <div>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-primary text-text-light rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent" 
                    />
                </div>
                <div>
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-primary text-text-light rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent" 
                    />
                </div>
                <div>
                    <textarea 
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-primary text-text-light rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-accent" 
                    ></textarea>
                </div>
                <div className="text-center">
                    <button 
                        type="submit" 
                        disabled={status === 'loading'}
                        className="px-8 py-3 bg-accent text-white rounded hover:bg-blue-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                    >
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            </motion.form>
            <div className="mt-6 text-center min-h-[1.5rem]"> {/* Use min-h to prevent layout shift */}
                {statusMessage && (
                    <p className={`${statusMessage.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {statusMessage.text}
                    </p>
                )}
            </div>
        </motion.section>
    );
};

export default Contact;
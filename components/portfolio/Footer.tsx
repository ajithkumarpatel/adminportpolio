import React from 'react';
import { motion } from 'framer-motion';
import { USER_INFO } from '../../constants';

const Footer: React.FC = () => {
    return (
        <footer className="py-8 border-t border-primary">
            <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center">
                <div className="flex space-x-6 mb-4">
                    {USER_INFO.socials.map(social => (
                        <motion.a 
                           key={social.name} 
                           href={social.url} 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           aria-label={social.name} 
                           className="text-text-muted hover:text-accent transition-colors duration-300"
                           whileHover={{ y: -3, scale: 1.1 }}
                           whileTap={{ scale: 0.9 }}
                        >
                           <social.icon className="h-6 w-6"/>
                        </motion.a>
                    ))}
                     <motion.a 
                        href={`mailto:${USER_INFO.email}`} 
                        aria-label="Email" 
                        className="text-text-muted hover:text-accent transition-colors duration-300"
                        whileHover={{ y: -3, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                     >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </motion.a>
                </div>
                <p className="font-mono text-sm text-text-muted text-center">
                    Designed & Built by {USER_INFO.name}<br/>
                    &copy; {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
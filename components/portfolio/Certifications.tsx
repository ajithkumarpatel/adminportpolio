import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../../constants';
import { useScrollAnimation, sectionVariants, itemVariants } from '../../hooks/useScrollAnimation';
import { ExternalLinkIcon } from '../Icons';

const Certifications: React.FC = () => {
    const [ref, controls] = useScrollAnimation();

    return (
        <motion.section 
            id="certifications" 
            className="py-24"
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={controls}
        >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-text-light mb-12 text-center">
                Certifications
            </motion.h2>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {CERTIFICATIONS.map((cert, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-primary p-4 rounded-lg shadow-lg flex justify-between items-center"
                        whileHover={{
                            scale: 1.03,
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                        }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <div>
                            <h3 className="font-bold text-text-light">{cert.name}</h3>
                            <p className="text-sm text-text-muted">{cert.issuer}</p>
                        </div>
                        <a 
                            href={cert.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-accent hover:underline flex items-center gap-1 text-sm font-semibold"
                        >
                            Verify <ExternalLinkIcon className="h-4 w-4" />
                        </a>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Certifications;
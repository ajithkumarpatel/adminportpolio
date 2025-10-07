import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, sectionVariants, itemVariants } from '../../hooks/useScrollAnimation';
import { USER_INFO } from '../../constants';

const About: React.FC = () => {
    const [ref, controls] = useScrollAnimation();

    return (
        <motion.section 
            id="about" 
            className="py-24"
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={controls}
        >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-text-light mb-12 text-center">
                About Me
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-12 items-center">
                <motion.div variants={itemVariants} className="md:col-span-2 space-y-4 text-text-normal">
                    {USER_INFO.about.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </motion.div>
                <motion.div variants={itemVariants} className="md:col-span-1 flex justify-center">
                     <div className="relative w-56 h-56 md:w-64 md:h-64 group mx-auto">
                        <motion.div 
                            className="absolute w-full h-full rounded-md border-2 border-accent"
                            initial={{ top: '1rem', left: '1rem' }}
                            whileHover={{ top: '0.5rem', left: '0.5rem' }}
                            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        />
                        <div className="relative w-full h-full rounded-md overflow-hidden shadow-lg">
                            <motion.div 
                                className="absolute inset-0 bg-accent/30"
                                whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0)' }}
                                transition={{ duration: 0.4 }}
                            />
                            <motion.img 
                                src={USER_INFO.profileImage} 
                                alt={USER_INFO.name} 
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About;
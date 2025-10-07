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
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-text-light mb-8 text-center">
                About Me
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-12 items-center">
                <motion.div variants={itemVariants} className="md:col-span-2 space-y-4 text-text-normal">
                    {USER_INFO.about.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </motion.div>
                <motion.div variants={itemVariants} className="md:col-span-1 flex justify-center">
                    <div className="relative w-64 h-64 group">
                        <div className="absolute w-full h-full rounded-md border-2 border-accent top-4 left-4 transition-transform duration-300 group-hover:top-2 group-hover:left-2"></div>
                        <div className="relative w-full h-full rounded-md overflow-hidden">
                            <div className="absolute inset-0 bg-accent/30 group-hover:bg-transparent transition-colors duration-300"></div>
                            <img src={USER_INFO.profileImage} alt={USER_INFO.name} className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About;
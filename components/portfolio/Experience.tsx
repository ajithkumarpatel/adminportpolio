import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../../constants';
import { useScrollAnimation, sectionVariants, itemVariants } from '../../hooks/useScrollAnimation';

const Experience: React.FC = () => {
    const [ref, controls] = useScrollAnimation();

    return (
        <motion.section 
            id="experience" 
            className="py-24"
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={controls}
        >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-text-light mb-12 text-center">
                Work Experience
            </motion.h2>
            <div className="relative max-w-2xl mx-auto">
                <div className="absolute left-4 top-0 h-full w-0.5 bg-primary"></div>
                {EXPERIENCES.map((exp, index) => (
                    <motion.div key={index} variants={itemVariants} className="relative pl-12 pb-12">
                        <div className="absolute left-4 top-2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-dark-bg"></div>
                        <h3 className="text-xl font-bold text-text-light">
                            {exp.role}
                        </h3>
                        <p className="font-medium text-accent mb-1">{exp.company} | {exp.duration}</p>
                        <ul className="space-y-2 mt-2">
                            {exp.description.map((point, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="text-accent mr-3 mt-1">▪</span>
                                    <span className="text-text-normal">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Experience;
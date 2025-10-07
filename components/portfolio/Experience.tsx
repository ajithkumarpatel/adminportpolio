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
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-text-light mb-12 text-center">
                Work Experience
            </motion.h2>
            <div className="relative max-w-2xl mx-auto">
                <div className="absolute left-3 sm:left-4 top-2 h-full w-0.5 bg-primary rounded-full"></div>
                {EXPERIENCES.map((exp, index) => (
                    <motion.div 
                        key={index} 
                        variants={itemVariants} 
                        className="relative pl-10 sm:pl-12 pb-12"
                    >
                        <motion.div 
                            className="absolute left-3 sm:left-4 top-2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark-bg"
                            whileInView={{ 
                                backgroundColor: ['#1F2937', '#3B82F6', '#1F2937'],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                            viewport={{ once: false, amount: 0.8 }}
                        />
                        <h3 className="text-xl font-bold text-text-light">
                            {exp.role}
                        </h3>
                        <p className="font-medium text-accent mb-1">{exp.company} | {exp.duration}</p>
                        <ul className="space-y-2 mt-2">
                            {exp.description.map((point, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="text-accent mr-3 mt-1 text-lg leading-none">•</span>
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
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useScrollAnimation, sectionVariants, itemVariants as mainItemVariants } from '../../hooks/useScrollAnimation';
import { SKILL_CATEGORIES } from '../../constants';
import type { Skill, SkillCategory } from '../../types';

// Helper to create a URL-friendly slug from a string
const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 transition-colors duration-300"
    viewBox="0 0 20 20"
    fill="currentColor"
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.3 }}
  >
    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
  </motion.svg>
);

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <div className="relative group flex flex-col items-center justify-center p-4 bg-dark-bg rounded-lg shadow-md space-y-2 transition-transform duration-300 hover:-translate-y-1">
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 bg-gray-900 text-text-light text-xs rounded opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none z-10">
        {skill.name} - {skill.level}%
      </div>
      
      <Icon className="h-8 w-8 text-text-muted group-hover:text-accent transition-colors duration-300" />
      
      <p className="font-semibold text-text-light text-sm text-center truncate w-full">{skill.name}</p>
      
      <div className="w-full bg-primary rounded-full h-2.5">
          <motion.div
              className="bg-accent h-2.5 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 1, ease: "easeOut" }}
          />
      </div>
      <p className="text-xs text-text-muted">{skill.level}%</p>
    </div>
  );
};


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const skillCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Skills: React.FC = () => {
    const [ref, controls] = useScrollAnimation();
    const [expandedCategory, setExpandedCategory] = useState<string | null>(SKILL_CATEGORIES[0]?.name ?? null);

    const handleToggle = (categoryName: string) => {
        setExpandedCategory(prev => (prev === categoryName ? null : categoryName));
    };
    
    return (
        <motion.section
            id="skills"
            className="py-24"
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={controls}
        >
            <motion.h2 variants={mainItemVariants} className="text-3xl md:text-4xl font-bold text-text-light mb-12 text-center">
                My Skills
            </motion.h2>
            
            <motion.div variants={mainItemVariants} className="max-w-4xl mx-auto space-y-4">
                {SKILL_CATEGORIES.map((category: SkillCategory) => {
                    const isOpen = expandedCategory === category.name;
                    const categoryId = slugify(category.name);
                    
                    return (
                        <div key={category.name} className="bg-primary rounded-lg overflow-hidden shadow-lg">
                            <button
                                onClick={() => handleToggle(category.name)}
                                className="w-full flex justify-between items-center p-5 text-left text-lg font-bold text-text-light hover:bg-gray-700/50 transition-colors duration-300"
                                aria-expanded={isOpen}
                                aria-controls={`${categoryId}-content`}
                            >
                                <span id={categoryId} className="scroll-mt-24">{category.name}</span>
                                <ChevronIcon isOpen={isOpen} />
                            </button>
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        id={`${categoryId}-content`}
                                        key="content"
                                        initial="collapsed"
                                        animate="open"
                                        exit="collapsed"
                                        variants={{
                                            open: { opacity: 1, height: 'auto' },
                                            collapsed: { opacity: 0, height: 0 },
                                        }}
                                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <motion.div
                                          className="p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                                          variants={containerVariants}
                                          initial="hidden"
                                          animate="visible"
                                        >
                                            {category.skills.map(skill => (
                                                <motion.div key={skill.name} variants={skillCardVariants}>
                                                    <SkillCard skill={skill} />
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </motion.div>
        </motion.section>
    );
};

export default Skills;
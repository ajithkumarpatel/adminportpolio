import React from 'react';
// FIX: Import Variants and TargetAndTransition to fix type errors with animation properties.
import { motion, Variants, TargetAndTransition } from 'framer-motion';
import { USER_INFO } from '../../constants';

// FIX: Explicitly type variants with `Variants` to ensure correct type inference for transition properties.
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// FIX: Explicitly type variants with `Variants` to ensure correct type inference for transition properties like `ease`.
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

// FIX: Explicitly type with `TargetAndTransition` to ensure correct type inference for transition properties like `type`.
const buttonHover: TargetAndTransition = {
    y: -3,
    boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.1), 0 4px 6px -2px rgba(59, 130, 246, 0.05)",
    transition: { type: 'spring', stiffness: 300 }
}


const Hero: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('contact');

    if (targetElement) {
        const headerElement = document.querySelector('header');
        // Calculate offset to account for the sticky header
        const headerOffset = headerElement ? headerElement.offsetHeight + 24 : 90; // 24px padding
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center pt-24 pb-12">
      <motion.div 
        className="max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="font-mono text-lg text-accent mb-4">{USER_INFO.subtitle}</motion.h1>
        <motion.h2 variants={itemVariants} className="text-4xl md:text-7xl font-bold text-text-light mb-2">{USER_INFO.name}.</motion.h2>
        <motion.h3 variants={itemVariants} className="text-2xl md:text-4xl font-bold text-text-muted mb-6">{USER_INFO.title}</motion.h3>
        <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-text-normal mb-8">
          {USER_INFO.description}
        </motion.p>
        <motion.div variants={itemVariants} className="flex justify-center items-center flex-wrap gap-4">
          <motion.a 
              href={USER_INFO.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-accent text-accent rounded-md hover:bg-accent hover:text-white transition-colors duration-300 font-semibold"
              whileHover={buttonHover}
              whileTap={{ scale: 0.95 }}
          >
              View Resume
          </motion.a>
          <motion.a 
            href="#contact" 
            onClick={handleScrollToContact}
            className="px-6 py-3 bg-accent text-white rounded-md hover:bg-blue-500 transition-colors duration-300 font-semibold"
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

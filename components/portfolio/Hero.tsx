import React from 'react';
import { motion } from 'framer-motion';
import { USER_INFO } from '../../constants';

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
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center">
      <motion.div 
        className="max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-mono text-lg text-accent mb-4">{USER_INFO.subtitle}</h1>
        <h2 className="text-4xl md:text-7xl font-bold text-text-light mb-2">{USER_INFO.name}.</h2>
        <h3 className="text-2xl md:text-4xl font-bold text-text-muted mb-6">{USER_INFO.title}</h3>
        <p className="max-w-2xl mx-auto text-text-normal mb-8">
          {USER_INFO.description}
        </p>
        <div className="flex justify-center items-center flex-wrap gap-4">
          <a 
              href={USER_INFO.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-accent text-accent rounded hover:bg-accent hover:text-white transition-colors duration-300 font-semibold"
          >
              View Resume
          </a>
          <a 
            href="#contact" 
            onClick={handleScrollToContact}
            className="px-6 py-3 bg-accent text-white rounded hover:bg-blue-500 transition-colors duration-300 font-semibold"
          >
            Get In Touch
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
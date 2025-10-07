import React from 'react';
import Header from '../components/portfolio/Header';
import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import Skills from '../components/portfolio/Skills';
import Projects from '../components/portfolio/Projects';
import Experience from '../components/portfolio/Experience';
import Certifications from '../components/portfolio/Certifications';
import GeminiChat from '../components/portfolio/GeminiChat';
import Contact from '../components/portfolio/Contact';
import Footer from '../components/portfolio/Footer';
import ScrollToTop from '../components/portfolio/ScrollToTop';

const PortfolioPage: React.FC = () => {
  return (
    <div className="bg-dark-bg font-sans text-text-normal">
      <Header />
      <main className="container mx-auto px-6 md:px-12 lg:px-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <GeminiChat />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default PortfolioPage;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { USER_INFO } from '../../constants';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Chat', href: '#chat' },
  { name: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    useEffect(() => {
        const sections = navLinks.map(link => document.querySelector(link.href));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            { rootMargin: '-30% 0px -70% 0px' }
        );

        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerElement = document.querySelector('header');
            const headerOffset = headerElement ? headerElement.offsetHeight + 24 : 90; // 24px padding
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }

        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center">
                <a 
                    href="#hero"
                    onClick={(e) => handleNavClick(e, '#hero')}
                    className="text-2xl font-bold font-mono text-accent hover:opacity-80 transition-opacity cursor-pointer"
                >
                    {USER_INFO.name.split(' ').map(n => n[0]).join('')}.
                </a>
                
                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <li key={link.name} className="relative">
                            <a 
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={`transition-colors duration-300 ${activeSection === link.href ? 'text-accent' : 'text-text-normal hover:text-accent'}`}
                            >
                                {link.name}
                            </a>
                            {activeSection === link.href && (
                                <motion.div
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                                    layoutId="underline"
                                    initial={false}
                                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                />
                            )}
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden z-50 text-accent">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                     <motion.div 
                        className="fixed top-0 right-0 h-full w-3/4 bg-primary shadow-xl md:hidden"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
                    >
                        <ul className="flex flex-col items-center justify-center h-full space-y-8">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a 
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="text-2xl text-text-light hover:text-accent transition-colors duration-300 cursor-pointer"
                                    >
                                       {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
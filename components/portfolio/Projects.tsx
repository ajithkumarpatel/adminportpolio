import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, sectionVariants, itemVariants } from '../../hooks/useScrollAnimation';
import { PROJECTS } from '../../constants';
import { ExternalLinkIcon, GithubIcon } from '../Icons';

const ProjectCard: React.FC<{ project: typeof PROJECTS[0] }> = ({ project }) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="bg-primary rounded-lg shadow-lg overflow-hidden group transition-all duration-300 flex flex-col relative"
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
    >
      <div className="relative w-full h-52 overflow-hidden">
        <motion.img 
          src={project.image} 
          alt={project.title} 
          loading="lazy" 
          decoding="async"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute inset-0 bg-black/50 flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository" className="p-3 bg-dark-bg/70 rounded-full text-text-light hover:text-accent transition-colors duration-300">
              <GithubIcon className="h-7 w-7" />
          </a>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live project link" className="p-3 bg-dark-bg/70 rounded-full text-text-light hover:text-accent transition-colors duration-300">
              <ExternalLinkIcon className="h-7 w-7" />
          </a>
        </motion.div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-text-light group-hover:text-accent transition-colors duration-300">{project.title}</h3>
        <p className="text-text-normal my-4 text-sm flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-mono bg-gray-700 text-accent px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [ref, controls] = useScrollAnimation();

  return (
    <motion.section 
        id="projects" 
        className="py-24"
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={controls}
    >
      <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-text-light mb-12 text-center">
        My Projects
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, sectionVariants, itemVariants } from '../../hooks/useScrollAnimation';
import { PROJECTS } from '../../constants';
import { ExternalLinkIcon, GithubIcon } from '../Icons';

const ProjectCard: React.FC<{ project: typeof PROJECTS[0] }> = ({ project }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div 
      variants={itemVariants}
      className="bg-primary rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col"
    >
      <div className="relative w-full h-52 bg-gray-700">
        <img 
          src={project.image} 
          alt={project.title} 
          loading="lazy" 
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-text-light group-hover:text-accent transition-colors duration-300">{project.title}</h3>
        <p className="text-text-normal my-4 text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs font-mono bg-gray-700 text-accent px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex justify-end items-center gap-4 pt-2">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository" className="text-text-muted hover:text-accent transition-colors duration-300">
                <GithubIcon className="h-6 w-6" />
            </a>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline flex items-center gap-1 font-semibold">
                View Project <ExternalLinkIcon className="h-4 w-4" />
            </a>
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
      <motion.h2 variants={itemVariants} className="text-3xl font-bold text-text-light mb-12 text-center">
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
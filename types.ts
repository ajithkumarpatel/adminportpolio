// Fix: Import ReactElement to resolve JSX namespace issue.
import type { ReactElement, FC } from 'react';

interface IconProps {
    className?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: FC<IconProps>;
}

export interface SkillCategory {
    name: string;
    skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Certification {
    name: string;
    issuer: string;
    url: string;
}

export interface ChatMessage {
    sender: 'user' | 'gemini';
    text: string;
}

export interface ContactMessage {
    id: string;
    name: string;
    email: string;
    message: string;
    timestamp: {
        seconds: number;
        nanoseconds: number;
    };
}
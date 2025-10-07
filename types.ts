import React from 'react';

export interface ContactMessage {
    id: string;
    name: string;
    email: string;
    message: string;
    timestamp: {
        seconds: number;
        nanoseconds: number;
    };
    read?: boolean;
}

// FIX: Defined and exported missing interfaces to resolve type errors in other files.
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

export interface Skill {
    name: string;
    level: number;
    icon: React.FC<{ className?: string }>;
}

export interface SkillCategory {
    name: string;
    skills: Skill[];
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

import type { Project, Experience, SkillCategory, Certification } from './types';
import { 
    GithubIcon, 
    LinkedinIcon, 
    PythonIcon,
    JavaIcon,
    CppIcon,
    JavascriptIcon,
    TypescriptIcon,
    ReactIcon,
    Html5Icon,
    Css3Icon,
    DjangoIcon,
    FlaskIcon,
    SpringBootIcon,
    TomcatIcon,
    MySqlIcon,
    PostgreSqlIcon,
    MongoDBIcon,
    FigmaIcon,
    PenToolIcon,
    GitIcon,
    DockerIcon,
    AwsIcon,
    LinuxIcon,
    PipelineIcon,
    MavenIcon
} from './components/Icons';

export const USER_INFO = {
  name: 'Ajith Kumar',
  title: 'I love turning complex ideas in AI, DSA, & cybersecurity into real, working solutions.',
  subtitle: "Hi, I'm",
  description: "I’m a Computer Science student with a passion for Artificial Intelligence, Data Structures & Algorithms, and Cybersecurity. I love exploring how intelligent systems work, solving challenging problems, and continuously learning new technologies that help build secure and efficient digital solutions.",
  about: [
    "I am Ajith, a Computer Science and Engineering student at Parul University, specializing in Artificial Intelligence. Driven by curiosity and a passion for problem-solving, I enjoy building real-world solutions that harness the power of AI and modern web technologies.",
    "Currently, I focus on Python development, web applications (Django, Flask, MongoDB), and machine learning. I've earned certifications from IBM SkillsBuild (AI & ML) and Deloitte (Cybersecurity), and have completed hands-on projects in secure web development, user authentication, and data-driven applications.",
    "Outside the classroom, I actively explore generative AI, contribute to open-source communities, and constantly seek to expand my knowledge in data structures, algorithms, and cybersecurity. I'm eager to connect with fellow technology enthusiasts and build the future, together."
  ],
  profileImage: 'https://media.licdn.com/dms/image/v2/D4D03AQHj3hEaRIHgEw/profile-displayphoto-crop_800_800/B4DZhhtGdtGgAI-/0/1753985871664?e=1762992000&v=beta&t=UPSvwDVGkRAFHVdbGayYGw-gOUMGmfAOldwBw2vddbU',
  resumeLink: 'https://drive.google.com/file/d/1qDsAPS5gBQGwQkZRPSDALjyoiCnxwK1j/view?usp=sharing', // Replace with your Google Drive link
  email: 'ajith.kumar.dev@example.com',
  socials: [
    { name: 'GitHub', url: 'https://github.com', icon: GithubIcon },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: LinkedinIcon },
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        name: 'Technical Skills',
        skills: [
            { name: 'Python', level: 95, icon: PythonIcon },
            { name: 'Java', level: 85, icon: JavaIcon },
            { name: 'C/C++', level: 75, icon: CppIcon },
            { name: 'JavaScript', level: 85, icon: JavascriptIcon },
            { name: 'TypeScript', level: 80, icon: TypescriptIcon },
            { name: 'React.js', level: 85, icon: ReactIcon },
            { name: 'HTML5', level: 95, icon: Html5Icon },
            { name: 'CSS3', level: 90, icon: Css3Icon },
            { name: 'Django', level: 70, icon: DjangoIcon },
            { name: 'Flask', level: 75, icon: FlaskIcon },
            { name: 'Spring Boot', level: 65, icon: SpringBootIcon },
            { name: 'Tomcat', level: 60, icon: TomcatIcon },
            { name: 'MySQL', level: 85, icon: MySqlIcon },
            { name: 'PostgreSQL', level: 80, icon: PostgreSqlIcon },
            { name: 'MongoDB', level: 75, icon: MongoDBIcon },
        ],
    },
    {
        name: 'Design & Tools',
        skills: [
            { name: 'Figma', level: 70, icon: FigmaIcon },
            { name: 'UI/UX Design', level: 65, icon: PenToolIcon },
            { name: 'Git & GitHub', level: 90, icon: GitIcon },
        ],
    },
     {
        name: 'Cloud/DevOps Tools',
        skills: [
            { name: 'Docker', level: 70, icon: DockerIcon },
            { name: 'AWS (Basics)', level: 60, icon: AwsIcon },
            { name: 'Linux', level: 75, icon: LinuxIcon },
            { name: 'CI/CD', level: 65, icon: PipelineIcon },
            { name: 'Maven', level: 70, icon: MavenIcon },
        ],
    }
];

export const PROJECTS: Project[] = [
  {
    title: 'Portal Website',
    description: 'A comprehensive portal website with various features and functionalities.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
    tags: ['TypeScript', 'React', 'Node.js'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Student Tracker App',
    description: 'A web application for tracking student information and progress.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Secret Code Generator',
    description: 'A Python script to generate and manage secret codes.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
    tags: ['Python'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
   {
    title: 'Command Line To-Do List Manager',
    description: 'A comprehensive command-line todo list manager built with Python, featuring task creation, management, and filtering.',
    image: 'https://images.unsplash.com/photo-1583089822416-c5f159640985?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
    tags: ['Python'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
   {
    title: 'Shift Booking App',
    description: 'An application for managing and booking shifts, built with TypeScript.',
    image: 'https://images.unsplash.com/photo-1633613286848-e6f43bbaf5a2?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
    tags: ['TypeScript', 'React Native'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
   {
    title: 'Bank Management System',
    description: 'A system for managing bank accounts and transactions, developed in Python.',
    image: 'https://images.unsplash.com/photo-1579621970795-87f54f597ba7?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
    tags: ['Python', 'SQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: 'Python Programming Intern',
    company: 'VaultofCodes.in',
    duration: 'August 2025',
    description: [
      'Developed modular Python applications, contributing to scalable and maintainable solutions.',
      'Designed and integrated REST APIs to enable seamless data flow between front-end and back-end.',
      'Optimized code performance and applied debugging strategies to improve application efficiency.',
    ],
  },
  {
    role: 'Cybersecurity Analyst Intern (Virtual)',
    company: 'Deloitte Australia',
    duration: 'June 2025',
    description: [
      'Analyzed logs and detected anomalies, enhancing understanding of technical systems and debugging workflows.',
      'Applied structured problem-solving and collaborated with teams to propose effective security measures.',
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
    { name: 'Machine Learning I', issuer: 'Columbia+', url: 'https://example.com' },
    { name: 'Python Essentials', issuer: 'Cisco Networking Academy & Reliance Foundation', url: 'https://example.com' },
    { name: 'SQL (Basic & Intermediate)', issuer: 'HackerRank', url: 'https://example.com' },
    { name: 'Web Development & REST APIs', issuer: 'Microsoft', url: 'https://example.com' },
    { name: 'Python & MongoDB Fundamentals', issuer: 'SkillUp', url: 'https://example.com' },
    { name: 'Cybersecurity Fundamentals', issuer: 'Tech Mahindra Foundation', url: 'https://example.com' },
];
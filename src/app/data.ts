import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Github, Linkedin, Mail, CodeXml } from 'lucide-react';

const findImage = (id: string): ImagePlaceholder => {
    const image = PlaceHolderImages.find(img => img.id === id);
    if (!image) {
        // Fallback placeholder
        return {
            id: 'fallback',
            description: 'Fallback image',
            imageUrl: 'https://picsum.photos/seed/fallback/600/400',
            imageHint: 'placeholder'
        };
    }
    return image;
};

export const NAV_LINKS = [
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const heroData = {
    headline: "Hi, I’m Yash Tagunde 👋",
    subtitle: "CS Undergrad | DevOps & Cloud Enthusiast | AI & Edge Computing",
    resumeLink: "/resume.pdf",
    githubLink: "https://github.com/yashtaggy",
    image: findImage('hero-banner'),
};

export const projects = [
  {
    title: 'Volunteer Connect',
    description: 'Full-stack web app for NGO-volunteer engagement (Java, Spring Boot, PostgreSQL, Docker).',
    githubUrl: 'https://github.com/yashtaggy/volunteer-connect',
    image: findImage('volunteer-connect'),
  },
  {
    title: 'AI Resume Analyzer',
    description: 'AI-powered resume analysis tool (Flask, Docker, Jenkins CI/CD).',
    githubUrl: 'https://github.com/yashtaggy/AI-Resume-Analyser',
    image: findImage('ai-resume-analyzer'),
  },
  {
    title: 'Python Web Scraper',
    description: 'Python-based scraper extracting 1000+ records (Pandas, NumPy).',
    githubUrl: 'https://github.com/yashtaggy/Python-based-Web-Scraper',
    image: findImage('python-web-scraper'),
  },
];

export const skills = [
    {
        category: 'Programming',
        technologies: ['Python', 'Java', 'C++']
    },
    {
        category: 'Cloud/DevOps',
        technologies: ['AWS', 'Docker', 'Jenkins', 'IaC']
    },
    {
        category: 'Tools',
        technologies: ['Flask', 'React', 'PostgreSQL', 'Power BI', 'Spring Boot']
    }
];

export const certifications = [
    'AWS Academy Graduate (Cloud Development)',
    'DevOps on AWS (Coursera)',
    'DELF B2 (French Certification)'
];

export const experiences = [
    {
        role: 'Product Developer Intern',
        company: 'SETV Global',
        period: '2025–Present',
        description: 'Focus: DevOps, automation, scalable apps.'
    },
    {
        role: 'IoT Development Intern',
        company: 'eMaestro Technologies',
        period: '2023',
        description: ''
    }
];

export const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yashtaggy', icon: Github },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yash-t-a4330b1b5', icon: Linkedin },
    { name: 'Email', url: 'mailto:yashtaggy1603@gmail.com', icon: Mail },
    { name: 'Hackerrank', url: 'https://www.hackerrank.com/profile/yashtaggy1603', icon: CodeXml }
];

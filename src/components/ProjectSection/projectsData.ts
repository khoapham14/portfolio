import QuaySt_Desktop from '../../assets/QuaySt.png';
import SysdocCat_Desktop from '../../assets/SysdocCAT.png';
import Nothing_Desktop from '../../assets/Nothing_Old.png';
import CT_Desktop from '../../assets/CubeTimer.png';
import WeAreUs_Desktop from '../../assets/WeAreUs.png';
import Portfolio_Desktop from '../../assets/Portfolio.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
  projectType?: string;
}

export const projects: Project[] = [
  {
    id: 'quay-st',
    title: 'QuayStreet Website',
    projectType: 'Website',
    description: 'A new website for QuayStreet Asset Management, integrated with Contentful CMS.',
    technologies: ['NextJS', 'MaterialUI', 'Contentful', 'GraphQL', 'AWS'],
    imageUrl: QuaySt_Desktop,
    link: 'https://quaystreet.com/',
  },
  {
    id: 'sysdoc-cat',
    title: 'Sysdoc CAT',
    projectType: 'Web Application',
    description: 'A tool for employees and managers to assess competencies.',
    technologies: ['React', 'TypeScript', 'SharePoint', 'FluentUI', 'PowerBI'],
    imageUrl: SysdocCat_Desktop,
    link: 'https://www.sysdoc.com/our-products/competency-assessment-tool',
  },
  {
    id: 'nothing',
    title: 'Nothing',
    projectType: 'E-Commerce',
    description: 'A simple practice project for learning fullstack development.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    imageUrl: Nothing_Desktop,
    link: 'https://shielded-inlet-26000.herokuapp.com/',
  },
  {
    id: 'cube-timer',
    title: 'Cube Timer',
    projectType: 'Web Application',
    description: "A web application for timing Rubik's Cube solves.",
    technologies: ['React', 'Bootstrap', 'CSS'],
    imageUrl: CT_Desktop,
    link: 'https://khoapham14.github.io/simplict/',
  },
  {
    id: 'we-are-us',
    title: 'We Are Us',
    projectType: 'Website',
    description: 'An MVP website for a New Zealand based startup.',
    technologies: ['React', 'Strapi', 'Stripe', 'MySQL', 'Node.js'],
    imageUrl: WeAreUs_Desktop,
    link: 'https://github.com/LyleBranzuela/weareus-mvp-website',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    projectType: 'Website',
    description: 'My personal site showcasing my skills & projects.',
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind'],
    imageUrl: Portfolio_Desktop,
    link: 'https://github.com/khoapham14/portfolio/',
  },
];

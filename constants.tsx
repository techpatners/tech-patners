
import { 
  Code, Smartphone, Database, Cloud, 
  Layout, Settings, Server, ShieldCheck, 
  Globe, Cpu, BarChart, Users
} from 'lucide-react';
import { NavItem, ServiceItem, StatItem, TechCategory, ProcessStep, ProjectItem, ReviewItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Services', href: '/#services', hasDropdown: true },
  { label: 'Technology Focus', href: '/#tech', hasDropdown: true },
  { label: 'Contact us', href: '/contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'software',
    title: 'Software Engineering',
    description: 'We take your specific business requirements and build full-scale, bespoke software from the ground up. Our solutions are designed to fit your workflow perfectly, not the other way around.',
    icon: Code,
    features: [
      'Tailored requirement analysis',
      'Custom architecture design',
      'Full-stack build-to-order',
      'Legacy modernization',
      'Scalable enterprise solutions',
      'Seamless deployment'
    ]
  },
  {
    id: 'web',
    title: 'Web and Mobility',
    description: 'Custom web platforms and mobile apps built to deliver your unique value proposition to your customers on any device.',
    icon: Globe,
    features: [
      'Bespoke PWA development',
      'Custom iOS & Android builds',
      'Requirement-specific APIs',
      'E-commerce platforms',
      'High-performance interfaces'
    ]
  },
  {
    id: 'uiux',
    title: 'UI /UX design',
    description: 'Designing interfaces that align with your brand requirements and user behavior patterns.',
    icon: Layout,
    features: [
      'Requirement-based research',
      'Custom wireframing',
      'User-centric prototyping',
      'Brand alignment'
    ]
  },
  {
    id: 'staff',
    title: 'Staff Augmentation',
    description: 'Need specific skills? We provide the experts required to complete your internal projects on time.',
    icon: Users,
    features: [
      'Skill-specific talent',
      'Flexible team scaling',
      'Direct requirement matching'
    ]
  },
  {
    id: 'qa',
    title: 'Testing & QA',
    description: 'Rigorous validation to ensure the software we build meets 100% of your initial requirements.',
    icon: ShieldCheck,
    features: [
      'Requirement verification',
      'Automated bug detection',
      'Performance stress tests'
    ]
  },
  {
    id: 'aiml',
    title: 'AI/ML Services',
    description: 'Building custom intelligence models tailored to your data and specific business goals.',
    icon: Cpu,
    features: [
      'Custom ML models',
      'Specific NLP solutions',
      'Data-driven insights'
    ]
  }
];

export const STATS: StatItem[] = [
  { value: '2+', label: 'Client Catered Globally', icon: Globe },
  { value: '2+', label: 'Years Experience', icon: Users },
  { value: '5+', label: 'Custom Projects Delivered', icon: Code },
  { value: '5-10', label: 'Expert Builders', icon: Users },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: 'REQUIREMENT GATHERING',
    description: 'We start by understanding your vision and documentation.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800&h=1200'
  },
  {
    title: 'BUILD & ARCHITECT',
    description: 'Our engineers start the build using your specific tech stack.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=1200'
  },
  {
    title: 'VALIDATE & TEST',
    description: 'We ensure the software matches every requirement perfectly.',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800&h=1200'
  },
  {
    title: 'DELIVER & SCALE',
    description: 'Final hand-off and continuous support for growth.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800&h=1200'
  }
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    items: [
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Vue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
      { name: 'Next JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Nuxt JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
    ]
  },
  {
    id: 'backend',
    label: 'Backend',
    items: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg' },
      { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
    ]
  },
  {
    id: 'mobile',
    label: 'Mobile',
    items: [
      { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Swift', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
      { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    ]
  },
  {
    id: 'database',
    label: 'Database',
    items: [
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    ]
  },
  {
    id: 'cloud',
    label: 'DevOps and Cloud',
    items: [
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
      { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
      { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'eseva',
    title: 'Electronic Seva (E-Seva)',
    category: 'Freelance',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Built a portal for managing government-related document services. Implemented role-based login (admin/user), authentication, and an admin dashboard to handle requests, update status, and verify documents. Used SQL for structured storage and Django admin for back-office operations.',
    href: 'https://eseva.pythonanywhere.com/'
  },
  {
    id: 'wroknai',
    title: 'Flow CRM Dashboard',
    category: 'Business Intelligence',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'Custom CRM solution with real-time analytics, lead tracking, and automated marketing integrations for a leading logistics firm.',
    href: '/case-studies/eseva'
  },
  {
    id: 'worknai',
    title: 'WorknAI Backend Platform (MERN)',
    category: 'SaaS Platform',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800&h=600',
    description: 'A comprehensive backend infrastructure for an AI-driven workforce management platform, focusing on scalability and robust data handling.',
    href: 'https://worknai.com/'
  },
  {
    id: 'goairclass',
    title: 'Bus Ticket Booking System',
    category: 'Travel Business',
    image: 'https://media.istockphoto.com/id/2245520423/photo/green-online-booking-keyboard-button-for-digital-reservation-and-scheduling-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=HKmZfMwi3KCUjC3n6hLnEC2Gh3CXrm-27Aun_9t-xEA=',
    description: 'Worked on a production/live project that consumed third-party live APIs to deliver real-time responses and dynamic content. Implemented frontend integrations in which people can book bus tickets and track live activity.',
    href: 'https://goairclass.com'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 1,
    name: 'Ganesh Singh ',
    role: 'Founder & MD',
    company: 'E-Seva Services',
    content: 'The E-Seva portal developed by TechPatners has revolutionized how we handle document requests. The Django-powered admin panel makes managing thousands of requests effortless and very reliable.',
    rating: 5,
    image: 'data:image/png;base64,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'
  },
  {
    id: 2,
    name: 'Sahil Patel',
    role: 'Dirctor',
    company: 'WorknAI',
    content: 'TechPatners delivered a high-performance MERN backend for our AI workforce platform. Their ability to architect scalable systems for concurrent data processing is truly impressive.',
    rating: 5,
    image: 'data:image/png;base64,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'
  },
  {
    id: 3,
    name: 'saleem patel',
    role: 'Manager',
    company: 'GoAirClass',
    content: 'Integrating real-time bus booking APIs was a complex task, but the team at TechPatners made it look easy. Our user satisfaction has spiked since the new portal went live.',
    rating: 5,
    image: 'data:image/png;base64,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'
  },
  {
    id: 4,
    name: 'Sourabh',
    role: 'Operations Head',
    company: 'WorknAI CRM',
    content: 'The BI dashboard they built for our internal CRM has transformed our data into actual insights. We can now track lead conversions in real-time with 100% accuracy.',
    rating: 5,
    image: 'data:image/png;base64,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'
  }
];

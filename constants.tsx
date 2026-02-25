import { Experience, Project, Service, Skill } from './types';

/* 
  ========================================
  IMAGE SETUP NOTE
  ========================================
  I have set these images to use free, high-quality placeholders from Unsplash 
  so your site looks good immediately.
  
  To use your own images later:
  1. Upload your images to a cloud host (like Imgur, Cloudinary) and paste the URL here.
  OR
  2. If you can create a 'public' folder later, put images there and use paths like "/my-image.jpg"
*/

export const USER_INFO = {
  name: "Augustine Boakye Asante",
  role: "Web Developer & UI/UX Designer",
  description: "I am a passionate Web Developer, UI/UX Designer and Graphic Designer with extensive building world - class web applications. My work is motivated by a commitment to leveraging data and intelligent technologies to address real-world challenges.",
  email: "augustineboakyeasante@gmail.com",
  phone: "+233 598396607",
  location: "Accra, Ghana",
  // Professional profile photo
  avatar: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-25%20at%2013.11.04-EX53t3QvXRxiOHX6M9CClNP85hfZZR.jpeg"
};

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Building responsive, data-driven systems and websites using React, Python, and modern web technologies.',
    icon: 'Monitor',
    color: 'border-sky-600',
  },
  {
    id: '2',
    title: 'Data Science & AI',
    description: 'Leveraging data and intelligent technologies for predictive analytics and ethical AI solutions.',
    icon: 'Database',
    color: 'border-violet-600',
  },
  {
    id: '3',
    title: 'Graphic Design',
    description: 'Creating visual content, posters, and branding materials using Adobe Photoshop and Illustrator.',
    icon: 'Layers',
    color: 'border-rose-500',
  },
  {
    id: '4',
    title: 'IT Support',
    description: 'Providing technical support, system administration, and network optimization.',
    icon: 'Terminal',
    color: 'border-teal-500',
  },
];

export const SKILLS: Skill[] = [
  { name: 'React.js', percentage: 90, color: 'bg-sky-500' },
  { name: 'JavaScript', percentage: 90, color: 'bg-yellow-500' },
  { name: 'Python', percentage: 85, color: 'bg-green-500' },
  { name: 'HTML & CSS', percentage: 95, color: 'bg-rose-500' },
  { name: 'SQL / MySQL', percentage: 80, color: 'bg-violet-500' },
  { name: 'WordPress', percentage: 85, color: 'bg-blue-400' },
  { name: 'Graphic Design', percentage: 85, color: 'bg-indigo-500' },
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'Systems Administrator & Software Developer',
    company: 'Ghana Free Zones Authority',
    period: 'Nov 2025 - Present',
    description: 'Providing technical support for ICT infrastructure, maintaining internal systems, and contributing to the development and optimization of internal software tools.',
    color: 'bg-sky-600'
  },
  {
    id: '2',
    role: 'IT Intern',
    company: 'IPMC Ghana',
    period: 'Aug 2024 - Oct 2024',
    description: 'Gained cross-functional IT expertise, contributed to network optimization, server setup, and resolved hardware/software issues.',
    color: 'bg-teal-500'
  },
  {
    id: '3',
    role: 'Intern (Remote)',
    company: 'Etelmo Trust (Dubai)',
    period: 'May 2023 - Aug 2024',
    description: 'Collaborated on UX/UI designs, built web functionalities in Python/JavaScript, and developed data integration workflows.',
    color: 'bg-violet-600'
  },
  {
    id: '4',
    role: 'Intern (Onsite)',
    company: 'Techpro Global Group',
    period: 'July 2023 - Oct 2023',
    description: 'Analysed surveillance data for security trends and created digital marketing visuals with Photoshop and Illustrator.',
    color: 'bg-rose-500'
  }
];

export const PROJECTS: Project[] = [
  // SOFTWARE PROJECTS
  {
    id: '1',
    title: 'Transcript Hub',
    category: 'Software',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/476e7b38-e46c-4e59-bcac-ab8570994226-Msoypi4mBngj4si9KCXUwWK59qA0rW.png'
  },
  {
    id: '2',
    title: 'Hostel Club',
    category: 'Software',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dd27fc1e-3664-48c1-8d01-34e4ec0710fb-qpRkyUb6fAHg5JrLryiFvoAgxkiVYs.png'
  },

  // GRAPHIC DESIGN PROJECTS
  {
    id: '3',
    title: 'Stationery & Craft',
    category: 'Graphic Design',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-12%20at%2011.55.43%20%282%29-WH6si5FH5HWKQUBewf9Q5c0yqO0DbJ.jpeg'
  },
  {
    id: '4',
    title: 'Vessel Designz Branding',
    category: 'Graphic Design',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-12%20at%2011.55.44%20%281%29-GfaIz7pU9Co03V77tjP8PWehsoq0C0.jpeg'
  },
  {
    id: '5',
    title: 'Grand Enstoolment Event',
    category: 'Graphic Design',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled-2.jpg%20%281%29-x7ib7P1Ii0Yqv9zGFkcvk9M9LK0Cpq.jpeg'
  },
  {
    id: '6',
    title: 'SET Freshers Orientation',
    category: 'Graphic Design',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-12%20at%2011.44.51%20%288%29-LNGwayaUXOu79vIt08YdZqdqmnc6mI.jpeg'
  },
  {
    id: '7',
    title: 'TechPro Retail Service',
    category: 'Graphic Design',
    imageUrl: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-02-12%20at%2011.44.51%20%281%29-AQngm0dm4Pm1105ZpuKV2QsEbJmRCb.jpeg'
  },
];

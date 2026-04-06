import {
  Layers,
  Server,
  Database,
  Cloud,
  Terminal,
  Leaf,
  Settings,
  Code2,
  PhoneCall
} from "lucide-react";

export const PORTFOLIO_DATA = {
  hero: {
    status: "Available for new projects",
    titlePrimary: "I build",
    titleHighlight: "scalable",
    titleSecondary: ", modern web applications.",
    description:
      "Full Stack Developer specializing in the MERN ecosystem. Crafting high-performance digital experiences with precision and clean code.",
    primaryActionText: "View Projects",
    secondaryActionText: "Contact Me",
  },
  stack: {
    title: "The Tech Stack",
    description: "My weapon of choice for building robust, secure, and lightning-fast web applications.",
    badge: "01 / CAPABILITIES",
    categories: [
      {
        id: "frontend",
        title: "Frontend",
        skills: "React js, Next js, Tailwind CSS, JavaScript (ES6+), HTML5, CSS3",
        icon: Layers,
      },
      {
        id: "backend",
        title: "Backend",
        skills: "Node js, Express js (Basic), REST API Development",
        icon: Server,
      },
      {
        id: "databases",
        title: "Databases",
        skills: "MongoDB, Mongoose, Firebase",
        icon: Database,
      },
      {
        id: "devops",
        title: "Tools",
        skills: "Git, GitHub, Postman, VS Code",
        icon: Cloud,
      },
    ],
  },
  projects: {
    title: "Featured Projects",
    description: "A selection of recent works, focusing on UX/UI and performance.",
    badge: "02 / PORTFOLIO",
    items: [
      {
        id: "pulxenet",
        title: "PulxeNet – IT Solutions Agency Website Design",
        description: "A modern, responsive frontend application built with React for the IT solutions company, PulxeNet. The project focuses on delivering a clean, corporate UI with reusable components, dynamic floating layout elements, and an optimized user experience",
        image: "/images/projects/project2.png",
        liveDemoUrl: "https://www.pulxenet.com/",
        githubUrl: "#",
      },
      {
        id: "isloobalwantransport",
        title: "Isloob Alwan Transport – Modern Transport Service Website",
        description: "Developed a modern, responsive, and SEO-friendly website for a UAE-based transport company using Next.js, Tailwind CSS, and Swiper. The platform showcases fleet services and enables users to easily explore offerings and book transport online, enhancing the company’s digital presence and credibility.",
        image: "/images/projects/project1.png",
        liveDemoUrl: "https://isloobalwantransport.com/",
        githubUrl: "#",
      },
      {
        id: "edusity",
        title: "Edusity – Modern Educational Platform",
        description: "Built a responsive single-page educational website with React and CSS, featuring a clean UI and smooth navigation to enhance the learning experience.",
        image: "/images/projects/project3.png",
        liveDemoUrl: "https://edusitycloneex.netlify.app/",
        githubUrl: "https://github.com/theGotCoder/Edusity-Clone-",
      },
      {
        id: "realestate",
        title: "Real Estate Landing Page – Modern Property Showcase",
        description: "Developed a single-page responsive real estate website using React, Tailwind CSS, Framer Motion, and Swiper. The platform features smooth animations, intuitive navigation, and a clean UI, allowing users to explore properties easily and engage with a modern browsing experience.",
        image: "/images/projects/project4.png",
        liveDemoUrl: "https://realestatecodeex.netlify.app/",
        githubUrl: "https://github.com/theGotCoder/RealEstate",
      },
    ],
  },
  experience: {
    title: "Experience",
    description: "The journey from a junior tinkerer to a full-stack engineer.",
    items: [
      {
        id: "senior-dev",
        role: "Full Stack Developer | Team Lead | Apprenticeship",
        company: "PulxeNet (Pvt) Limited",
        period: "October 2025 - Present",
        description: "MERN Stack Developer specializing in building modern, scalable web applications using MongoDB, Express.js, React, and Node.js. Passionate about creating responsive user interfaces and efficient backend systems, with a focus on performance, clean code, and real-world problem solving.",
      },
      {
        id: "frontend-engineer",
        role: "Front-End Developer | Intern",
        company: "Brainex World Pvt. Ltd",
        period: "July 2025 - September 2025",
        description: "As a React.js Frontend Developer at Brain Ex, you will design and build high-quality, scalable, and responsive user interfaces. You’ll collaborate with cross-functional teams to translate ideas into seamless web experiences, optimize performance, and ensure best practices in modern frontend development. This role requires strong expertise in React.js, component-based architecture, state management, and a keen eye for user experience.",
      },
      
    ],
  },
  contact: {
    title: "Let's Connect",
    description: "Have a project in mind or just want to chat about tech? Feel free to reach out. I'm always open to new opportunities and collaborations.",
    email: "muhammadanax09@gmail.com",
    PhoneCall: "+92 3110560190",
    socials: {
      github: "https://github.com/theGotCoder",
      linkedin: "https://www.linkedin.com/in/muhammadanax09/",
      twitter: "https://x.com/muhammadanax09",
      email: "mailto:muhammadanax09@gmail.com",
    },
  },
};

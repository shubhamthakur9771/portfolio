import {
  mobile,
  backend,
  creator,
  web,
  react,
  springboot,
  javascript,
  typescript,
  html,
  css,
  java,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  ems,
  resume,
  pos,
  jobit,
  tripguide,
  threejs,
} from "../assets";



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Java Developer",
    icon: java,
  },
  {
    title: "Spring Boot Developer",
    icon: springboot,
  },
  {
    title: "React Developer",
     icon: react,
    
  },
  {
    title: "Full-Stack Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
   {
    name: "SpringBoot",
    icon: springboot,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
 
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];


const experiences = [
  {
    title: "Junior Java Full-Stack Developer",
    company_name: "Point of Sale (POS) Management System",
    icon: springboot,
    iconBg: "#383E56",
    date: "Dec 2025 - Present",
    project_link: "https://pos-system-saas.vercel.app/",
    points: [
      "Developed a full-stack POS system using Java, Spring Boot, React.js, and MySQL following MVC architecture with DTO mapping.",
      "Built secure RESTful APIs using Spring Boot, JPA/Hibernate for managing orders, users, inventory, and refunds.",
      "Implemented role-based access control (Admin, Manager, Cashier) using JWT authentication and authorization.",
      "Designed responsive and user-friendly dashboards using React.js and Tailwind CSS.",
      "Developed a scalable multi-store and multi-branch architecture suitable for SaaS deployment.",
      "Deployed the application to production and handled end-to-end frontend–backend integration."
    ],
  },
  {
    title: "React Developer",
    company_name: "Rezume – Resume Builder",
    icon: react,
    iconBg: "#1C1C1C",
    date: "Dec 2024 - March 2025",
    project_link: "https://create-rezume.vercel.app/",
    points: [
      "Designed and developed a resume builder web application using React.js and Tailwind CSS.",
      "Implemented Context API for global state management and seamless user experience.",
      "Integrated Gemini API to analyze and evaluate resume strength dynamically.",
      "Added PDF generation and local storage persistence for saving user resumes.",
      "Application is used by 6000+ users, significantly reducing resume creation time."
    ],
  },
  {
    title: "Java Backend Developer",
    company_name: "Employee Management System (JDBC)",
    icon: java,
    iconBg: "#E6DEDD",
    date: "May 2024 - June 2024",
    project_link: "https://github.com/shubhamthakur9771",
    points: [
      "Developed a backend employee management system using Core Java, JDBC, and MySQL.",
      "Implemented complete CRUD operations using PreparedStatements following JDBC best practices.",
      "Designed a structured 7-step JDBC workflow with proper resource and connection handling.",
      "Implemented search, filter, and transaction-based bulk operations.",
      "Built a menu-driven command-line interface for efficient backend management."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "POS Management System (SaaS)",
    description:
      "Built a scalable multi store POS system using Spring Boot React and MySQL. Implemented secure REST APIs with JWT based roles inventory billing management. Designed responsive dashboards enabling real time operations analytics reporting modules. Deployed SaaS application supporting multiple branches production ready business workflows.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring Boot",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
       {
        name: "MySQL",
        color: "pink-text-gradient",
      },
       {
        name: "JWT",
        color: "pink-text-gradient",
      }
    ],
    image: pos,
    source_code_link: "https://pos-system-saas.vercel.app/",
  },
  {
    name: "Rezume – AI Powered Resume Builder",
    description:
      "Developed a modern resume builder application using React Tailwind and Context API. Enabled users create preview and export resumes with persistent local storage. Integrated AI based resume analysis improving quality scores recommendations accuracy. Scaled platform to thousands users delivering fast reliable experience consistently.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Context API",
        color: "pink-text-gradient",
      },
    ],
    image: resume,
    source_code_link: "https://create-rezume.vercel.app/",
  },
  {
    name: "Employee Management System (JDBC)",
    description:
      "Built a Java based employee management system using JDBC and MySQL backend. Implemented complete CRUD operations with prepared statements transaction safety handling. Applied structured JDBC workflow ensuring proper resource management error handling consistency. Strengthened core Java database concepts through real world backend implementation.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JDBC",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: ems,
    source_code_link: "https://github.com/shubhamthakur9771",
  },
];

export { services, technologies, experiences, testimonials, projects };

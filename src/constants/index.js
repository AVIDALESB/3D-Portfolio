import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  r2m,
  loyify,
  ayuntamiento,
  gobierno,
  jobit,
  convencionesberkley,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Node JS",
    icon: nodejs,
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
    title: "Data-driven Stategic Communication",
    company_name: "R2M Solution Spain, Madrid España",
    icon: r2m,
    iconBg: "#E6DEDD",
    date: "January 2025 - Current",
    points: [
      "Manages digital strategy execution through social media management, web design, and audiovisual content creation.",
      "Skilled in data-driven decision-making using social media analytics and predictive modeling code.",
      "Has proven success in enhancing online presence, creating compelling multimedia content, and implementing technical solutions that boost digital performance and user engagement across platforms.",
      "Participating in design reviews and providing constructive feedback to other designers.",
    ],
  },
  {
    title: "CO-Founder and Director",
    company_name: "Loyify",
    icon: loyify,
    iconBg: "#E6DEDD",
    date: "March 2024 - Current",
    points: [
      "CRM:Expertise in customer relationship management, tracking interactions, and data analysis.",
      "Creating responsive websites with focus on user experience and functionality.",
      "Audiovisual content Strategy & Development.",
      "Design and execution of targeted email campaigns with performance tracking.",
      "Participating in code reviews and providing constructive feedback to other developerImplementation of e-commerce strategies and conversion optimization.",
    ],
  },
  {
    title: "Technological Innovation and Digital Strategiies Director",
    company_name: "Ayuntamiento de Culiacán Sinaloa, México",
    icon: ayuntamiento,
    iconBg: "#E6DEDD",
    date: "June 2022 - Marh 2024",
    points: [
      "System maintenance, development, and technical support for government digital services.",
      "Design and implementation of solutions to enhance government service delivery.",
      "Project management of technological initiatives and platform updates.",
      "Tecnnological support and updates for digital platforms.",
    ],
  },
  {
    title: "UX Technology User Experience Director",
    company_name: "Government of Sinaloa State",
    icon: gobierno,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - June 2022",
    points: [
      "Audiovisual Content Strategy & Development: Lead the creation, optimization, and management of engaging multimedia content.",
      "Digital Experience Enhancement: Strategically design and implement user-centric web solutions, focusing on accessibility, navigation, and overall user satisfaction.",
      "Technical Process Optimization: Develop and deploy innovative technological solutions to streamline operations, enhance efficiency, and elevate the quality of citizen services through digital transformation.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Andrea proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Andrea does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Andrea optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Convenciones Berkley",
    description:
      "Web-based platform that provides Berkley Insurance employees with access to exclusive travel incentives, including trip itineraries, restaurant recommendations, excursion tips, and a private blog for sharing travel photos and experiences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: convencionesberkley,
    source_code_link: "https://convencionesberkley.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

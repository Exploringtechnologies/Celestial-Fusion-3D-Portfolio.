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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  shreya,
  stack,
  hey,
  mithya,
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "C++ Programmmer",
    icon: backend,
  },
  {
    title: "Video Editor",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Software Engineering",
    company_name: "Stacksmith Consultancy",
    icon: stack,
    iconBg: "#172D44",
    date: "Nov 2021 - Jan 2022",
    points: [
      "Developed a full-fledged App from scratch, contributing approximately 2800 lines of code.",
      "Implemented Vehicle Tracking System using Google API, targeting an audience of 50,000+ users initially.",
      "Optimized app performance by adding lines of code for smoother load, enhancing user experience",
      "Collaborated with a cross-functional team to integrate real-time notifications and user-friendly interfaces, ensuring a seamless interaction for users.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Mithya Labs",
    icon: mithya,
    iconBg: "#000000",
    date: "Sep 2021 - Oct 2022",
    points: [
      "Built engaging screens and corresponding websites for a Fitness.",
      "Application, focusing on user retention.",
      "Added Video Playback support for improved user experience.",
      "Collaborated with the team to improve application functionality, fostering innovation and continuous improvement in a dynamic development environment.",
    ],
  },
  {
    title: "Android Developer",
    company_name: "Hey!Foodie",
    icon: hey,
    iconBg: "#FFFFFF",
    date: "Jul 2020 - Sep 2020",
    points: [
      "Pioneered UI design and actively participated in UI/UX discussions for Hey! Foodie, a food-tech platform.",
      "Engineered an application for user actions and session storage using shared preferences.",
      "Implemented an auto-stack removal feature after a designated idle time.",
      "Conducted thorough testing and debugging to ensure optimal performance and a bug-free user experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Aman's technical brilliance and exceptional management skills make him an invaluable teammate.",
    name: "Shreya Tiwary",
    designation: "Consultant @ Deloitte USI",
    company: "Acme Co",
    image: shreya,
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
    name: "Celestial Fusion 3D Portfolio",
    description:
      "Unveiling Celestial Marvels: Lifelike 3D with Three.js & React.js, Effortless Connections via EmailJS, and Celestial Style by Tailwind CSS. Embark on a Cosmic Journey!. 🚀🌌✨",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "threeJs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "emailJs",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
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
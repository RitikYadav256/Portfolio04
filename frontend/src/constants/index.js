import {
  mobile,
  backend,
  creator,
  LPU,
  VSD,
  web,
  javascript,
  typescript,
  html,
  cipher,
  tablue,
  cloud,
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
  Game,
  Ecommerse,
  HospCare,
  Student,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  threejs,
  leetcode,
  Codeforce,
  Hackerrank,
  pro_pic
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
    title: "Data --Analyst",
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
    name: "Express",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "OldSchoolGame",
    company_name: "Gaming plateform",
    icon: starbucks,
    proj: Game,
    iconBg: "#383E56",
    date: "March 2025 - Feb 2025",
    points: [
      "Developed and maintained an online gaming platform using React.js, Express.js, Node.js, and MongoDB.",
      "Implemented React components like Hooks, Router, and DOM for seamless navigation and interactivity.",
      "Utilized Express.js and Node.js for server-side operations, including middleware, RESTful APIs, and routing.",
      "Leveraged MongoDB Atlas for data storage to ensure seamless data flow and high performance.",
      "Ensured responsive design and cross-browser compatibility using Bootstrap and JavaScript."
    ],
  },
  {
    title: "HospaCare",
    company_name: "Online Appointment Management ",
    icon: tesla,
    proj: HospCare,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Dec 2024",
    points: [
      "Developed an online appointment system, reducing waiting time by 90% through efficient scheduling.",
      "Built a modern and user-friendly UI using React.js, Node.js, and MongoDB.",
      "Implemented React hooks like useState, useContext, and useReducer to manage application state effectively.",
      "Utilized APIs for seamless data management, leveraging GET and POST methods for server"
    ],
  },
  {
    title: "E_Commerce Plateform",
    company_name: "Shopify",
    icon: shopify,
    proj: Ecommerse,
    iconBg: "#383E56",
    date: "July 2024 - August 2024",
    points: [
      "Developed an online shopping platform, enhancing user experience with a seamless purchasing process.",
      "Built a responsive and interactive UI using React.js, Node.js, and MongoDB.",
      "Implemented React hooks like useState, useContext, and useReducer for efficient state management.",
      "Utilized APIs for secure and efficient product management, leveraging GET and POST methods for server operations."
    ],
  },
  {
    title: "Student Management System",
    company_name: "Entry Handling",
    icon: meta,
    proj: Student,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Designed an intuitive user interface for seamless student data entry, modification, and retrieval.",
      "Integrated error handling mechanisms to prevent data corruption and ensure system stability.",
      "Optimized search and sorting algorithms to improve data access efficiency.",
      "Ensured scalability by structuring the system to accommodate growing student records.",
      "Conducted thorough testing and debugging to enhance system reliability and performance."
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    source_code_link: "https://github.com/",
  },
];

const coding = [
  {
    logo: leetcode,
    _id: "ritikyadav123456",
    prof: pro_pic,
    link: "https://leetcode.com/u/ritikyadav123456/",
    total: "118",
    easy:46,
    medium:61,
    hard:11
  },
  {
    logo: Hackerrank,
    _id: "hritikyadav256",
    prof: pro_pic,
    link: "https://www.hackerrank.com/profile/hritikyadav256",
    total: "88",
    easy:"20",
    medium:"45",
    hard:"23"
  },
  {
    logo: Codeforce,
    _id: "hritikyadav256",
    prof: pro_pic,
    link: "https://codeforces.com/profile/hritikyadav256",
    total: "0",
    easy:"0",
    medium:"0",
    hard:"0"
  }
];
const certification = [
  {
    name: "CipherSchools",
    certificate:cipher
  },
  {
    name: "Tablue",
    certificate:tablue
  },
  {
    name: "Cloud Computing",
    certificate:cloud
  }
]
export const education = [
  {
    institution: "Lovely Professional University",
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    duration: "2022 - Present",
    cgpa: "6.89",
    location: LPU
  },
  {
    institution: "V S D International School",
    degree: "Senior Secondary (Class XII)",
    field: "Science (PCM)",
    duration: "2019 - 2021",
    percentage: "60.05%",
    location: VSD  // replace with actual logo if available
  },
  {
    institution: "Navneet International School",
    degree: "Secondary (Class X)",
    field: "Science",
    duration: "2017 - 2019",
    percentage: "68%",
    location: "Azamgarh, Uttar Pradesh",
    logo: "https://example.com/navneet-logo.png"  // replace with actual logo if available
  }
];

export { services, technologies, experiences, testimonials, projects,coding,certification };
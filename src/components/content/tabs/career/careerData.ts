import { AssuredWorkload, CardMembership, School } from "@mui/icons-material";
import {
  careerButtonsDataType,
  CareerData,
  SkillDataType,
} from "../../../../types/career";

export const careerButtonsData: careerButtonsDataType[] = [
  { id: "experience", text: "Work Experience", icon: AssuredWorkload },
  { id: "education", text: "Education", icon: School },
  { id: "certifications", text: "Certifications", icon: CardMembership },
];

export const data: CareerData = {
  education: [
    {
      id: 0,
      title: "University of Oulu",
      year: "2023 - 2025",
      description:
        "Master’s in Information Systems & Software Engineering covering software development, UI/UX principles, software design, and digital ethics. Delivered real-world projects for companies like Siili Oulu Oy, emphasizing collaboration and industry-relevant solutions.",
    },
    {
      id: 1,
      title: "Meta Front-end Development Course",
      year: "2024 - 2025",
      description:
        "Comprehensive front-end specialization covering HTML, CSS, JavaScript, React, version control, and UI design principles. Focused on building responsive, accessible, and production-ready web applications.",
    },
    {
      id: 2,
      title: "Shanghai Dianji University",
      year: "2018 - 2022",
      description:
        "Bachelor's degree focused on the fundamentals of digitalization, software development, and IT Management. Served as a teaching assistant and contributed to research and development for the university’s library website.",
    },
  ],
  experience: [
    {
      id: 0,
      title: "Freelance Front-End Developer",
      year: "2025 – Present",
      description:
        "Delivering responsive websites for service-based businesses using React, TypeScript, and modern UI techniques. Focused on clean UX, performance, and client satisfaction.",
    },
    {
      id: 1,
      title: "Co-Founder & Technical Lead",
      year: "2020 – 2023",
      description:
        "Built and maintained e-commerce platform using Ecwid for a startup. Led tech operations, managed logistics, and provided post-sale support for smart security devices exported to Zimbabwe.",
    },
    {
      id: 2,
      title: "Web Development Intern",
      year: "2021",
      description:
        "Assisted in developing a Shanghai Dianji's university library portal using HTML, CSS, and JS. Gained hands-on experience building UIs and contributing to production code.",
    },
  ],
  certifications: [
    {
      id: 0,
      title: "React Basics - Meta",
      year: "2024",
      description:
        "Learned to build scalable, maintainable React apps using reusable components, props, dynamic views, and forms for interactive user experiences.",
      image: "./certificates/react.png",
      url: "https://coursera.org/share/cec3fc5448020a9d3bf7ad6885e820c5",
    },
    {
      id: 1,
      title: "Meta - Programming in Javascript",
      year: "2024",
      description:
        "Mastered writing clean JavaScript by creating and manipulating objects and arrays, plus ensuring code quality with unit tests using Jest.",
      image: "./certificates/javascript.png",
      url: "https://coursera.org/share/5728112e049d4049b7fbbdf56ff081c8",
    },
    {
      id: 2,
      title: "Micro1 - Front-end",
      year: "2024",
      description:
        "Earned Micro1’s Front-End Web Developer certification by successfully passing their AI-driven interview process.",
      image: "./certificates/micro1.jpg",
      url: "https://www.talent.micro1.ai/dashboard",
    },
    {
      id: 3,
      title: "University of Alberta - Agile Practices",
      year: "2024",
      description:
        "Mastered software process models and Agile fundamentals to effectively manage and adapt software development projects.",
      image: "./certificates/agile.png",
      url: "https://coursera.org/share/38fe7addeffad263c0283cd398a130af",
    },
    {
      id: 4,
      title: "Google - Project Management ",
      year: "2023",
      description:
        "Grasp project initiation’s importance, create project charters, perform stakeholder analysis with RACI charts, and evaluate project management tools to fit needs.",
      image: "./certificates/project_management.png",
      url: "https://coursera.org/share/f4fca5e79d0616a87a3cae72cbe44290",
    },
  ],
};

export const skills: SkillDataType = {
  technical: [
    { name: "JavaScript", icon: "./icons/js.svg" },
    { name: "TypeScript", icon: "./icons/ts.svg" },
    { name: "HTML5", icon: "./icons/html.svg" },
    { name: "CSS3", icon: "./icons/css.svg" },
    { name: "Tailwind CSS", icon: "./icons/tailwind.svg" },
    { name: "React", icon: "./icons/react.svg" },
    { name: "Redux", icon: "./icons/redux.svg" },
    { name: "Git", icon: "./icons/git.svg" },
    { name: "GitHub", icon: "./icons/github.svg" },
    { name: "GitLab", icon: "./icons/gitlab.svg" },
    { name: "Vite", icon: "./icons/vite.svg" },
    { name: "Framer Motion", icon: "./icons/framer-motion.svg" },
    { name: "Figma", icon: "./icons/figma.svg" },
    { name: "Canva", icon: "./icons/canva.svg" },
    { name: "MUI", icon: "./icons/mui.svg" },
  ],
  soft: [
    { name: "Problem-solving" },
    { name: "Communication" },
    { name: "Team Player" },
    { name: "Continuous Learning" },
    { name: "Adaptability" },
    { name: "Attention to Detail" },
    { name: "Leadership" },
  ],
};

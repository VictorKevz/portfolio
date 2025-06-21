import { PortfolioCategory, PortfolioItem } from "../../../../types/portfolio";

export const portfolioTabs: PortfolioCategory[] = [
  "all",
  "clients",
  "personal",
];

export const portfolioData: PortfolioItem[] = [
  {
    id: 0,
    image: "./projects/siili2.png",
    title: "Parking Pools",
    description:
      "Frontend feature development and UI enhancements in a 3-member team, improving usability, responsiveness, and code quality for a parking app during a client-engaged school project. ",
    category: "clients",
    liveUrl: "https://www.siili.com/",
    githubUrl: "",
    tools: [
      "./icons/react.svg",
      "./icons/tailwind.svg",
      "./icons/ts.svg",
      "./icons/gitlab.svg",
    ],
  },
  {
    id: 1,
    image: "./projects/ip-address-tracker1.png",
    title: "IP Adress Tracker",
    description:
      "Redesigned an interactive IP tracker featuring live search, animated UI, error modals, dark/light themes, and localStorage-based history—optimized for accessibility, responsiveness, and user experience.",
    category: "personal",
    liveUrl: "https://victorkevz.github.io/ip-address-tracker/",
    githubUrl: "https://github.com/VictorKevz/ip-address-tracker",
    tools: [
      "./icons/framer-motion.svg",
      "./icons/react.svg",
      "./icons/ts.svg",
      "./icons/github.svg",
    ],
  },
  {
    id: 2,
    image: "./projects/notes-app.png",
    title: "Notes App",
    description:
      "Responsive, accessible note-taking app enabling CRUD, archiving, tag filtering, search, and theme customization. Built with React, animated with Framer Motion, supporting keyboard navigation and seamless user experience.",
    category: "personal",
    liveUrl: "https://victorkevz.github.io/Notes_App/",
    githubUrl: "https://github.com/VictorKevz/Notes_App",
    tools: [
      "./icons/react.svg",
      "./icons/js.svg",
      "./icons/css.svg",
      "./icons/mui.svg",
    ],
  },

  {
    id: 3,
    image: "./projects/invoice.png",
    title: "InvoEase App",
    description: "App for creating and tracking invoices.",
    category: "personal",
    liveUrl: "https://victorkevz.github.io/InvoEase/",
    githubUrl: "https://github.com/VictorKevz/InvoEase",
    tools: [
      "./icons/react.svg",
      "./icons/js.svg",
      "./icons/css.svg",
      "./icons/framer-motion.svg",
    ],
  },
  {
    id: 4,
    image: "./projects/taskHub.png",
    title: "TaskHub App",
    description: "Kanban-style task management tool.",
    category: "personal",
    liveUrl: "https://victorkevz.github.io/Task-Manager/",
    githubUrl: "https://github.com/VictorKevz/Task-Manager",
    tools: [
      "./icons/react.svg",
      "./icons/js.svg",
      "./icons/mui.svg",
      "./icons/vite.svg",
    ],
  },
];

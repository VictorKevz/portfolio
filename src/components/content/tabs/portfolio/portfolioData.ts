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
      "./icons/react.svg",
      "./icons/framer-motion.svg",
      "./icons/ts.svg",
      "./icons/github.svg",
    ],
  },
  {
    id: 4,
    image: "./projects/bookManager.png",
    title: "BookManager App",
    description:
      "A full-stack book inventory dashboard enabling authenticated users to manage personal libraries with CRUD functionality, theme and language preferences, responsive design, and secure data storage via Supabase.",
    category: "personal",
    liveUrl: "https://book-manager-sigma-seven.vercel.app/",
    githubUrl: "https://github.com/VictorKevz/book-manager",
    tools: [
      "./icons/supabase.svg",
      "./icons/react.svg",
      "./icons/tailwind.svg",
      "./icons/vercel.png",
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
    description:
      "InvoEase is a multilinguial invoice management app featuring invoice creation, editing, deletion, status tracking (Draft, Pending, Paid), and improved accessibility and enhanced from a Frontend Mentor challenge.",
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
];

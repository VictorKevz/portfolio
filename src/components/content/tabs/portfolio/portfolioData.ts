import { PortfolioCategory, PortfolioItem } from "../../../../types/portfolio";

export const portfolioTabs: PortfolioCategory[] = [
  "all",
  "clients",
  "personal",
];

export const portfolioData: PortfolioItem[] = [
  {
    id: 0,
    image: "./projects/siili.svg",
    title: "Siili Parking Pools",
    description:
      "Collaborated with Siili Oy as part of a 3-member frontend team to build new features and UI sections for a parking pool app. Delivered a modern, responsive interface using TypeScript and functional components.",
    category: "clients",
    liveUrl: "",
    githubUrl: "",
  },
  {
    id: 1,
    image: "./projects/notes-app.png",
    title: "Notes App",
    description:
      "A responsive note-taking web app allowing users to create, read, update, delete, archive, and search notes with tag filtering and theme customization.",
    category: "personal",
    liveUrl: "https://victorkevz.github.io/Notes_App/",
    githubUrl: "https://github.com/VictorKevz/Notes_App",
  },
  {
    id: 2,
    image: "./projects/ip-address-tracker.svg",
    title: "IP Adress Tracker",
    description:
      "A web App that tracks and displays IP address geolocation data on an interactive map. Built as a solution to the Frontend Mentor challenge, with enhancements and UI customizations beyond the original design.",
    category: "personal",
    liveUrl: "https://victorkevz.github.io/ip-address-tracker/",
    githubUrl: "https://github.com/VictorKevz/ip-address-tracker",
  },
  {
    id: 3,
    image: "./projects/invoEase.png",
    title: "InvoEase App",
    description:
      "InvoEase is a comprehensive invoicing application designed to streamline the process of creating, managing, and tracking invoices.",
    category: "clients",
    liveUrl: "https://victorkevz.github.io/InvoEase/",
    githubUrl: "https://github.com/VictorKevz/InvoEase",
  },
  {
    id: 4,
    image: "./projects/taskHub.png",
    title: "TaskHub App",
    description:
      "A task management web application that helps users organize and manage their tasks efficiently. It allows them to create boards, add tasks, and track their progress through different stages.",
    category: "personal",
    liveUrl: "https://victorkevz.github.io/Task-Manager/",
    githubUrl: "https://github.com/VictorKevz/Task-Manager",
  },
];

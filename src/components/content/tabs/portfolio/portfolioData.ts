import { PortfolioCategory, PortfolioItem } from "../../../../types/portfolio";

export const portfolioTabs: PortfolioCategory[] = [
  "all",
  "clients",
  "personal",
];

export const portfolioData: PortfolioItem[] = [
  {
    id: 0,
    image: "./projects/siili.png",
    title: "Siili Parking Pools",
    description: "Frontend features for a parking pool app at Siili Oy.",
    category: "clients",
    liveUrl: "https://www.siili.com/",
    githubUrl: "",
  },
  {
    id: 1,
    image: "./projects/notes-app.png",
    title: "Notes App",
    description: "CRUD notes app with tags, themes, and search.",
    category: "personal",
    liveUrl: "https://victorkevz.github.io/Notes_App/",
    githubUrl: "https://github.com/VictorKevz/Notes_App",
  },
  {
    id: 2,
    image: "./projects/ip-address-tracker.png",
    title: "IP Adress Tracker",
    description: "Tracks IP geolocation data on a map.",
    category: "personal",
    liveUrl: "https://victorkevz.github.io/ip-address-tracker/",
    githubUrl: "https://github.com/VictorKevz/ip-address-tracker",
  },
  {
    id: 3,
    image: "./projects/invoice.png",
    title: "InvoEase App",
    description: "App for creating and tracking invoices.",
    category: "personal",
    liveUrl: "https://victorkevz.github.io/InvoEase/",
    githubUrl: "https://github.com/VictorKevz/InvoEase",
  },
  {
    id: 4,
    image: "./projects/taskHub.png",
    title: "TaskHub App",
    description: "Kanban-style task management tool.",
    category: "personal",
    liveUrl: "https://victorkevz.github.io/Task-Manager/",
    githubUrl: "https://github.com/VictorKevz/Task-Manager",
  },
];

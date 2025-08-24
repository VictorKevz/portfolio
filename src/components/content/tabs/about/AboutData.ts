import {
  ConnectWithoutContactOutlined,
  DashboardCustomize,
  FitnessCenter,
  LibraryMusicOutlined,
  Podcasts,
  SmartToy,
  SportsSoccer,
  Storefront,
} from "@mui/icons-material";

export const servicesData = [
  {
    id: 1,
    icon: Storefront,
    title: "Marketing Websites",
    description:
      "Helping you create websites that convert visitors into customers, track user behavior, and increase bookings or sales.",
    color: "primary-gradient-left",
  },
  {
    id: 2,
    icon: DashboardCustomize,
    title: "Dynamic Web Apps",
    description:
      "Delivering interactive apps and dashboards that turn your data into actionable insights for smarter business decisions.",
    color: "accent-gradient-left",
  },
  {
    id: 3,
    icon: SmartToy,
    title: "AI-Powered Chatbots",
    description:
      "Assisting you in engaging customers and automating support with intelligent conversational tools that save time and improve satisfaction.",
    color: "primary-gradient-right",
  },
  {
    id: 4,
    icon: ConnectWithoutContactOutlined,
    title: "Content Creation",
    description:
      "Helping you capture your audience’s attention with high-quality visuals and media that grow your brand and drive conversions.",
    color: "accent-gradient-right",
  },
];

export const hobbiesData = [
  {
    id: "music",
    title: "Music",
    description: "Acappella and old-school pop keep me grounded.",
    icon: LibraryMusicOutlined,
  },
  {
    id: "fitness",
    title: "Fitness",
    description: "Weightlifting sharpens my mental clarity.",
    icon: FitnessCenter,
  },
  {
    id: "reading",
    title: "Podcasts",
    description: "Enjoy podcasts on human behavior and biology.",
    icon: Podcasts,
  },
  {
    id: "soccer",
    title: "Soccer",
    description: "Kick around occasionally for fun and fitness.",
    icon: SportsSoccer,
  },
];

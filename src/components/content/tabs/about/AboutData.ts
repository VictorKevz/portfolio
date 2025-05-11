import webDev from "../../../../assets/images/webDev.png";
import content from "../../../../assets/images/content.png";
import support from "../../../../assets/images/support.png";
import wordpress from "../../../../assets/images/wordpress.svg";
import {
  FitnessCenter,
  LibraryMusicOutlined,
  Podcasts,
  SportsSoccer,
} from "@mui/icons-material";

export const servicesData = [
  {
    id: "custom-dev",
    title: "Custom Web Development",
    description:
      "Tailored websites built from scratch for performance, responsiveness, and business impact.",
    icon: webDev,
  },
  {
    id: "wordpress",
    title: "WordPress Development",
    description:
      "Flexible, fast, and scalable sites using WordPress and modern visual builders.",
    icon: wordpress,
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description:
      "Branded social media graphics and short-form videos that boost online engagement.",
    icon: content,
  },
  {
    id: "maintenance",
    title: "Website Maintenance",
    description:
      "Routine updates, speed improvements, and security checks to keep sites running smoothly.",
    icon: support,
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
    description: "Weightlifting and clean eating fuel my focus.",
    icon: FitnessCenter,
  },
  {
    id: "reading",
    title: "Podcasts",
    description:
      "Love listening to podcasts on human behavior and a bit of biology.",
    icon: Podcasts,
  },
  {
    id: "soccer",
    title: "Soccer",
    description: "Kick around occasionally for fun and fitness.",
    icon: SportsSoccer,
  },
];

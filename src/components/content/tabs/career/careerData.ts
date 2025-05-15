import { AssuredWorkload, School } from "@mui/icons-material";
import { careerButtonsDataType, CareerData } from "../../../../types/career";

export const careerButtonsData: careerButtonsDataType[] = [
  { id: "experience", text: "Work Experience", icon: AssuredWorkload },
  { id: "education", text: "Education", icon: School },
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
        "Focused on the fundamentals of digitalization, software development, and UI/UX design. Served as a teaching assistant and contributed to research and development for the university’s library website.",
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
};

import { ArrowForward, School } from "@mui/icons-material";

export const Career = () => {
  return (
    <section className="w-full mt-10 px-6 ">
      <header className="w-full border-b border-[var(--border)] flex items-center gap-4 pb-2 text-[var(--neutral-900)]">
        <button type="button">Work Experience</button>
        <button type="button">Education</button>
      </header>
      <div className="w-full relative my-6">
        <div className="w-full flex items-start gap-4">
          <div className="flex flex-col items-center">
            <span className="w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--neutral-300)] text-[var(--secondary-color)] shadow-xl">
              <School fontSize="large" />
            </span>
            <span className="absolute left-6 top-12 bottom-10 w-px bg-[var(--border)]"></span>
          </div>
          <ul className="w-full flex flex-col gap-5">
            <h3 className="text-2xl">Education</h3>
            {educationData.map((item) => (
              <li key={item.id} className="flex flex-col mt-2 relative">
                <h4 className="text-sm md:text-xl">{item.title}</h4>
                <span className="text-[var(--secondary-color)] mt-1.5">
                  {item.year}
                </span>
                <p className="text-sm md:text-sm w-[90%] mt-1">
                  {item.description}
                </p>
                <TimeLine />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <article className="w-full pt-6 border-t border-[var(--border)]">
        <header className="w-full">
          <h3 className="text-lg sm:text-2xl">Skills</h3>
        </header>
        <div className="w-full flex items-center justify-between">
          <ul className="flex flex-col items-start mt-4 md:grid md:grid-cols-2 gap-2">
            {softSkillsData.map((skill) => (
              <li key={skill} className="text-[var(--neutral-900)]">
                <span className="mr-1 text-[var(--neutral-400)]">
                  <ArrowForward />
                </span>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
};

const educationData = [
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
];

const softSkillsData = [
  "Communication",
  "Team player",
  "Problem-solving",
  "Continuous learning",
];

export const TimeLine = () => {
  return (
    <span className="absolute -left-12 w-4 h-4 rounded-full bg-[var(--border)] flex items-center justify-center">
      <span className="w-2 h-2 rounded-full bg-[var(--secondary-color)]"></span>
    </span>
  );
};

import { CheckCircle } from "@mui/icons-material";
import { useState } from "react";
import { careerTab } from "../../../../types/career";
import { careerButtonsData, data } from "./careerData";
import { CareerItem } from "./CareerItem";

export const Career = () => {
  const [activeTab, setActiveTab] = useState<careerTab>("experience");
  const careerObject =
    careerButtonsData.find((obj) => obj.id === activeTab) ||
    careerButtonsData[0];
  return (
    <section className="w-full mt-10 px-6 ">
      <header className="w-full border-b border-[var(--border)] flex items-center gap-4 text-[var(--neutral-900)]">
        {careerButtonsData.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              type="button"
              key={tab.id}
              className={`relative h-11 min-w-max max-w-50 w-full px-2 sm:px-4 rounded-t-xl bg-[var(--neutral-300)] font-medium text-base ${
                isActive
                  ? "text-white bg-[var(--primary-color)]"
                  : "text-[var(--neutral-900)]"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.text}
            </button>
          );
        })}
      </header>
      <div className="w-full relative my-6">
        <CareerItem data={data[activeTab]} careerObject={careerObject} />
      </div>
      <article className="w-full pt-6 border-t border-[var(--border)]">
        <header className="w-full">
          <h3 className="text-lg sm:text-2xl">Skills</h3>
        </header>
        <div className="w-full flex items-center justify-between">
          <ul className="flex flex-col items-start mt-4 md:grid md:grid-cols-2 gap-2">
            {softSkillsData.map((skill) => (
              <li
                key={skill}
                className="text-[var(--neutral-900)] flex items-center"
              >
                <span className="mr-1 text-[var(--neutral-400)]">
                  <CheckCircle />
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

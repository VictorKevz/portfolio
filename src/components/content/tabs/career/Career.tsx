import { useState } from "react";
import { careerTab } from "../../../../types/career";
import { careerButtonsData, data } from "./careerData";
import { CareerItem } from "./CareerItem";
import { Certifications } from "./Certifications";
import { AnimationWrapper } from "../../../../animations/AnimationWrapper";
import { TabVariants } from "../../../../animations/animations";

export const Career = () => {
  const [activeTab, setActiveTab] = useState<careerTab>("experience");
  const careerObject =
    careerButtonsData.find((obj) => obj.id === activeTab) ||
    careerButtonsData[0];
  return (
    <div className="w-full mt-10 px-4 ">
      <header className="w-full border-b border-[var(--border)] flex items-center gap-4 text-[var(--neutral-900)]">
        {careerButtonsData.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              type="button"
              key={tab.id}
              className={`relative h-9 sm:h-11 min-w-max max-w-50 w-full gap-1 px-2 sm:px-4 rounded-t-xl bg-[var(--neutral-300)] font-medium text-base ${
                isActive
                  ? "text-white bg-[var(--primary-color)]"
                  : "text-[var(--neutral-900)]"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span>
                <tab.icon />
              </span>
              <span className="hidden sm:flex"> {tab.text}</span>
            </button>
          );
        })}
      </header>
      <AnimationWrapper
        variants={TabVariants}
        index={10}
        keyValue={activeTab}
        scale={1.03}
      >
        <div className="w-full relative my-6">
          {activeTab === "certifications" ? (
            <Certifications
              data={data[activeTab]}
              careerObject={careerObject}
            />
          ) : (
            <CareerItem data={data[activeTab]} careerObject={careerObject} />
          )}
        </div>
      </AnimationWrapper>
    </div>
  );
};

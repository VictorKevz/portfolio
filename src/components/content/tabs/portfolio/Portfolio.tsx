import { useMemo, useState } from "react";
import { portfolioData, portfolioTabs } from "./portfolioData";
import { PortfolioCategory } from "../../../../types/portfolio";
import { PortfolioItem } from "./PortfolioItem";

export const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<PortfolioCategory>("all");

  const filteredProjects = useMemo(() => {
    if (activeTab === "all") return portfolioData;
    return portfolioData.filter((item) => item.category === activeTab);
  }, [activeTab]);
  return (
    <div className="w-full px-6 ">
      <p className="mt-8 mb-5 w-[90%]">
        Here’s a curated list of projects spanning client work, academic
        assignments, and personal builds, each focused on solving real problems,
        delivering measurable outcomes, and demonstrating my ability to execute
        from concept to deployment.
      </p>
      <ul className="w-full flex items-start gap-2 md:gap-4 border-b border-[var(--border)]">
        {portfolioTabs.map((item) => {
          const isActive = activeTab === item;
          return (
            <button
              key={item}
              type="button"
              onClick={() => setActiveTab(item)}
              className={`font-bold h-8 sm:h-11 sm:max-w-[12rem] w-full px-2 sm:px-4 rounded-t-xl hover:bg-[var(--primary-color)] hover:text-white ${
                isActive
                  ? "text-white bg-[var(--primary-color)]"
                  : "text-[var(--neutral-900)] bg-[var(--neutral-300)]"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          );
        })}
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 mt-8">
        {filteredProjects.map((data) => (
          <PortfolioItem key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

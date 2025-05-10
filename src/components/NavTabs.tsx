import { useState } from "react";

export const NavTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("about");
  return (
    <ul className="w-full flex items-center gap-3 justify-between">
      {navTabsData.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <li
            key={tab.id}
            className={`font-medium text-xs sm:text-lg ${
              isActive
                ? "text-[var(--secondary-color)]"
                : "text-[var(--neutral-900)]"
            }`}
          >
            <button type="button" onClick={() => setActiveTab(tab.id)}>
              {tab.text}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const navTabsData = [
  { id: "about", text: "About" },
  { id: "projects", text: "Projects" },
  { id: "career", text: "Career" },
  { id: "contact", text: "Contact" },
];

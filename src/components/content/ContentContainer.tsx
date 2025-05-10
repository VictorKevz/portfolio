import { NavTabs } from "../NavTabs";
import { tabKey } from "../../types/tabs";
import { useNavTabsContext } from "../../context/NavTabsContext";
import { About } from "./tabs/About";
export const ContentContainer = () => {
  const { activeTab } = useNavTabsContext();

  const tabTitle: Record<tabKey, string> = {
    about: "About Me",
    projects: "My Projects",
    career: "Career Journey",
    contact: "Get in Touch",
  };

  return (
    <section className="max-w-5xl w-full bg-[var(--neutral-0)] border border-[var(--border)] rounded-3xl shadow-xl lg:min-h-[44rem]">
      <header className="flex w-full justify-between items-start pl-4">
        <h2 className="text-3xl text-[var(--neutral-900)] flex flex-col items-start min-w-max gap-2 mt-8">
          {tabTitle[activeTab]}
          <span className="w-12 h-1.5 bg-[var(--secondary-color)] rounded-full"></span>
        </h2>
        <div className="hidden lg:flex w-full justify-end">
          <nav className="max-w-xl w-full min-h-17 flex items-center bg-[var(--neutral-300)] rounded-bl-3xl rounded-tr-[1.43rem] px-4 border-b border-l border-[var(--border)]">
            <NavTabs />
          </nav>
        </div>
      </header>
      <div className="w-full py-8">{activeTab === "about" && <About />}</div>
    </section>
  );
};

import { NavTabs } from "../NavTabs";
import { tabKey } from "../../types/tabs";
import { useNavTabsContext } from "../../context/NavTabsContext";
export const ContentContainer = () => {
  const { activeTab } = useNavTabsContext();

  const tabTitle: Record<tabKey, string> = {
    about: "About Me",
    projects: "My Projects",
    career: "Career Journey",
    contact: "Get in Touch",
  };

  return (
    <section className="max-w-7xl w-full bg-[var(--neutral-0)] border border-[var(--border)] rounded-3xl shadow-xl min-h-30 lg:min-h-[40rem]">
      <header className="flex w-full justify-between items-start pl-4">
        <h2 className="text-3xl text-[var(--neutral-900)] flex flex-col items-start min-w-max gap-2 mt-6">
          {tabTitle[activeTab]}
          <span className="w-12 h-1.5 bg-[var(--secondary-color)] rounded-full"></span>
        </h2>
        <div className="hidden lg:flex w-full justify-end">
          <nav className="max-w-xl w-full min-h-17 flex items-center bg-[var(--neutral-300)] rounded-bl-3xl rounded-tr-[1.43rem] px-4 border-b border-l border-[var(--border)]">
            <NavTabs />
          </nav>
        </div>
      </header>
    </section>
  );
};

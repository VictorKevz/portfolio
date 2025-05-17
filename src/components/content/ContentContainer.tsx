import { NavTabs } from "../NavTabs";
import { tabKey } from "../../types/tabs";
import { useNavTabsContext } from "../../context/NavTabsContext";
import { About } from "./tabs/about/About";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { useRef, useState } from "react";
import { Contact } from "./tabs/contact/Contact";
import { Career } from "./tabs/career/Career";
export const ContentContainer = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const { activeTab } = useNavTabsContext();

  const tabTitle: Record<tabKey, string> = {
    about: "About Me",
    portfolio: "My Projects",
    career: "My Career",
    contact: "Get in Touch",
  };
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const section = sectionRef.current;
    const body = document.documentElement;

    if (section) {
      const targetScroll = isAtBottom ? 0 : section.scrollHeight;

      section.scrollTo({ top: targetScroll, behavior: "smooth" });

      body.scrollTo({ top: targetScroll, behavior: "smooth" });

      setIsAtBottom(!isAtBottom);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative max-w-screen-xl w-full h-auto bg-[var(--neutral-0)] border border-[var(--border)] rounded-3xl pb-6 shadow-xl xl:h-[44rem] overflow-y-auto no-scrollbar"
    >
      <header className="flex w-full justify-between items-start pl-6">
        <h2 className="text-3xl sm:text-4xl  text-[var(--neutral-900)] flex flex-col items-start min-w-max gap-2 mt-9">
          {tabTitle[activeTab]}
          <span className="w-12 h-1.5 bg-[var(--secondary-color)] rounded-full"></span>
        </h2>
        <div className="hidden lg:flex w-full justify-end static">
          <nav className="max-w-xl w-full min-h-17 flex items-center bg-[var(--neutral-300)] rounded-bl-3xl rounded-tr-[1.43rem] px-10 border-b border-l border-[var(--border)]">
            <NavTabs />
          </nav>
        </div>
      </header>
      <div className="w-full ">{activeTab === "about" && <About />}</div>
      <div className="w-full">{activeTab === "contact" && <Contact />}</div>
      {activeTab === "career" && <Career />}
      {activeTab != "contact" && (
        <button
          type="button"
          onClick={handleScroll}
          className="fixed right-5 bottom-[13%] w-13 h-13 rounded-xl text-[var(--primary-color)] bg-[var(--neutral-200)] shadow-xl shadow-blue-400/10 hover:bg-[var(--primary-color)] hover:text-white hover:shadow-blue-400/30"
        >
          <span className="animate-bounce-down">
            {isAtBottom ? (
              <ArrowUpward fontSize="medium" className="scale-110" />
            ) : (
              <ArrowDownward fontSize="medium" className="scale-110" />
            )}
          </span>
        </button>
      )}
    </section>
  );
};

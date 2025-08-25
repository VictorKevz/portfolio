import { NavTabs } from "../NavTabs";
import { tabKey } from "../../types/tabs";
import { useNavTabsContext } from "../../context/NavTabsContext";
import { About } from "./tabs/about/About";
import { JSX, useRef } from "react";
import { Contact } from "./tabs/contact/Contact";
import { Career } from "./tabs/career/Career";
import { Portfolio } from "./tabs/portfolio/Portfolio";
import { AnimationWrapper } from "../../animations/AnimationWrapper";
import { ContainerVariants, TabVariants } from "../../animations/animations";
import { motion } from "framer-motion";
export const ContentContainer = () => {
  const { activeTab } = useNavTabsContext();

  const tabTitle: Record<tabKey, string> = {
    about: "About Me",
    portfolio: "My Projects",
    career: "My Career",
    contact: "Get in Touch",
  };
  const sectionRef = useRef<HTMLDivElement>(null);

  const components: Record<tabKey, JSX.Element> = {
    about: <About />,
    career: <Career />,
    portfolio: <Portfolio />,
    contact: <Contact />,
  };
  return (
    <motion.section
      variants={ContainerVariants(100)}
      initial="hidden"
      animate="visible"
      ref={sectionRef}
      className="relative glass-container max-w-screen-xl w-full h-auto glass-container border border-[var(--border)] rounded-3xl pb-6 shadow-xl xl:min-h-[44rem] overflow-y-auto no-scrollbar"
    >
      <header className="flex w-full justify-between items-start pl-6">
        <h2 className="text-3xl sm:text-4xl  text-[var(--neutral-900)] flex flex-col items-start min-w-max gap-2 mt-9">
          {tabTitle[activeTab]}
          <span className="w-12 h-1.5 primary-gradient-bg rounded-full"></span>
        </h2>
        <div className="hidden lg:flex w-full justify-end ">
          <div className="max-w-xl w-full accent-gradient pb-px pl-px rounded-bl-3xl rounded-tr-[1.43rem]">
            <nav className="w-full min-h-17 flex items-center bg-[var(--neutral-300)] rounded-bl-3xl rounded-tr-[1.43rem] px-10 border-b border-l border-[var(--border)]">
              <NavTabs />
            </nav>
          </div>
        </div>
      </header>
      <AnimationWrapper
        variants={TabVariants}
        index={20}
        keyValue={activeTab}
        scale={0.95}
      >
        <div className="w-full ">{components[activeTab]}</div>
      </AnimationWrapper>
    </motion.section>
  );
};

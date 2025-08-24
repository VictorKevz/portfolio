import "./App.css";
import { ContentContainer } from "./components/content/ContentContainer";
import { AlertWrapper } from "./components/content/tabs/contact/Alert";
import { NavTabs } from "./components/NavTabs";
import Profile from "./components/Profile";
import ThemeButton from "./components/ThemeButton";
import { AlertProvider } from "./context/AlertContext";
import { NavTabsProvider } from "./context/NavTabsContext";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { motion } from "framer-motion";

function App() {
  return (
    <ThemeProvider>
      <AlertProvider>
        <main className="w-full min-h-dvh  flex flex-col items-center justify-center gap-4 relative z-10">
          <NavTabsProvider>
            <motion.div
              layout
              className="w-full flex flex-col items-center xl:flex-row xl:items-start justify-center gap-7 xl:gap-16 px-4 mt-24 pb-32 xl:mt-20 lg:pb-12"
            >
              <Profile />
              <ContentContainer />
            </motion.div>
            <MobileNavTabs />
          </NavTabsProvider>
          <AlertWrapper />
          <ThemeButton />
          <MainBackground />
          <div className="w-full bg-[var(--bg-overlay)] h-full absolute -z-2 "></div>
        </main>
      </AlertProvider>
    </ThemeProvider>
  );
}

export default App;

const MobileNavTabs = () => {
  return (
    <div className="lg:hidden fixed bottom-0 w-full  accent-gradient p-px pb-0 rounded-t-3xl">
      <nav className="w-full bg-[var(--neutral-100)] min-h-20 flex items-center px-4 rounded-t-3xl">
        <NavTabs />
      </nav>
    </div>
  );
};

const MainBackground = () => {
  const { theme } = useTheme();
  const bgImage = {
    desktop: `/main-bg/desktop-${theme}-bg.webp`,
    mobile: `/main-bg/mobile-${theme}-bg.webp`,
  };
  return (
    <picture className="w-full h-full absolute pointer-events-none -z-10">
      <source media="(min-width:800px )" srcSet={bgImage.desktop} />
      <source media="(max-width:799px )" srcSet={bgImage.mobile} />
      <img src={bgImage.mobile} className="w-full h-full object-cover" />
    </picture>
  );
};

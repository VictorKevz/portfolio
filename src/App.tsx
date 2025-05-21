import "./App.css";
import { ContentContainer } from "./components/content/ContentContainer";
import { AlertWrapper } from "./components/content/tabs/contact/Alert";
import { NavTabs } from "./components/NavTabs";
import Profile from "./components/Profile";
import ThemeButton from "./components/ThemeButton";
import { AlertProvider } from "./context/AlertContext";
import { NavTabsProvider } from "./context/NavTabsContext";
import { ThemeProvider } from "./context/ThemeContext";
import { motion } from "framer-motion";

function App() {
  return (
    <ThemeProvider>
      <AlertProvider>
        <main
          className="w-full min-h-dvh bg-cover bg-no-repeat flex flex-col items-center justify-center gap-4 relative"
          style={{ background: "var(--gradient)" }}
        >
          <NavTabsProvider>
            <motion.div
              layout
              className="w-full flex flex-col items-center xl:flex-row xl:items-start justify-center gap-16 px-4 mt-24 pb-32 xl:mt-20 lg:pb-12"
            >
              <Profile />
              <ContentContainer />
            </motion.div>
            <MobileNavTabs />
          </NavTabsProvider>
          <AlertWrapper />
          <ThemeButton />
        </main>
      </AlertProvider>
    </ThemeProvider>
  );
}

export default App;

const MobileNavTabs = () => {
  return (
    <nav className="lg:hidden fixed bottom-0 w-full backdrop-blur-sm bg-[var(--neutral-300)] min-h-14 flex items-center px-4 border border-[var(--border)] rounded-t-3xl shadow-2xl">
      <NavTabs />
    </nav>
  );
};

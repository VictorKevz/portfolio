import "./App.css";
import { ContentContainer } from "./components/content/ContentContainer";
import { NavTabs } from "./components/NavTabs";
import Profile from "./components/Profile";
import ThemeButton from "./components/ThemeButton";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <main
        className="w-full min-h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center gap-4 relative"
        style={{ background: "var(--gradient)" }}
      >
        <div className="w-full flex flex-col items-center lg:flex-row lg:items-start justify-center gap-16 px-6 mt-24 pb-32 lg:mt-20 lg:pb-12">
          <Profile />
          <ContentContainer />
        </div>
        <nav className="lg:hidden fixed bottom-0 w-full backdrop-blur-sm bg-transparent min-h-18 flex items-center px-4 border-t border-[var(--border)] rounded-t-3xl">
          <NavTabs />
        </nav>
        <ThemeButton />
      </main>
    </ThemeProvider>
  );
}

export default App;

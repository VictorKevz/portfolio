import "./App.css";
import { ContentContainer } from "./components/content/ContentContainer";
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
        <div className="w-full flex items-start justify-center gap-16">
          <Profile />
          <ContentContainer />
        </div>

        <ThemeButton />
      </main>
    </ThemeProvider>
  );
}

export default App;

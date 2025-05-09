import "./App.css";
import Example from "./components/Example";
import ToggleButton from "./components/ToggleButton";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <main
        className="w-full min-h-screen bg-cover bg-no-repeat flex flex-col items-center justify-center gap-4 relative"
        style={{ background: "var(--gradient)" }}
      >
        <Example />
        <ToggleButton />
      </main>
    </ThemeProvider>
  );
}

export default App;

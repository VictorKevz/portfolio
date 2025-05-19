import { DarkMode, LightMode } from "@mui/icons-material";
import { useTheme } from "../context/ThemeContext";

const ThemeButton = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <button
      type="button"
      className="bg-[var(--neutral-0)] h-12 w-12 rounded-xl group text-[var(--neutral-900)] border border-[var(--border)] absolute top-4 right-4 shadow-lg hover:shadow-blue-400/60 hover:border-[var(--primary-color)] hover:text-[var(--primary-color)]"
      onClick={toggleTheme}
    >
      <span className="group-hover:rotate-360 transition-all duration-300 ease-in-out">
        {theme === "light" ? <DarkMode /> : <LightMode />}
      </span>
    </button>
  );
};

export default ThemeButton;

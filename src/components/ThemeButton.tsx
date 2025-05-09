import { DarkMode, LightMode } from "@mui/icons-material";
import { useTheme } from "../context/ThemeContext";

const ThemeButton = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <button
      type="button"
      className="bg-[var(--card-bg)] h-12 w-12 rounded-full group text-[var(--neutral-900)] border border-[var(--border)] absolute top-4 right-5 shadow-2xl hover:shadow-blue-500 hover:border-[var(--primary-color)]"
      onClick={toggleTheme}
    >
      <span className="group-hover:rotate-45 transition-all duration-300 ease-in-out">
        {theme === "light" ? <DarkMode /> : <LightMode />}
      </span>
    </button>
  );
};

export default ThemeButton;

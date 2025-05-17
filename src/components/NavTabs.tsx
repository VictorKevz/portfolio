import { useNavTabsContext } from "../context/NavTabsContext";
import { navTabsDataType } from "../types/tabs";

export const NavTabs = () => {
  const { activeTab, onUpdate } = useNavTabsContext();

  return (
    <ul className="w-full flex items-center justify-between h-14">
      {navTabsData.map((tab, index) => {
        const isActive = activeTab === tab.id;
        const isLast = index === navTabsData.length - 1;

        return (
          <li
            key={tab.id}
            className={`flex items-center h-14 w-fit gap-10 justify-between font-medium text-xs sm:text-lg ${
              isActive
                ? "text-[var(--secondary-color)]"
                : "text-[var(--neutral-900)]"
            }`}
          >
            <button
              type="button"
              className={`${!isLast && "sm:mr-15"}`}
              onClick={() => onUpdate(tab.id)}
            >
              {tab.text}
            </button>

            {!isLast && (
              <span className="lg:hidden h-full w-px bg-[var(--border)]" />
            )}
          </li>
        );
      })}
    </ul>
  );
};

const navTabsData: navTabsDataType[] = [
  { id: "about", text: "About" },
  { id: "career", text: "Career" },
  { id: "portfolio", text: "Portfolio" },
  { id: "contact", text: "Contact" },
];

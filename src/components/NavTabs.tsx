import { useNavTabsContext } from "../context/NavTabsContext";
import { navTabsDataType } from "../types/tabs";

export const NavTabs = () => {
  const { activeTab, onUpdate } = useNavTabsContext();

  return (
    <ul className="w-full flex items-center justify-center gap-8 lg:justify-between h-14">
      {navTabsData.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <li key={tab.id}>
            <button
              type="button"
              className={`justify-center font-medium text-xs sm:text-lg link ${
                isActive
                  ? "text-[var(--neutral-0)] active-link hover:bg-gradient-to-r! hover:from-[#875ddb] hover:to-[#5ce1e6]"
                  : "text-[var(--neutral-900)]"
              }`}
              onClick={() => onUpdate(tab.id)}
            >
              {tab.text}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const navTabsData: navTabsDataType[] = [
  { id: "about", text: "About" },
  { id: "portfolio", text: "Portfolio" },
  { id: "career", text: "Career" },
  { id: "contact", text: "Contact" },
];

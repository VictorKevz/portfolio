/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useState } from "react";
import { NavTabsContextType, ProviderProps, tabKey } from "../types/tabs";

export const NavTabsContext = createContext<NavTabsContextType | undefined>(
  undefined
);

export const NavTabsProvider = ({ children }: ProviderProps) => {
  const [activeTab, setActiveTab] = useState<tabKey>("about");

  const updateActiveTab = useCallback((key: tabKey) => {
    setActiveTab(key);
  }, []);
  return (
    <NavTabsContext.Provider value={{ activeTab, onUpdate: updateActiveTab }}>
      {children}
    </NavTabsContext.Provider>
  );
};

export const useNavTabsContext = () => {
  const context = useContext(NavTabsContext);
  if (!context)
    throw new Error("useNavTabsContext must be used within NavTabsProvider!");
  return context;
};

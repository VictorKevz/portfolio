import { ReactNode } from "react";

export interface NavTabsContextType {
  activeTab: tabKey;
  onUpdate: (key: tabKey) => void;
}

export type tabKey = "about" | "projects" | "career" | "contact";

export type navTabsDataType = {
  id: tabKey;
  text: string;
};

export type ProviderProps = {
  children: ReactNode;
};

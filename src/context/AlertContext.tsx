import { createContext, useContext, useRef, useState } from "react";
import { AlertContextType } from "../types/alert";
import { ProviderProps } from "../types/tabs";
import { AlertState, DefaultAlertState } from "../types/alert";

// eslint-disable-next-line react-refresh/only-export-components
export const AlertContext = createContext<AlertContextType | undefined>(
  undefined
);

export const AlertProvider = ({ children }: ProviderProps) => {
  const [alert, setAlert] = useState<AlertState>(DefaultAlertState);

  const timeOutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleAlert = (update: AlertState) => {
    setAlert(update); // alert is shown
    if (timeOutId.current) clearTimeout(timeOutId.current);

    timeOutId.current = setTimeout(() => {
      setAlert({ ...update, show: false }); // hide alert after 3.5 seconds
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ alert, handleAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAlertContext = () => {
  const context = useContext(AlertContext);
  if (!context)
    throw new Error("useAlertContext must be used within AlertProvider!");
  return context;
};

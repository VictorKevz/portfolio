import { ReactNode } from "react";

export type SeverityType = "success" | "warning" | "error" | "info";

export interface AlertState {
  severity: SeverityType;
  message: string;
  show: boolean;
}
export const DefaultAlertState: AlertState = {
  severity: "success",
  message: "Message successfully sent!",
  show: false,
};
export interface AlertContextType {
  alert: AlertState;
  handleAlert: (update: AlertState) => void;
}

export type ProviderProps = {
  children: ReactNode;
};
export type AlertProps = {
  alert: AlertState;
};

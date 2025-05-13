import { Alert } from "@mui/material";
import { useAlertContext } from "../../../../context/AlertContext";
import { AnimatePresence } from "framer-motion";
import { AlertProps } from "../../../../types/alert";
export const AlertItem = ({ alert }: AlertProps) => {
  return (
    <div className="max-w-xs w-full">
      <Alert
        variant="filled"
        severity={alert.severity}
        style={{ color: "#fff" }}
      >
        {alert.message}
      </Alert>
    </div>
  );
};

export const AlertWrapper = () => {
  const { alert } = useAlertContext();

  return (
    <AnimatePresence>
      {alert.show && (
        <div className="w-full fixed flex items-center justify-center top-8">
          <AlertItem alert={alert} />
        </div>
      )}
    </AnimatePresence>
  );
};

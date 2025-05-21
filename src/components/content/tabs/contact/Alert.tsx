import { Alert } from "@mui/material";

import { useAlertContext } from "../../../../context/AlertContext";
import { AnimatePresence, motion } from "framer-motion";
import { AlertProps } from "../../../../types/alert";
import { AlertVariants } from "../../../../animations/animations";

export const AlertItem = ({ alert }: AlertProps) => {
  return (
    <motion.div
      variants={AlertVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="max-w-xs w-full mx-auto top-10 fixed z-555"
    >
      <Alert
        variant="filled"
        severity={alert.severity}
        style={{ color: "#fff" }}
      >
        {alert.message}
      </Alert>
    </motion.div>
  );
};

export const AlertWrapper = () => {
  const { alert } = useAlertContext();

  return (
    <AnimatePresence>
      {alert.show && <AlertItem alert={alert} />}
    </AnimatePresence>
  );
};

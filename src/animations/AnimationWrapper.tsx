import { AnimatePresence, motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type AnimationWrapperProps = {
  children: ReactNode;
  variants: (i: number) => Variants;
  index: number;
  keyValue: string | number;
};

export const AnimationWrapper = ({
  children,
  variants,
  index,
  keyValue,
}: AnimationWrapperProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="w-full"
        key={keyValue}
        variants={variants(index)}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

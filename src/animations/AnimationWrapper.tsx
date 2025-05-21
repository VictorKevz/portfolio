import { AnimatePresence, motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type AnimationWrapperProps = {
  children: ReactNode;
  variants: (i: number, scale: number) => Variants;
  index: number;
  scale: number;
  keyValue: string | number;
};

export const AnimationWrapper = ({
  children,
  variants,
  index,
  keyValue,
  scale,
}: AnimationWrapperProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="w-full"
        key={keyValue}
        variants={variants(index, scale)}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

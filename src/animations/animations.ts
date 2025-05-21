export const TabVariants = (i: number, scale: number) => ({
  hidden: { y: -i, opacity: 0, scale: scale },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.5,
    },
  },
  exit: {
    y: -i,
    opacity: 0,
    transition: {
      type: "tween",
      delay: 0,
      ease: "easeInOut",
      duration: 0.4,
    },
  },
});

export const ToggleContactsVariants = {
  hidden: { y: 0, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 200,
      bounce: 0.5,
    },
  },
  exit: {
    y: "100",
    opacity: 0,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 200,
      bounce: 0.5,
      duration: 0.5,
    },
  },
};

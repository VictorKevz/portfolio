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

export const ContainerVariants = (direction: number) => ({
  hidden: { x: direction, opacity: 0, scale: 0.96 },
  visible: {
    x: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay: 0.1,
      ease: "easeInOut",
      duration: 0.5,
    },
  },
});

export const AlertVariants = {
  hidden: { y: "-100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 300,
      bounce: 0.7,
    },
  },
  exit: {
    y: "-100%",
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

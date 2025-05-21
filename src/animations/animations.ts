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

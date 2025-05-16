import { skills } from "./careerData";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { ScrollingRowProps } from "../../../../types/career";

const ScrollingRow = ({ items, direction, speed }: ScrollingRowProps) => {
  const controls = useAnimation();

  useEffect(() => {
    const distance = 100; // adjust based on width
    controls.start({
      x:
        direction === "left" ? [`0%`, `-${distance}%`] : [`0%`, `${distance}%`],
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: speed,
      },
    });
  }, [controls, direction, speed]);

  return (
    <div className="overflow-hidden w-full relative">
      <motion.ul
        className="flex gap-4 w-max"
        animate={controls}
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() => controls.resume()}
      >
        {items.concat(items).map((item, index) => (
          <li
            key={index}
            className="min-w-max h-12 px-2 rounded-lg bg-[var(--neutral-300)] flex items-center justify-center text-[var(--neutral-900)]"
          >
            {item.icon ? <img src={item.icon} alt={item.name} /> : item.name}
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export const Skills = () => {
  return (
    <div className="w-full flex flex-col items-start gap-5 mt-4">
      <ScrollingRow items={skills.soft} direction="right" speed={30} />
      <ScrollingRow items={skills.technical} direction="left" speed={30} />
    </div>
  );
};

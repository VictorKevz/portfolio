import { skills } from "./careerData";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ScrollingRowProps } from "../../../../types/career";

const ScrollingRow = ({ items, direction, speed }: ScrollingRowProps) => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLUListElement>(null);
  const [duplicatedItems, setDuplicatedItems] = useState(items);

  useEffect(() => {
    if (!containerRef.current) return;

    const viewportWidth = window.innerWidth;
    let totalWidth = containerRef.current.scrollWidth / 2;
    let newItems = [...items];

    // We keep duplicating until content width is at least 2x viewport width
    while (totalWidth < viewportWidth * 2) {
      newItems = [...newItems, ...items];
      totalWidth += containerRef.current.scrollWidth / 2;
    }

    setDuplicatedItems(newItems);
  }, [items]);

  const startAnimation = () => {
    if (!containerRef.current) return;

    const scrollWidth = containerRef.current.scrollWidth / 2;

    controls.start({
      x: direction === "left" ? [0, -scrollWidth] : [-scrollWidth, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: speed,
        },
      },
    });
  };

  useEffect(() => {
    startAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duplicatedItems, direction, speed]);

  return (
    <div className="overflow-hidden w-full relative">
      <motion.ul
        className="flex gap-2 w-max group"
        animate={controls}
        ref={containerRef}
        onMouseEnter={() => controls.stop()}
        onMouseLeave={startAnimation}
      >
        {duplicatedItems.map((item, index) => (
          <li
            key={`${item.name}-${index}`}
            className="accent-gradient rounded-lg filter opacity-70 group-hover:opacity-100"
          >
            <span className="scale-70 sm:scale-80 md:scale-90 lg:scale-100 group min-w-max h-12 px-2 rounded-lg bg-[var(--neutral-100)] flex items-center justify-center text-[var(--neutral-900)]  transition-all duration-300 ease-in-out cursor-pointer">
              {item.icon ? (
                <img src={item.icon} alt={item.name} className="h-auto" />
              ) : (
                item.name
              )}
            </span>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export const Skills = () => {
  return (
    <div className="w-full flex flex-col items-start gap-5 mt-4">
      <ScrollingRow items={skills.soft} direction="right" speed={55} />
      <ScrollingRow items={skills.technical} direction="left" speed={75} />
    </div>
  );
};

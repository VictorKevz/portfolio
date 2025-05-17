import { FlagCircle } from "@mui/icons-material";
import { careerItemProps } from "../../../../types/career";

export const CareerItem = ({ data, careerObject }: careerItemProps) => {
  return (
    <div className="w-full relative my-6">
      <div className="w-full flex items-start gap-4">
        <div className="flex flex-col items-center">
          <span className="w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--neutral-300)] text-[var(--secondary-color)] shadow-xl">
            <FlagCircle fontSize="large" />
          </span>
          <span className="absolute left-6 top-12 bottom-10 w-px bg-[var(--border)]"></span>
        </div>
        <ul className="w-full flex flex-col gap-5">
          <h3 className="text-2xl">{careerObject.text}</h3>
          {data.map((item) => (
            <li key={item.id} className="flex flex-col mt-2 relative">
              <h4 className="text-sm md:text-xl">{item.title}</h4>
              <span className="text-[var(--secondary-color)] mt-1.5">
                {item.year}
              </span>
              <p className="text-sm md:text-base max-w-5xl w-[90%] mt-1">
                {item.description}
              </p>
              <span className="absolute -left-12 w-4 h-4 rounded-full bg-[var(--border)] flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[var(--secondary-color)]"></span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

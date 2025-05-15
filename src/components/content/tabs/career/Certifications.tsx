import { ArrowOutward } from "@mui/icons-material";
import { careerItemProps } from "../../../../types/career";

export const Certifications = ({ data, careerObject }: careerItemProps) => {
  return (
    <div className="w-full mt-8">
      <header className="w-full">
        <h3 className="text-2xl">My {careerObject.text}</h3>
        <p className="text-sm md:text-base mt-1 w-full xl:w-[90%] max-5xl">
          Driven by continuous learning, I’ve earned certifications in front-end
          development, software product management, and project management to
          expand my perspective beyond just writing code. I approach tech with a
          business mindset and a passion for design, always aiming to understand
          real needs and solve them with purpose-built solutions.
        </p>
      </header>
      <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-8 mt-8">
        {data.map((card) => (
          <div
            key={card.id}
            className="relative overflow-hidden min-h-75 rounded-xl w-full transition-all duration-500 ease-in-out shadow-xl hover:cursor-pointer hover:shadow-blue-400/10"
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.backgroundSize = "110%";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.backgroundSize = "100%";
            }}
          >
            <div className="flex flex-col px-3 py-4 bg-[var(--neutral-200)] absolute -right-px -bottom-1 w-fit rounded-b-[.79rem] transition-all duration-300 ease-in-out">
              <div className="w-full flex justify-end">
                <a
                  href={card?.url}
                  className="h-11 min-w-max px-4 text-base font-medium text-white bg-[var(--secondary-color)] rounded-xl"
                  target="_blank"
                >
                  <ArrowOutward />
                  verify
                </a>
              </div>
              <h4 className="text-sm sm:text-xl mt-2">{card.title}</h4>
              <span className="text-[var(--secondary-color)] mt-1">
                {card.year}
              </span>
              <p className="text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

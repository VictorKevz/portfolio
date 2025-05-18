import { GitHub, Language } from "@mui/icons-material";
import { PortfolioItemProps } from "../../../../types/portfolio";

export const PortfolioItem = ({ data }: PortfolioItemProps) => {
  return (
    <div
      className="group relative min-h-[19rem] w-full bg-cover rounded-xl shadow-xl"
      style={{
        backgroundImage: `url(${data.image})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="sm:hidden flex sm:group-hover:flex flex-col absolute bottom-0 h-full w-full px-4 py-5 items-start justify-end cursor-pointer bg-cover  rounded-xl transition-all ease-in-out duration-300"
        style={{ background: `var(--faded-gradient)` }}
      >
        <h3 className="text-xl">{data.title}</h3>
        <p className="">{data.description}</p>
        <div className="w-full flex gap-3 mt-3">
          <a
            href={data.liveUrl}
            target="_blank"
            className="h-10 gap-0.5 text-sm sm:text-base rounded-xl px-2 bg-[var(--primary-color)] text-white shadow-blue-400/50 shadow-2xl"
          >
            <Language />
            Demo
          </a>
          <a
            href={data.githubUrl}
            target="_blank"
            className="h-10 gap-0.5 text-sm sm:text-base rounded-xl px-2 bg-[var(--neutral-1000)] text-[var(--neutral-0)] shadow-blue-400/50 shadow-2xl"
          >
            <GitHub />
            Repository
          </a>
        </div>
      </div>
    </div>
  );
};

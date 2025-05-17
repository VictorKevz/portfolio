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
        className="sm:hidden sm:group-hover:flex flex-col absolute bottom-0 h-full w-full px-4 py-5 items-start justify-end cursor-pointer bg-cover  rounded-xl transition-all ease-in-out duration-300"
        style={{ background: `var(--faded-gradient)` }}
      >
        <h3 className="text-xl">{data.title}</h3>
        <p className="">{data.description}</p>
        <div className="w-full flex gap-3 mt-3">
          <a
            href={data.liveUrl}
            target="_blank"
            className="h-10 rounded-xl px-4 bg-[var(--primary-color)] text-white shadow-blue-400/10 shadow-2xl"
          >
            <Language />
            View Demo
          </a>
          <a
            href={data.githubUrl}
            target="_blank"
            className="h-10 rounded-xl px-4 bg-[var(--neutral-300)] text-[var(--neutral-900)] shadow-blue-400/10 shadow-2xl"
          >
            <GitHub />
            Repository
          </a>
        </div>
      </div>
    </div>
  );
};

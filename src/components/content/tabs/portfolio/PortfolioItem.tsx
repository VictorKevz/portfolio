import { GitHub, Language } from "@mui/icons-material";
import { PortfolioItemProps } from "../../../../types/portfolio";
import { AnimationWrapper } from "../../../../animations/AnimationWrapper";
import { TabVariants } from "../../../../animations/animations";

export const PortfolioItem = ({ data }: PortfolioItemProps) => {
  const isEmpty = data.githubUrl === "";
  return (
    <AnimationWrapper
      variants={TabVariants}
      index={10}
      keyValue={data.category}
      scale={0.9}
    >
      <article className="relative w-full overflow-hidden rounded-2xl shadow-2xl hover:shadow-black/20 transition-all ease-in-out duration-300  border border-[var(--border)]">
        <header className="group p-2.5">
          <div
            className="w-full min-h-[250px] rounded-xl bg-center"
            style={{
              backgroundImage: `url(${data.image})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </header>
        <div className="w-full my-4 px-4 pb-4 border-b border-[var(--border)]">
          <h3 className="text-xl">{data.title}</h3>
          <p className="">{data.description}</p>
          <ul className="flex items-center w-full mt-2.5">
            {data.tools.map((tool, index) => (
              <li
                key={index}
                className="w-12 h-12 flex justify-center items-center rounded-full border border-[var(--border)] not-first:-ml-4 bg-[var(--neutral-300)]"
              >
                <img src={tool} alt="" className="w-6 h-6" />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col w-full px-4 pb-4 items-start justify-end cursor-pointer transition-all ease-in-out duration-300">
          <div className="w-full flex gap-3">
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
              target={isEmpty ? "_self" : "_blank"}
              onClick={(e) => {
                if (isEmpty) e.preventDefault();
              }}
              className={`h-10 gap-0.5 text-sm sm:text-base rounded-xl px-2 bg-[var(--neutral-1000)] text-[var(--neutral-0)] shadow-blue-400/50 shadow-2xl ${
                isEmpty && "cursor-not-allowed opacity-50"
              }`}
            >
              <GitHub />
              Repository
            </a>
          </div>
        </div>
      </article>
    </AnimationWrapper>
  );
};

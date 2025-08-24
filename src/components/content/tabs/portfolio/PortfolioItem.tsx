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
      <article className="group relative w-full h-full flex flex-col justify-between overflow-hidden rounded-2xl shadow-2xl cursor-pointer transition-all ease-in-out duration-300 border border-[var(--border)] hover:shadow-blue-400/10 hover:-translate-0.5">
        <header className="p-2.5 overflow-hidden">
          <div
            className="w-full min-h-[250px] rounded-xl bg-center bg-cover group-hover:scale-110 transition-transform duration-400 ease-in-out"
            style={{
              backgroundImage: `url(${data.image})`,
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </header>
        <div className="w-full my-4 px-4 pb-4">
          <h3 className="text-xl">{data.title}</h3>
          <p className="text-[.8rem]">{data.description}</p>
        </div>

        <footer className=" flex w-full h-[5rem] items-center justify-between px-4 cursor-pointer border-t border-[var(--border)]">
          <div className="flex gap-2">
            <a
              href={data.liveUrl}
              target="_blank"
              className="primary-gradient-bg h-10 w-10 text-sm sm:text-base rounded-lg text-[var(--neutral-0)] shadow-blue-400/50 shadow-2xl"
            >
              <Language />
            </a>
            <span
              className={`accent-gradient p-px rounded-lg hover:scale-105 hover:-translate-0.5 ${
                isEmpty && "!cursor-not-allowed opacity-20"
              }`}
            >
              <a
                href={data.githubUrl}
                target={isEmpty ? "_self" : "_blank"}
                onClick={(e) => {
                  if (isEmpty) e.preventDefault();
                }}
                className={`h-10 w-10 text-sm sm:text-base rounded-lg bg-[var(--neutral-300)] text-[var(--neutral-0)] shadow-blue-400/50 shadow-2xl  transition-all ease-in-out duration-300
                ${isEmpty && "!cursor-not-allowed opacity-20"}`}
              >
                <GitHub className="text-[var(--neutral-900)]" />
              </a>
            </span>
          </div>
          <span className="bg-[var(--border)] w-px h-full"></span>
          <ul className="flex items-center">
            {data.tools.map((tool, index) => (
              <li
                key={index}
                className="h-10 w-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-full border border-[var(--border)] not-first:-ml-4 bg-[var(--neutral-300)]"
              >
                <img
                  src={tool}
                  alt=""
                  className="w-6 h-6 scale-75 sm:scale-100"
                />
              </li>
            ))}
          </ul>
        </footer>
      </article>
    </AnimationWrapper>
  );
};

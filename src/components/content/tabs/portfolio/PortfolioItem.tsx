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
      <article className="group relative w-full overflow-hidden rounded-2xl shadow-2xl cursor-pointer transition-all ease-in-out duration-300 border border-[var(--border)] hover:shadow-blue-400/10 hover:-translate-0.5 hover:border-[var(--primary-color)]">
        <header className="p-2.5 overflow-hidden">
          <div
            className="w-full min-h-[250px] rounded-xl bg-center bg-cover group-hover:scale-110 transition-transform duration-400 ease-in-out"
            style={{
              backgroundImage: `url(${data.image})`,
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </header>
        <div className="w-full my-4 px-4 pb-4 border-b border-[var(--border)]">
          <h3 className="text-xl">{data.title}</h3>
          <p className="text-[.8rem]">{data.description}</p>
        </div>

        <footer className="relative flex w-full px-4 pb-4 items-center justify-between cursor-pointer transition-all ease-in-out duration-300">
          <div className="flex gap-2">
            <a
              href={data.liveUrl}
              target="_blank"
              className="h-10 text-sm sm:text-base rounded-xl px-2 bg-[var(--primary-color)] text-white shadow-blue-400/50 shadow-2xl border border-transparent hover:bg-transparent hover:border-[var(--primary-color)] hover:text-[var(--neutral-900)] hover:scale-105 hover:-translate-0.5 transition-all ease-in-out duration-300"
            >
              <Language />
            </a>
            <a
              href={data.githubUrl}
              target={isEmpty ? "_self" : "_blank"}
              onClick={(e) => {
                if (isEmpty) e.preventDefault();
              }}
              className={`h-10 text-sm sm:text-base rounded-xl px-2 bg-transparent border border-[var(--primary-color)] text-[var(--neutral-0)] shadow-blue-400/50 shadow-2xl hover:bg-[var(--primary-color)] hover:border-transparent hover:scale-105 hover:-translate-0.5 transition-all ease-in-out duration-300
                ${isEmpty && "cursor-not-allowed opacity-50"}`}
            >
              <GitHub className="text-[var(--neutral-900)] hover:text-white" />
            </a>
          </div>
          <span className="bg-[var(--border)] w-px absolute -top-4 bottom-0 left-[50%]"></span>
          <ul className="flex items-center mt-2.5">
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

import { Skills } from "../career/Skills";
import { servicesData } from "./AboutData";
// import { Hobbies } from "./Hobbies";

export const About = () => {
  return (
    <div className="w-full px-6 mt-8">
      <header className="w-full flex flex-col items-start gap-3">
        <p className="text-sm sm:text-base">
          Hi, I’m a{" "}
          <strong className="text-[var(--primary-color)]">
            front-end web developer
          </strong>{" "}
          with an information systems background, passionate about creating
          user-centered web solutions that feel intuitive and look great. I love
          bridging the gap between{" "}
          <strong className="text-[var(--primary-color)]">UX/UI design</strong>{" "}
          and development, crafting clean, reliable code to bring seamless
          experiences to life.
        </p>
        <p className="text-sm sm:text-base">
          I’m genuinely curious about{" "}
          <strong className="text-[var(--primary-color)]">
            software product management
          </strong>{" "}
          and always eager to learn, tackling new challenges to grow my skills.
          Every project is an opportunity to build something meaningful, respect
          the user’s needs, and help clients achieve their vision.
        </p>
      </header>
      <div className="w-full flex flex-col items-start mt-12 py-6 border-t border-[var(--border)]">
        <h3 className="text-3xl">Services I offer</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {servicesData.map((card) => (
            <div
              key={card.id}
              className="w-full flex flex-col items-center sm:flex-row sm:items-start gap-3 bg-[var(--neutral-300)] rounded-lg px-4 py-5 border-t border-[var(--border)] shadow-lg"
            >
              <figure className="rounded-xl bg-[var(--neutral-0)] p-2 flex items-center justify-center shadow-sm shadow-blue-400/20">
                <img src={card.icon} alt="" className="min-w-8 w-9" />
              </figure>
              <div className="flex flex-col items-center text-center sm:text-left sm:items-start gap-2">
                <h4 className="text-sm sm:text-xl">{card.title}</h4>
                <p className="text-sm sm:text-base">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <article className="w-full pt-6 border-t border-[var(--border)]">
        <header className="w-full">
          <h3 className="text-lg sm:text-2xl">Soft & Technical Skills</h3>
        </header>
        <Skills />
      </article>{" "}
    </div>
  );
};

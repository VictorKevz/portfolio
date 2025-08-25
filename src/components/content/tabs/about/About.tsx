import { HighlightedText } from "../../../HighlightedText";
import { Skills } from "../career/Skills";
import { servicesData } from "./AboutData";
// import { Hobbies } from "./Hobbies";

export const About = () => {
  return (
    <div className="w-full px-6 mt-8">
      <header className="w-full flex flex-col items-start gap-3">
        <p className="text-sm sm:text-base">
          Hi, I’m a <HighlightedText text="Front-end Web Developer" /> with a
          background in information systems, passionate about building web
          applications that are both functional and delightful to use. I thrive
          on translating complex business needs into intuitive interfaces,
          bridging the gap between <HighlightedText text="User Experience" />{" "}
          and clean, maintainable code to deliver seamless digital solutions.
        </p>
        <p className="text-sm sm:text-base">
          I’m deeply interested in{" "}
          <HighlightedText text="Software Product Management" /> and enjoy
          exploring how technical decisions impact user satisfaction and
          business outcomes. Each project is a chance to create meaningful
          experiences, respect the user’s needs, and help clients achieve
          measurable results.
        </p>
      </header>
      <div className="w-full flex flex-col items-start mt-12 py-6 border-t border-[var(--border)]">
        <h3 className="text-lg sm:text-3xl">Helping You Succeed Online</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {servicesData.map((card) => (
            <div
              key={card.id}
              className={`pt-px rounded-t-lg rounded-b-xl w-full`}
              style={{ backgroundColor: `var(--${card.color})` }}
            >
              <div className="w-full h-full flex flex-col items-center sm:flex-row sm:items-start gap-3 bg-[var(--neutral-300)] rounded-lg px-4 py-5 shadow-lg">
                <span className="primary-gradient-bg p-px rounded-lg">
                  <span className="rounded-lg bg-[var(--neutral-100)] text-[var(--neutral-900)] p-2 flex items-center justify-center shadow-sm shadow-blue-400/20">
                    <card.icon />
                  </span>
                </span>
                <div className="flex flex-col items-center text-center sm:text-left sm:items-start gap-2">
                  <h4 className="text-sm sm:text-xl">{card.title}</h4>
                  <p className="text-sm sm:text-base">{card.description}</p>
                </div>
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

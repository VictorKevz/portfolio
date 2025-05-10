import webDev from "../../../assets/images/webDev.png";
import content from "../../../assets/images/content.png";
import support from "../../../assets/images/support.png";
import wordpress from "../../../assets/images/wordpress.svg";

export const About = () => {
  return (
    <section className="w-full px-4">
      <header className="w-full flex flex-col items-start gap-3">
        <p>
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
        <p>
          I’m genuinely curious about{" "}
          <strong className="text-[var(--primary-color)]">
            software product management
          </strong>{" "}
          and always eager to learn, tackling new challenges to grow my skills.
          Every project is an opportunity to build something meaningful, respect
          the user’s needs, and help clients achieve their vision.
        </p>
      </header>
      <div className="w-full flex flex-col items-start mt-8">
        <h3 className="text-2xl">Services I offer</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {servicesData.map((card) => (
            <div
              key={card.id}
              className="w-full flex items-start gap-3 bg-[var(--neutral-300)] rounded-2xl px-4 py-5"
            >
              <figure className="rounded-xl bg-[var(--neutral-0)] w-20 p-2 flex items-center justify-center">
                <img src={card.icon} alt="" className="" />
              </figure>
              <div className="flex flex-col items-start gap-2">
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const servicesData = [
  {
    id: "custom-dev",
    title: "Custom Web Development",
    description:
      "Tailored websites built from scratch for performance, responsiveness, and business impact.",
    icon: webDev,
  },
  {
    id: "wordpress",
    title: "WordPress Development",
    description:
      "Flexible, fast, and scalable sites using WordPress and modern visual builders.",
    icon: wordpress,
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description:
      "Branded social media graphics and short-form videos that boost online engagement.",
    icon: content,
  },
  {
    id: "maintenance",
    title: "Website Maintenance",
    description:
      "Routine updates, speed improvements, and security checks to keep sites running smoothly.",
    icon: support,
  },
];

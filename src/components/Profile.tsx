import {
  GitHub,
  Language,
  LinkedIn,
  LocationOnOutlined,
  MailLockOutlined,
  PhonelinkRingOutlined,
} from "@mui/icons-material";
import profilePic from "../assets/images/profile.png";

const Profile = () => {
  return (
    <aside className="xl:max-w-72 w-full xl:min-h-[40rem] bg-[var(--neutral-0)] flex flex-col items-start gap-4 px-4 pt-8 border border-[var(--border)] rounded-3xl shadow-lg transition-all duration-300 ease-in-out">
      <header className="w-full flex items-center gap-4 xl:flex-col">
        <div
          className="min-h-20 w-20 sm:w-40 sm:min-h-40 lg:w-35 xl:min-h-35 bg-cover px-1.5 rounded-2xl bg-[var(--neutral-300)] flex items-center justify-center shadow-lg"
          style={{ backgroundImage: `url(${profilePic})` }}
        ></div>
        <div className="flex flex-col items-start gap-2 xl:items-center">
          <h1 className="text-lg sm:text-4xl xl:text-2xl text-[var(--neutral-900)] font-bold">
            Victor Kuwandira
          </h1>
          <span className="bg-[var(--neutral-300)] text-sm h-7 flex items-center justify-center text-[var(--neutral-900)] px-2 rounded-full">
            Web Developer
          </span>
        </div>
      </header>
      <ul className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-5 py-8 mt-3 border-t border-[var(--border)]">
        {contactData.map((item) => (
          <li key={item.id} className="flex items-center gap-4 w-full">
            <span className="flex items-center justify-center h-12 w-12 bg-[var(--neutral-300)] border border-[var(--border)] rounded-xl text-[var(--primary-color)] shadow-lg">
              <item.icon />
            </span>
            <p className="flex flex-col text-[var(--neutral-900)] font-normal text-sm">
              <span className="uppercase text-xs text-[var(--neutral-400)]">
                {item.label}
              </span>
              {item.value}
            </p>
          </li>
        ))}
      </ul>
      <ul className="w-full flex items-center justify-between gap-3 py-8 border-t border-[var(--border)]">
        {socialLinksData.map((link) => (
          <li key={link.id}>
            <a
              href={link.url}
              target={`${link.id === "website" ? "_self" : "_blank"}`}
            >
              <link.icon
                fontSize="medium"
                className="socialIcons text-[var(--neutral-400)]  hover:cursor-pointer hover:text-[var(--primary-color)] hover:-translate-y-1 hover:scale-125"
              />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Profile;

const contactData = [
  {
    id: 1,
    label: "email",
    value: "contact@victorkevz.com",
    icon: MailLockOutlined,
  },
  {
    id: 2,
    label: "phone",
    value: "+358 40 4639819",
    icon: PhonelinkRingOutlined,
  },
  {
    id: 3,
    label: "Languages",
    value: "English | Mandarin | Finnish",
    icon: Language,
  },
  {
    id: 4,
    label: "location",
    value: "Oulu, Finland",
    icon: LocationOnOutlined,
  },
];

const socialLinksData = [
  { id: "github", icon: GitHub, url: "https://github.com/VictorKevz" },
  {
    id: "linkedIn",
    icon: LinkedIn,
    url: "https://www.linkedin.com/in/victor-kuwandira/",
  },
  { id: "website", icon: Language, url: "https://victorkevz.com" },
];

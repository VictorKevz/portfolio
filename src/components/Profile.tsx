import {
  GitHub,
  KeyboardDoubleArrowDown,
  KeyboardDoubleArrowUp,
  Language,
  LinkedIn,
  LocationOnOutlined,
  MailLockOutlined,
  PhonelinkRingOutlined,
} from "@mui/icons-material";
import { motion } from "framer-motion";

import profilePic from "../assets/images/profile-pic.png";
import { useState } from "react";
import { ContainerVariants } from "../animations/animations";
import { HighlightedText } from "./HighlightedText";

const Profile = () => {
  const [showContacts, setShowContacts] = useState<boolean>(false);
  return (
    <motion.aside
      layout
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 150,
      }}
      variants={ContainerVariants(-100)}
      initial="hidden"
      animate="visible"
      className="glass-container max-w-screen-lg xl:max-w-72 w-full sticky top-10 flex flex-col items-start gap-4 px-4 pt-8 border border-[var(--border)] rounded-3xl shadow-lg"
    >
      <header className="w-full flex items-center gap-4 xl:flex-col pb-3">
        <div
          className="min-h-20 w-20 sm:w-40 sm:min-h-40 lg:w-30 xl:min-h-30 bg-cover px-1.5 rounded-2xl flex items-center justify-center shadow-lg opacity-90"
          style={{ backgroundImage: `url(${profilePic})` }}
        ></div>
        <div className="flex flex-col items-start gap-2 xl:items-center">
          <h1 className="text-lg sm:text-4xl xl:text-xl text-[var(--neutral-900)] font-bold uppercase">
            <HighlightedText text="Victor Kuwandira" />
          </h1>
          <div className="accent-gradient rounded-full">
            <span className="bg-[var(--neutral-300)] text-sm h-8 flex items-center justify-center text-[var(--neutral-900)] px-3 rounded-full">
              Web Developer
            </span>
          </div>
        </div>
      </header>

      <div
        className={`w-full flex-col xl:flex ${
          showContacts ? "flex" : "hidden"
        } `}
      >
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-5 py-8 mt-3 border-t border-[var(--border)]">
          {contactData.map((item) => (
            <li key={item.id} className="flex items-center gap-4 w-full">
              <div className="accent-gradient rounded-xl">
                <span className="flex items-center justify-center h-12 w-12 bg-[var(--neutral-300)] border border-[var(--border)] rounded-xl text-[var(--primary-color)] shadow-lg">
                  <item.icon />
                </span>
              </div>
              <p className="flex flex-col text-[var(--neutral-900)] font-normal text-sm">
                <span className="uppercase text-xs text-[var(--neutral-400)] font-bold">
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
                target="_blank"
                className="primary-gradient-bg h-8 w-8 rounded-lg hover:-translate-y-1 hover:scale-105"
              >
                <link.icon
                  fontSize="medium"
                  className="text-[var(--neutral-0)]  hover:cursor-pointer"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="xl:hidden">
        <button
          type="button"
          onClick={() => setShowContacts(!showContacts)}
          className="absolute z-10 top-0 right-0 accent-gradient  text-[var(--neutral-0)] font-extrabold text-sm px-4! py-px sm:p-2! rounded-bl-xl  rounded-tr-[1.43rem]"
        >
          <span className="sm:hidden">
            {showContacts ? (
              <KeyboardDoubleArrowUp />
            ) : (
              <KeyboardDoubleArrowDown />
            )}
          </span>
          <span className="hidden sm:flex">
            {showContacts ? "Hide contacts" : "Show contacts"}
          </span>
        </button>
      </div>
    </motion.aside>
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
  { id: "website", icon: Language, url: "https://chatbot.victorkevz.com" },
];

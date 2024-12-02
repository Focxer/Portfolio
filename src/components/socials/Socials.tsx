import { Download, Github, LinkedinIcon, MailIcon } from "lucide-react";
import SocialsItem from "./SocialsItem";

const Socials = () => {
  return (
    <>
      <div className="w-full flex gap-2 md:gap-4 flex-wrap items-center justify-center lg:justify-start">
        <SocialsItem
          link="https://github.com/focxer"
          icon={Github}
          text="/focxer"
        ></SocialsItem>
        <SocialsItem
          link="https://www.linkedin.com/in/focxer/"
          icon={LinkedinIcon}
          text="/focxer"
        ></SocialsItem>
        <SocialsItem
          link="mailto:focxer@hotmail.com"
          icon={MailIcon}
          text="focxer@hotmail.com"
        ></SocialsItem>
      </div>

      <div className="mt-4 flex justify-center lg:justify-start">
        <a
          href="https://drive.google.com/file/d/1h6usSi2B0zrBTbjI-Qg1Yeyh738CCWB0/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="flex gap-1 items-center text-blue-400 hover:text-blue-600 w-fit"
        >
          <Download />
          Download CV
        </a>
      </div>
    </>
  );
};

export default Socials;

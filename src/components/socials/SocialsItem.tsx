import { LucideIcon } from "lucide-react";

type ISocialsItem = {
  link: string;
  icon: LucideIcon;
  text: string;
};
const SocialsItem = (props: ISocialsItem) => {
  return (
    <>
      <a
        href={props.link}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-1"
      >
        <props.icon className="bg-violet-400 text-zinc-50 p-1 rounded-xl shadow-md" />
        {props.text}
      </a>
    </>
  );
};

export default SocialsItem;

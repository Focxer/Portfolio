import { ExternalLink, Github } from "lucide-react";

type IProjectsItem = {
  icon: string;
  title: string;
  link: string;
  code: string;
  text: string;
};

const ProjectsItem = (props: IProjectsItem) => {
  return (
    <>
      <div className="flex flex-col hover:scale-105 drop-shadow-lg duration-200">
        <img src={props.icon} className="object-contain" />
        <div className="flex flex-col py-4 px-8 gap-2 bg-white">
          <h2 className="font-semibold text-lg">{props.title}</h2>
          <p className="text-zinc-800">{props.text}</p>
        </div>
        <div className="flex">
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1 bg-violet-500  text-zinc-100 font-semibold p-4 hover:opacity-80 duration-200 flex-1"
          >
            <ExternalLink /> Ver projeto
          </a>
          <a
            href={props.code}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-1 bg-zinc-500 text-zinc-100 font-semibold p-4 hover:opacity-80 duration-200 flex-1"
          >
            <Github /> Ver código
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectsItem;

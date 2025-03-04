import { Link } from "react-router-dom";
import { ExternalLink, Layers } from "lucide-react";
import Logo from "../../assets/projects.webp";
import { Divider } from "../divider";
import { FromLeft } from "../../animations";

const mainProjectLink = "https://focxer.github.io/olivaMetal/";

function Projects() {
  return (
    <>
      <div className="bg-white mx-2 pb-8">
        <Divider text="Projetos em Destaque" />
        <div className="grid grid-cols-1 lg:grid-cols-2 lg gap-8 mx-4 py-10">
          <FromLeft className="flex justify-center">
            <img
              src={Logo}
              alt="Imagem dos projetos"
              className="w-full h-full md:max-w-[480px] max-h-[480px]"
            />
          </FromLeft>

          <div className="flex flex-col justify-center items-center xl:items-start gap-4">
            <h2 className="text-3xl mb-4 font-bold text-zinc-800">
              Último projeto
            </h2>
            <p className="text-sm md:text-base font-medium text-zinc-600">
              Freelance para uma empresa do ramo de metalurgica e usinagens
              Oliva Metal, o projeto usa ReactJs e Tailwind.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-2 items-center mt-6 w-full">
              <a
                href={mainProjectLink}
                target="_blank"
                rel="noreferrer"
                className="bg-violet-400 rounded-md flex items-center justify-center gap-2 text-zinc-50 font-semibold py-2 px-4 hover:bg-violet-500 shadow-md w-full md:w-auto duration-200 hover:-translate-y-1"
              >
                <ExternalLink /> Ver projeto
              </a>
              <Link
                to="/projetos"
                className="bg-zinc-400 rounded-md flex items-center justify-center gap-2 text-zinc-50 font-semibold py-2 px-4 hover:bg-zinc-500 shadow-md w-full md:w-auto duration-200 hover:-translate-y-1"
              >
                <Layers /> Todos os projetos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;

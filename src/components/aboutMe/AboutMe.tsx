import { FromLeft } from "../../animations";
import Logo from "../../assets/main-image.webp";
import Socials from "../socials/Socials.js";

function AboutMe() {
  return (
    <>
      <div
        id="__sobremim"
        className="flex flex-col lg:flex-row gap-8 items-center justify-between scroll-m-16 bg-white mx-2 overflow-hidden"
      >
        <FromLeft>
          <img
            src={Logo}
            alt="Main image"
            className="w-full h-56 md:h-96 lg:h-full object-cover lg:max-w-[480px] max-h-[480px]"
          />
        </FromLeft>

        <div className="flex flex-col items-center lg:items-start justify-center gap-8 pb-8 px-4 lg:px-8 font-medium lg:max-w-[600px]">
          <h1 className="text-3xl font-bold text-zinc-800">Olá mundo!</h1>

          <div className="divide-y-8 divide-transparent text-zinc-600 text-sm md:text-base">
            <p>
              Meu nome é Bruno, tenho 26 anos e sou{" "}
              <span className="font-semibold text-zinc-800">
                Desenvolvedor Web Fullstack.
              </span>
            </p>

            <p>
              <span className="font-semibold text-zinc-800">
                Técnico em Informática para Internet{" "}
              </span>
              na ETEC Lauro Gomes
            </p>

            <p>
              Atualmente trabalho na{" "}
              <a href="https://lbca.com.br/" target="__blank">
                <span className="font-semibold text-[#660e3d] hover:opacity-70 duration-200">
                  Lee, Brock & Camargo Advogados
                </span>{" "}
              </a>
              como{" "}
              <span className="font-semibold text-zinc-800">
                Desenvolvedor FullStack Jr.
              </span>{" "}
              mas faço alguns freelas por ai.
            </p>

            <div className="mt-4">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;

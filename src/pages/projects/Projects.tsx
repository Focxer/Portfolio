import ProjectsItem from "./ProjectsItem";
import rhowertIcon from "../../assets/projects/rhowert.png";
import calculator from "../../assets/projects/calculator.png";
import nlw22 from "../../assets/projects/nlw22.png";
import olivaMetal from "../../assets/projects/olivaMetal.png";
import { Header } from "../../containers";
import { Divider } from "../../components/divider";
import { ScrollRestoration } from "react-router-dom";
import Observer from "../../components/Observer";

function Projects() {
  Observer();
  return (
    <>
      <ScrollRestoration />
      <Header />
      <div className="max-w-[1200px] mt-6 w-full">
        <Divider text="Projetos" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
          <ProjectsItem
            icon={olivaMetal}
            title="Oliva Metal"
            link="https://focxer.github.io/olivaMetal/"
            code="https://github.com/Focxer/olivaMetal"
            text="Freelance para uma empresa do ramo de metalurgica e usinagens OlivaMetal, o projeto usa ReactJs e Tailwind."
          ></ProjectsItem>
          <ProjectsItem
            icon={rhowertIcon}
            title="Rhowert"
            link="https://focxer.github.io/Rhowert/"
            code="https://github.com/Focxer/Rhowert"
            text="Proposta de remodelagem do atual layout do site da empresa Rhowert mantendo as caracteristicas existentes."
          ></ProjectsItem>
          <ProjectsItem
            icon={nlw22}
            title="Linktree NLW 2022"
            link="https://focxer.github.io/NLW22/"
            code="https://github.com/Focxer/NLW22"
            text="Projeto feito na Next Level Week 2022 da Rocketseat visando colocar em prática CSS e HTML básico."
          ></ProjectsItem>
          <ProjectsItem
            icon={calculator}
            title="Calculadora do iOS"
            link="https://focxer.github.io/iOS_Calc/"
            code="https://github.com/Focxer/iOS_Calc"
            text="Projeto de lógica simples."
          ></ProjectsItem>
        </div>
      </div>
    </>
  );
}

export default Projects;

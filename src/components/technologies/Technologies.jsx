import html from "../../assets/languages/html.png";
import css from "../../assets/languages/css.png";
import javascript from "../../assets/languages/javascript.png";
import php from "../../assets/languages/php.png";
import typescript from "../../assets/languages/typescript.png";
import git from "../../assets/languages/git.png";
import aws from "../../assets/languages/aws.png";
import mysql from "../../assets/languages/mysql.png";
import react from "../../assets/languages/react.png";
import TechnologiesItem from "./TechnologiesItem";
import { Divider } from "../divider";

function Technologies() {
  return (
    <div className="mx-2">
      <Divider text="Linguagens e Tecnologias" />
      <div className="pb-6 hover:cursor-default">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-2">
          <TechnologiesItem
            icon={html}
            title="HTML 5"
            text="Código bem estruturado, seguindo a semântica do HTML, a estrutura e organização são fundamentais para a manutenção do código."
            color="text-[#ff6d00]"
            alt="HTML 5"
          ></TechnologiesItem>

          {/* CSS Section */}
          <TechnologiesItem
            icon={css}
            title="CSS 3"
            text="Layout consistente e agradavel aos olhos, utilizando CSS puro ou algum framework como Tailwind, Bootstrap, entre outros."
            color="text-[#35c1f1]"
            alt="CSS 3"
          ></TechnologiesItem>

          {/* JavaScript Section */}
          <TechnologiesItem
            icon={javascript}
            title="JavaScript"
            text="POO, testes unitários com Jest, manipulação de DOM e clean code para manter o codigo sempre bem organizado, reaproveitável e com menos chances de bugs."
            color="text-[#ffd600]"
            alt="JavaScript"
          ></TechnologiesItem>

          {/* TypeScript Section */}
          <TechnologiesItem
            icon={typescript}
            title="TypeScript"
            text="Fundamental em qualquer projeto. Boas práticas de TS facilitam a vida do próximo dev na hora de dar manutenção no código."
            color="text-[#007acc]"
            alt="TypeScript"
          ></TechnologiesItem>

          {/* AWS Section */}
          <TechnologiesItem
            icon={aws}
            title="AWS"
            text="Atualmente trabalho com alguns serviços da AWS como Lambda, SQS, SNS, DynamoDB, S3 e Opensearch. Estou num projeto onde a arquitetura é Event Driven com Microservices"
            color="text-[#232f3f]"
            alt="AWS"
          ></TechnologiesItem>

          {/* ReactJS Section */}
          <TechnologiesItem
            icon={react}
            title="ReactJs"
            text="Meu primeiro framework frontend, atualmente o meu preferido para fazer freelances e projetos pessoais por ser simples e rápido de utilizar."
            color="text-[#00d8ff]"
            alt="ReactJs"
          ></TechnologiesItem>

          {/* PHP Section */}
          <TechnologiesItem
            icon={php}
            title="PHP"
            text="Minha primeira linguagem backend, conhecimento básico e prático de operações de banco de dados, querys simples com MySQL e aplicação fullstack."
            color="text-[#b6a8c8]"
            alt="PHP"
          ></TechnologiesItem>

          {/* MySQL Section */}
          <TechnologiesItem
            icon={mysql}
            title="MySQL"
            text="Conhecimento básico em MySQL, incluindo criação, consulta e manipulação de dados em tabelas. Integração com PHP e Express para operações básicas."
            color="text-[#00796b]"
            alt="MySQL"
          ></TechnologiesItem>

          {/* Git Section */}
          <TechnologiesItem
            icon={git}
            title="Git"
            text="Versionamento de código, trabalho em equipe e organização. Um conhecimento de git é indispensável no dia a dia do dev."
            color="text-[#ff4f2e]"
            alt="Git"
          ></TechnologiesItem>
        </div>
      </div>
    </div>
  );
}

export default Technologies;

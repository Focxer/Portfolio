import { AboutMe } from "../../components/aboutMe";
import { Contact } from "../../components/contact";
import Technologies from "../../components/technologies/Technologies";
import { Header } from "../../containers";
import { ScrollRestoration } from "react-router-dom";
import Projects from "../../components/projects/Projects";

function Home() {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <div className="max-w-[1200px] mt-20 w-full">
        <div id="__sobremim" className="mb-6 scroll-m-16">
          <AboutMe />
        </div>

        <div id="__linguagens" className="scroll-m-16">
          <Technologies />
        </div>

        <div id="__projetos" className="mb-6 scroll-m-16">
          <Projects />
        </div>

        <div id="__contato" className="mb-4 scroll-m-16">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default Home;

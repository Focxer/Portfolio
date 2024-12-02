import { AboutMe } from "../../components/aboutMe";
import { Contact } from "../../components/contact";
import Technologies from "../../components/technologies/Technologies";
import Observer from "../../components/Observer";
import { Header } from "../../containers";
import { ScrollRestoration } from "react-router-dom";
import Projects from "../../components/projects/Projects";

function Home() {
  Observer();
  return (
    <>
      <ScrollRestoration />
      <Header />
      <div className="max-w-[1200px] mt-6 w-full">
        <div className="mb-6">
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

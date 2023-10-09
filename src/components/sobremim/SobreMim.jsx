import Logo from '../../assets/main-image.webp'
import { Download, Github, LinkedinIcon, MailIcon } from 'lucide-react'

function SobreMim() {
  return (
    <>
      <div
        id="__sobremim"
        className="flex justify-around gap-4 pt-2 mb-10 bg-zinc-50 shadow-lg flex-wrap lg:flex-nowrap scroll-m-16"
      >
        <img src={Logo} alt="Main image" className="w-1/2 rounded-lg" />

        <div className="flex flex-col items-center xl:items-start justify-center gap-8 pb-8">
          <h1 className="text-4xl mb-4 font-bold text-zinc-800">Olá_mundo!</h1>

          <div className="divide-y-8 divide-transparent text-zinc-800 text-md w-2/3">
            <p>
              Meu nome é Bruno, tenho 24 anos e sou{' '}
              <span className="font-semibold">Desenvolvedor Web.</span>
            </p>

            <p>
              Atualmente estou estudando{' '}
              <span className="font-semibold">React e Tailwind.</span> Este
              projeto é o resultado do meu atual conhecimento, estou em busca da
              minha primeira oportunidade no mercado para aperfeiçoar minhas
              habilidades e me desenvolver na área.
            </p>

            <p>
              <span className="font-semibold">
                Técnico em Informática para Internet
              </span>{' '}
              na ETEC Lauro Gomes e lá aprendi um pouco sobre{' '}
              <span className="font-semibold">Front-End e Back-End,</span> fui
              Desenvolvedor Full-stack no meu TCC e o tema foi E-Commerce.
            </p>

            <div className="flex gap-2 mt-4 flex-wrap xl:flex-nowrap justify-center lg:justify-start">
              <a
                href="https://github.com/focxer"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1"
              >
                <Github className="bg-violet-400 text-zinc-50 p-1 rounded-xl shadow-md" />
                /focxer
              </a>
              <a
                href="https://www.linkedin.com/in/focxer/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1"
              >
                <LinkedinIcon className="bg-violet-400 text-zinc-50 p-1 rounded-xl shadow-md" />
                /focxer
              </a>
              <a
                href="mailto:focxer@hotmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1"
              >
                <MailIcon className="bg-violet-400 text-zinc-50 p-1 rounded-xl shadow-md" />
                focxer@hotmail.com
              </a>
            </div>

            <div className="mt-4 flex justify-center lg:justify-start">
              <a
                href="https://drive.google.com/file/d/1RaczEghhlWWC4GLf7k9UZ28xLIhwWNvR/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="flex gap-1 items-center text-blue-400 hover:text-blue-600 w-fit"
              >
                <Download />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SobreMim

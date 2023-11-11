import { Link } from 'react-router-dom'
import { ExternalLink, Layers } from 'lucide-react'
import Logo from '../../assets/projects.webp'

function Projetos() {
  return (
    <>
      <div className="bg-white mx-2 pb-8">
        <div className="flex justify-center items-center bg-violet-400">
          <h2 className="text-center font-semibold text-white text-lg md:text-3xl p-4">
            Projetos em Destaque
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg gap-8 mx-4">
          <div className="init-left flex justify-center">
            <img
              src={Logo}
              alt="Imagem dos projetos"
              className="w-full h-full md:max-w-[480px] max-h-[480px]"
            />
          </div>

          <div className="flex flex-col justify-center items-center xl:items-start gap-4">
            <h2 className="text-3xl mb-4 font-bold text-zinc-800">
              Último projeto
            </h2>
            <p className="text-sm md:text-base font-medium text-zinc-600">
              Novo design para o site da empresa Rhowert. Utilizei HTML e CSS,
              foi uma proposta feita por mim após notar a necessidade de
              responsividade e alteração no contraste sem fugir do padrão das
              cores da empresa.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-2 items-center mt-6 w-full">
              <a
                href="https://focxer.github.io/Rhowert/"
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
  )
}

export default Projetos

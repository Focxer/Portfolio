import { Link } from 'react-router-dom'
import { ExternalLink, Layers } from 'lucide-react'
import Logo from '../../assets/projects.webp'

function Projetos() {
  return (
    <>
      <div className="bg-zinc-50 shadow-lg rounded-b-lg">
        <div className="bg-violet-400 flex justify-center items-center font-semibold text-zinc-50 text-2xl p-4 rounded-t-xl">
          <h2>Projetos</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between lg gap-8 p-8">
          <div className="flex justify-center">
            <img
              src={Logo}
              alt="Imagem dos projetos"
              className="w-full h-full md:max-w-[480px] max-h-[480px]"
            />
          </div>

          <div className="flex flex-col justify-center items-center xl:items-start gap-4 text-zinc-800">
            <h2 className="text-3xl mb-4 font-bold">Último_projeto!</h2>
            <p>
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

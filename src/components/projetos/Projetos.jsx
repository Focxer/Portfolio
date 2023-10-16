import { Link } from 'react-router-dom'
import { ExternalLink, Layers } from 'lucide-react'

function Projetos() {
  return (
    <>
      <div className="bg-zinc-100 rounded-b-lg">
        <div className="bg-violet-400 flex justify-center items-center font-semibold text-zinc-50 text-2xl pb-2 pt-4 px-4 mb-4 rounded-t-lg">
          <h2>Projetos</h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 justify-between lg gap-8 pb-10 bg-zinc-100 rounded-xl shadow-xl p-4">
          <div className="rounded-xl border-2 border-zinc-200">
            <iframe
              src="https://focxer.github.io/Rhowert/"
              className="rounded-xl w-full h-[600px] shadow-md p-2"
            ></iframe>
          </div>

          <div className="flex flex-col justify-center items-center xl:items-start">
            <h2 className="text-3xl mb-4 font-bold text-zinc-800">
              Último_projeto!
            </h2>
            <p className="font-semibold text-zinc-500 w-3/4">
              Novo design para o site da empresa Rhowert. Utilizei HTML e CSS,
              foi uma proposta feita por mim após notar a necessidade de
              responsividade e alteração nas cores sem fugir do padrão das cores
              da empresa.
            </p>

            <div className="flex flex-col md:flex-row justify-center xl:justify-start gap-2 items-center mt-6 w-3/4">
              <a
                href="https://focxer.github.io/Rhowert/"
                target="_blank"
                rel="noreferrer"
                className="bg-violet-400 rounded-lg flex items-center gap-2 text-zinc-50 font-semibold py-2 px-4 hover:bg-violet-500 shadow-md w-full md:w-auto duration-200 hover:scale-105"
              >
                <ExternalLink /> Ver projeto
              </a>
              <Link
                to="/projetos"
                className="bg-zinc-400 rounded-lg flex items-center gap-2 text-zinc-50 font-semibold py-2 px-4 hover:bg-zinc-500 shadow-md w-full md:w-auto duration-200 hover:scale-105"
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

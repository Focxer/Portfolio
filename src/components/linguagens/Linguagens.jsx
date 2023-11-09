import html from '../../assets/linguagens-icons/html.svg'
import css from '../../assets/linguagens-icons/css.svg'
import javascript from '../../assets/linguagens-icons/javascript.svg'
import php from '../../assets/linguagens-icons/php.svg'
import mysql from '../../assets/linguagens-icons/mysql.svg'
import react from '../../assets/linguagens-icons/react.svg'

function Linguagens() {
  return (
    <>
      <div className="pb-4 hover:cursor-default">
        <div className="flex justify-center items-center mb-4 bg-violet-400 mx-4">
          <h2 className="text-center font-semibold text-white text-lg md:text-3xl p-4">
            Linguagens e Tecnologias
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {/* HTML Section */}
          <div className="init-bottom flex flex-col items-center gap-6 bg-white rounded-lg shadow-md hover:scale-100 md:hover:scale-105 duration-150">
            <div className="bg-zinc-200 w-full flex justify-center py-4 rounded-t-lg">
              <img
                src={html}
                alt="HTML icon"
                className="w-full h-full max-w-[96px] max-h-[96px] bg-white p-3 rounded-full"
              />
            </div>
            <div className="flex flex-col gap-4 px-8 pb-12 text-left">
              <p className="text-zinc-700 font-medium">☆ Intermediário</p>
              <h2 className="text-2xl text-[#ff6d00] font-bold">HTML 5</h2>
              <p className="text-zinc-600">
                Código bem estruturado, seguindo a semântica do HTML. Busco
                sempre comentar cada seção de elementos para facilitar a
                manutenção.
              </p>
            </div>
          </div>

          {/* CSS Section */}
          <div className="init-bottom flex flex-col items-center gap-6 bg-white rounded-lg shadow-md hover:scale-100 md:hover:scale-105 duration-150">
            <div className="bg-zinc-200 w-full flex justify-center py-4 rounded-t-lg">
              <img
                src={css}
                alt="CSS icon"
                className="w-full h-full max-w-[96px] max-h-[96px] bg-white p-3 rounded-full"
              />
            </div>
            <div className="flex flex-col gap-4 px-8 pb-12 text-left">
              <p className="text-zinc-700 font-medium">☆ Intermediário</p>
              <h2 className="text-2xl text-[#35c1f1] font-bold">CSS 3</h2>
              <p className="text-zinc-600">
                A responsividade de um site é fundamental para a experiência do
                usuário, sempre busco utilizar flexbox e media querys para um
                layout fluido e consistente.
              </p>
            </div>
          </div>

          {/* JavaScript Section */}
          <div className="init-bottom flex flex-col items-center gap-6 bg-white rounded-lg shadow-md hover:scale-100 md:hover:scale-105 duration-150">
            <div className="bg-zinc-200 w-full flex justify-center py-4 rounded-t-lg">
              <img
                src={javascript}
                alt="CSS icon"
                className="w-full h-full max-w-[96px] max-h-[96px] bg-white p-3 rounded-full"
              />
            </div>
            <div className="flex flex-col gap-4 px-8 pb-12 text-left">
              <p className="text-zinc-700 font-medium">☆ Básico</p>
              <h2 className="text-2xl text-[#ffd600] font-bold">JavaScript</h2>
              <p className="text-zinc-600">
                Consigo elaborar alguns funções de baixa complexidade, algumas
                alterações na DOM como cores, display, classes, etc. Tenho uma
                boa lógica de programação e disposição para aprender mais.
              </p>
            </div>
          </div>

          {/* PHP Section */}
          <div className="init-bottom flex flex-col items-center gap-6 bg-white rounded-lg shadow-md hover:scale-100 md:hover:scale-105 duration-150">
            <div className="bg-zinc-200 w-full flex justify-center py-4 rounded-t-lg">
              <img
                src={php}
                alt="PHP icon"
                className="w-full h-full max-w-[96px] max-h-[96px] bg-white p-3 rounded-full"
              />
            </div>
            <div className="flex flex-col gap-4 px-8 pb-12 text-left">
              <p className="text-zinc-700 font-medium">☆ Básico</p>
              <h2 className="text-2xl text-[#b6a8c8] font-bold">PHP</h2>
              <p className="text-zinc-600">
                Sei fazer algumas rotinas básicas, no meu TCC de E-Commerce o
                PHP trazia os dados do banco e enviava para o front como JSON e
                o AJAX montava na tela cada produto. Também tinha login,
                cadastro e o painel do usuário.
              </p>
            </div>
          </div>

          {/* MySQL Section */}
          <div className="init-bottom flex flex-col items-center gap-6 bg-white rounded-lg shadow-md hover:scale-100 md:hover:scale-105 duration-150">
            <div className="bg-zinc-200 w-full flex justify-center py-4 rounded-t-lg">
              <div className="w-full h-full max-w-[96px] max-h-[96px] bg-white p-3 rounded-full">
                <img src={mysql} alt="MySQL icon" />
              </div>
            </div>
            <div className="flex flex-col gap-4 px-8 pb-12 text-left">
              <p className="text-zinc-700 font-medium">☆ Básico</p>
              <h2 className="text-2xl text-[#00796b] font-bold">MySQL</h2>
              <p className="text-zinc-600">
                Consigo fazer CRUD com PHP, algumas querys simples. Não costumo
                usar PDO no PHP, prefiro MySQLI mas estou disposto a aprender e
                aplicar tudo o que me for ensinado.
              </p>
            </div>
          </div>

          {/* ReactJS Section */}
          <div className="init-bottom flex flex-col items-center gap-6 bg-white rounded-lg shadow-md hover:scale-100 md:hover:scale-105 duration-150">
            <div className="bg-zinc-200 w-full flex justify-center py-5 rounded-t-lg">
              <div className="w-full h-full max-w-[96px] max-h-[96px] bg-white p-3 rounded-full">
                <img
                  src={react}
                  alt="MySQL icon"
                  className="w-full h-full max-w-[96px] max-h-[96px]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 px-8 pb-12 text-left">
              <p className="text-zinc-700 font-medium">☆ Básico</p>
              <h2 className="text-2xl text-[#00d8ff] font-bold">ReactJS</h2>
              <p className="text-zinc-600">
                Atualmente estou estudando ReactJS, este é o meu primeiro
                projeto útilizando um framework, não domino muito bem o
                JavaScript mas estou me esforçando bastante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Linguagens

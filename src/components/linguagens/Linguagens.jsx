import html from '../../assets/linguagens-icons/html.svg'
import css from '../../assets/linguagens-icons/css.svg'
import javascript from '../../assets/linguagens-icons/javascript.svg'
import php from '../../assets/linguagens-icons/php.svg'
import mysql from '../../assets/linguagens-icons/mysql.svg'
import react from '../../assets/linguagens-icons/react.svg'

function Linguagens() {
  return (
    <>
      <div className="bg-zinc-100 rounded-b-lg pb-4 hover:cursor-default">
        <div className="bg-violet-400 flex justify-center items-center font-semibold text-zinc-50 text-2xl p-4 mb-8 rounded-t-xl">
          <h2 className="text-center">Linguagens e Tecnologias</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <div className="flex flex-col items-center gap-4 bg-white p-8 rounded-lg shadow-md hover:scale-105 duration-150">
            <img src={html} alt="HTML icon" />
            <p>
              Conhecimento básico em HTML5, busco sempre manter as tags o mais
              semânticas possível.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 bg-white p-8 rounded-lg shadow-md hover:scale-105 duration-150">
            <img src={css} alt="CSS icon" />
            <p>
              Conhecimento básico em CSS3, foi onde eu peguei paixão pelo
              Front-end, gosto de design minimalista e bem clean.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 bg-white p-8 rounded-lg shadow-md hover:scale-105 duration-150">
            <img src={javascript} alt="JavaScript icon" />
            <p>
              Básico em JavaScript, consigo manipular DOM&apos;s, acessar JSON e
              Arrays mas sempre busco aplicar novos conhecimentos.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 bg-white p-8 rounded-lg shadow-md hover:scale-105 duration-150">
            <img src={php} alt="PHP icon" />
            <p>
              Minha primeira linguagem de Back-end, meu TCC foi desenvolvido com
              PHP. O Back-end trazia as informações através de JSON e o AJAX
              montava no Front-end.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 bg-white p-8 rounded-lg shadow-md hover:scale-105 duration-150">
            <img src={mysql} alt="MySQL icon" />
            <p>
              MySQL foi o banco de dados escolhido para o desenvolvimento do meu
              TCC e o CRUD foi feito com PHP.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 bg-white p-8 rounded-lg shadow-md hover:scale-105 duration-150">
            <img src={react} alt="React icon" className="h-14 mt-2 mb-4" />
            <p>
              Atualmente, estou estudando React e migrando meus conceitos. Este
              projeto está sendo desenvolvido em React com Tailwind.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Linguagens

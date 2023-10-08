import { Menu, X } from "lucide-react"
import Logo from '../../components/header/Logo'

function menuOpen(){
  document.getElementById("navBurger").setAttribute("class", "left-0 top-0 absolute h-72 w-screen bg-violet-500");
}

function menuClose(){
  document.getElementById("navBurger").setAttribute("class", "hidden");
}

function Navbar() {
  return (
    <>
        <nav className="hidden md:flex gap-4 text-zinc-500 font-semibold">
            <a href="#__sobremim" className="hover:text-violet-400">Sobre mim</a>
            <a href="#__linguagens" className="hover:text-violet-400">Linguagens</a>
            <a href="#__projetos" className="hover:text-violet-400">Projetos</a>
            <a href="#__contato" className="hover:text-violet-400">Fale comigo</a>
        </nav>

        <nav className="md:hidden">
          <div><Menu onClick={menuOpen}/></div>
        </nav>

        <div id="navBurger" className="hidden left-0 top-0 absolute h-72 w-screen bg-violet-500">
          <div className="bg-white flex justify-between px-6 py-2 items-center">
              <Logo />
              <X onClick={menuClose}/>
          </div>

          <nav className="flex flex-col text-zinc-50 font-semibold divide-y-2 divide-violet-300 shadow-xl" onClick={menuClose}>
            <a href="#__sobremim" className="bg-violet-400 w-full text-center py-4">Sobre mim</a>
            <a href="#__linguagens" className="bg-violet-400 w-full text-center py-4">Linguagens</a>
            <a href="#__projetos" className="bg-violet-400 w-full text-center py-4">Projetos</a>
            <a href="#__contato" className="bg-violet-400 w-full text-center py-4">Fale comigo</a>
          </nav>
        </div>
    </>
  )
}

export default Navbar
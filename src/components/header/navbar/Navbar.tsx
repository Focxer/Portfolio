import { Menu, X } from "lucide-react";
import NavbarItem from "./NavbarItem";

function menuToggle() {
  const menu = document.getElementById("navBurger");
  if (menu?.classList.contains("translate-x-full")) {
    menu.classList.remove("translate-x-full");
  } else {
    menu?.classList.add("translate-x-full");
  }
}

function Navbar() {
  return (
    <>
      <nav className="hidden md:flex gap-6 text-zinc-500 font-semibold">
        <NavbarItem link="/#__sobremim" text="Sobre mim"></NavbarItem>
        <NavbarItem link="/#__linguagens" text="Linguagens"></NavbarItem>
        <NavbarItem link="/#__projetos" text="Projetos"></NavbarItem>
        <NavbarItem link="/#__contato" text="Fale comigo"></NavbarItem>
      </nav>

      <nav className="md:hidden">
        <Menu onClick={menuToggle} className="cursor-pointer" />
      </nav>

      <div
        id="navBurger"
        className="fixed top-0 right-0 h-screen w-3/4 transform translate-x-full transition-transform duration-300 ease-in-out z-50"
      >
        <div className="flex justify-end px-6 py-4 items-center">
          <X onClick={menuToggle} className="cursor-pointer bg-white" />
        </div>

        <nav
          className="flex flex-col text-zinc-50 font-semibold divide-y divide-violet-300 bg-violet-500 h-full"
          onClick={menuToggle}
        >
          <NavbarItem
            link="/#__sobremim"
            text="Sobre mim"
            padding="py-4"
          ></NavbarItem>
          <NavbarItem
            link="/#__linguagens"
            text="Linguagens"
            padding="py-4"
          ></NavbarItem>
          <NavbarItem
            link="/#__projetos"
            text="Projetos"
            padding="py-4"
          ></NavbarItem>
          <NavbarItem
            link="/#__contato"
            text="Fale comigo"
            padding="py-4"
          ></NavbarItem>
        </nav>
      </div>
    </>
  );
}

export default Navbar;

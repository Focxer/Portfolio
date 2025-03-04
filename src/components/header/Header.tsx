import Logo from "./logo/Logo";
import Navbar from "./navbar/Navbar";

function Header() {
  return (
    <>
      <div className="w-full bg-white z-10 fixed top-0 flex justify-center drop-shadow-lg">
        <div className="flex w-full max-w-[1200px] justify-between items-center py-1 px-6 md:px-12">
          <Logo />
          <Navbar />
        </div>
      </div>
    </>
  );
}

export default Header;

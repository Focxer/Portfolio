import { Logo, Navbar } from '../components/header';

function Header() {
  return (
    <>
      <div className="w-full flex justify-between md:justify-around items-center pt-2 px-6 md:px-20 sticky top-0 bg-white">
        <Logo />
        <Navbar />
      </div>
    </>
  )
}

export default Header
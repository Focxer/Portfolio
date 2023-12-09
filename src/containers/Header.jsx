import { Logo, Navbar } from '../components/header'

function Header() {
  return (
    <>
      <div className="w-full bg-white z-10 sticky top-0 flex justify-center shadow-sm">
        <div className="flex w-full max-w-[1200px] justify-between items-center py-1 px-6 md:px-12">
          <Logo />
          <Navbar />
        </div>
      </div>
    </>
  )
}

export default Header

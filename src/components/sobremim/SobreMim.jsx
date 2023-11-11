import Logo from '../../assets/main-image.webp'
import Socials from './Socials.jsx'

function SobreMim() {
  return (
    <>
      <div
        id="__sobremim"
        className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-4 scroll-m-16 lg:px-0 bg-white mx-2"
      >
        <img
          src={Logo}
          alt="Main image"
          className="init-left w-full h-full md:max-w-[480px] max-h-[480px]"
        />

        <div className="flex flex-col items-center lg:items-start justify-center gap-8 pb-8 px-4 lg:px-8 mt-4 font-medium">
          <h1 className="text-4xl font-bold text-zinc-800">Olá mundo!</h1>

          <div className="divide-y-8 divide-transparent text-zinc-600 text-sm md:text-base">
            <p>
              Meu nome é Bruno, tenho 25 anos e sou{' '}
              <span className="font-semibold text-zinc-800">
                Desenvolvedor Web.
              </span>
            </p>

            <p>
              <span className="font-semibold text-zinc-800">
                Técnico em Informática para Internet
              </span>{' '}
              na ETEC Lauro Gomes e fui Desenvolvedor{' '}
              <span className="font-semibold text-zinc-800">Full-stack</span> do
              meu TCC com o tema de E-Commerce.
            </p>

            <Socials />
          </div>
        </div>
      </div>
    </>
  )
}

export default SobreMim

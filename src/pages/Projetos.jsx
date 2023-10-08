import { Layout, ExternalLink, Github, ArrowLeftToLine } from 'lucide-react'
import { Link } from 'react-router-dom'

function Projetos() {
  return (
    <>
      <div className='mt-8 px-2 w-full xl:w-2/3'>
        <div className='bg-zinc-100 rounded-b-lg shadow-xl pb-16 w-full'>
            <div className='bg-violet-400 grid grid-cols-3 items-center font-semibold text-zinc-50 text-2xl pb-2 pt-4 mb-8 rounded-t-lg'>
                  <Link to="/" className='flex gap-1 items-center w-1/4 hover:text-zinc-200'><ArrowLeftToLine className='font-bold ml-4'/><span className='text-sm'>Voltar</span></Link>
                  <h2 className='text-center'>Projetos</h2>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-4'>
                  <div className='flex flex-col items-center font-semibold gap-4 bg-white py-8 px-4 rounded-lg shadow-md hover:scale-105 duration-200'>
                      <Layout className='w-1/2 h-1/2 text-zinc-400'/>
                      <h2>Novo Layout Rhowert</h2>
                      <div className='flex flex-col gap-2'>
                        <a href="https://focxer.github.io/Rhowert/" target="_blank" rel="noreferrer" className="bg-violet-400 rounded-lg flex items-center gap-2 text-zinc-50 font-semibold py-2 px-6 hover:bg-violet-300 shadow-md"><ExternalLink /> Ver projeto</a>
                        <a href="https://github.com/Focxer/Rhowert" target="_blank" rel="noreferrer" className="bg-zinc-300 rounded-lg flex items-center justify-center gap-1 text-zinc-50 font-semibold py-1 hover:bg-zinc-400 shadow-md text-sm"><Github className='h-2/3'/> Ver código</a>
                      </div>
                  </div>

                  <div className='flex flex-col items-center font-semibold gap-4 bg-white py-8 px-4 rounded-lg shadow-md hover:scale-105 duration-200'>
                      <Layout className='w-1/2 h-1/2 text-zinc-400'/>
                      <h2>Calculadora do iOS</h2>
                      <div className='flex flex-col gap-2'>
                        <a href="https://focxer.github.io/iOS_Calc/" target="_blank" rel="noreferrer" className="bg-violet-400 rounded-lg flex items-center gap-2 text-zinc-50 font-semibold py-2 px-6 mt-4 hover:bg-violet-300 shadow-md"><ExternalLink /> Ver projeto</a>
                        <a href="https://github.com/Focxer/iOS_Calc" target="_blank" rel="noreferrer" className="bg-zinc-300 rounded-lg flex items-center justify-center gap-1 text-zinc-50 font-semibold py-1 hover:bg-zinc-400 shadow-md text-sm"><Github className='h-2/3'/> Ver código</a>
                      </div>
                  </div>

                  <div className='flex flex-col items-center font-semibold gap-4 bg-white py-8 px-4 rounded-lg shadow-md hover:scale-105 duration-200'>
                      <Layout className='w-1/2 h-1/2 text-zinc-400'/>
                      <h2>NLW 2022</h2>
                      <div className='flex flex-col gap-2'>
                        <a href="https://focxer.github.io/NLW22/" target="_blank" rel="noreferrer" className="bg-violet-400 rounded-lg flex items-center gap-2 text-zinc-50 font-semibold py-2 px-6 mt-4 hover:bg-violet-300 shadow-md"><ExternalLink /> Ver projeto</a>
                        <a href="https://github.com/Focxer/NLW22" target="_blank" rel="noreferrer" className="bg-zinc-300 rounded-lg flex items-center justify-center gap-1 text-zinc-50 font-semibold py-1 hover:bg-zinc-400 shadow-md text-sm"><Github className='h-2/3'/> Ver código</a>
                      </div>
                  </div>

                  <div className='flex flex-col items-center font-semibold gap-4 bg-white py-8 px-4 rounded-lg shadow-md hover:scale-105 duration-200'>
                      <Layout className='w-1/2 h-1/2 text-zinc-400'/>
                      <h2>MultiDados TI</h2>
                      <div className='flex flex-col gap-2'>
                        <span className="bg-violet-200 rounded-lg flex items-center gap-2 text-zinc-50 font-semibold py-2 px-6 mt-4 hover:bg-violet-300 shadow-md cursor-not-allowed"><ExternalLink /> Indisponível</span>
                        <a href="https://github.com/Focxer/MultidadosTI/tree/master" target="_blank" rel="noreferrer" className="bg-zinc-300 rounded-lg flex items-center justify-center gap-1 text-zinc-50 font-semibold py-1 hover:bg-zinc-400 shadow-md text-sm"><Github className='h-2/3'/> Ver código</a>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default Projetos
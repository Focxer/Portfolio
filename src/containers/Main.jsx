import { Img, Tittle, Text, Linguagens, Projetos } from '../components/main'

function Main() {
  return (
    <>
      <div id='__sobremim' className='flex justify-around gap-4 mt-2 mb-10 bg-zinc-50 shadow-lg flex-wrap lg:flex-nowrap scroll-m-16'>
        <Img />

        <div className='flex flex-col items-center xl:items-start justify-center gap-8 pb-8'>
          <Tittle />
          <Text />
        </div>
      </div>

      <div id='__linguagens' className='scroll-m-16 mb-10'>
        <Linguagens />
      </div>

      <div id='__projetos' className='mb-10 scroll-m-16'>
        <Projetos />
      </div>
    </>
  )
}

export default Main
import { SobreMim } from '../components/sobremim'
import { Linguagens } from '../components/linguagens'
import { Projetos } from '../components/projetos'
import { Contato } from '../components/contato'

function Main() {
  return (
    <>
      <div className="scroll-m-14 mb-10">
        <SobreMim />
      </div>

      <div id="__linguagens" className="scroll-m-14 mb-10">
        <Linguagens />
      </div>

      <div id="__projetos" className="mb-10 scroll-m-14">
        <Projetos />
      </div>

      <div id="__contato" className="mb-10 scroll-m-14">
        <Contato />
      </div>
    </>
  )
}

export default Main

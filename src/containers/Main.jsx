import { SobreMim } from '../components/sobremim'
import { Linguagens } from '../components/linguagens'
import { Projetos } from '../components/projetos'
import { Contato } from '../components/contato'
import Observer from '../components/Observer'
import '../components/Observer.css'

function Main() {
  Observer()
  return (
    <>
      <div className="mb-6">
        <SobreMim />
      </div>

      <div id="__linguagens" className="scroll-m-16">
        <Linguagens />
      </div>

      <div id="__projetos" className="mb-6 scroll-m-16">
        <Projetos />
      </div>

      <div id="__contato" className="mb-4 scroll-m-16">
        <Contato />
      </div>
    </>
  )
}

export default Main

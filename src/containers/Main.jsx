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
      <div className="mb-4 scroll-m-14">
        <SobreMim />
      </div>

      <div id="__linguagens" className="mb-4 scroll-m-14">
        <Linguagens />
      </div>

      <div id="__projetos" className="mb-4 scroll-m-14">
        <Projetos />
      </div>

      <div id="__contato" className="mb-4 scroll-m-14">
        <Contato />
      </div>
    </>
  )
}

export default Main

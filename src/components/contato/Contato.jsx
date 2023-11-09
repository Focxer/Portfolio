import Socials from '../sobremim/Socials'

function Contato() {
  return (
    <>
      <div className="mx-4 bg-white pb-8">
        <div className="flex justify-center items-center bg-violet-400 mb-8">
          <h2 className="text-center font-semibold text-white text-lg md:text-3xl p-4">
            Fale Comigo
          </h2>
        </div>
        <div className="flex flex-col-reverse md:flex-row-reverse justify-center gap-8">
          <form
            action="https://formsubmit.co/focxer@hotmail.com"
            method="post"
            className="flex flex-col items-center justify-center gap-8 px-8 md:px-12 py-12 bg-white rounded-lg shadow-md lg:w-1/3"
          >
            <h1 className="init-right text-4xl md:text-5xl font-bold font-pacifico text-violet-500">
              Recados
            </h1>

            <div className="flex flex-col w-full md:w-full">
              <input
                id="userEmail"
                name="email"
                type="email"
                placeholder="Seu email"
                className="p-2 border-b-2 mb-4"
                required
              />
              <input
                id="userName"
                name="name"
                type="text"
                placeholder="Como posso te chamar?"
                className="p-2 border-b-2 mb-4"
                required
              />
              <textarea
                id="userMessage"
                name="message"
                cols="30"
                rows="5"
                placeholder="Deixe sua mensagem <3"
                className="p-2 border-b-2 mb-4 resize-none"
                required
              ></textarea>
              <input
                id="userSubmit"
                type="submit"
                value="Enviar"
                className="bg-violet-400 hover:bg-violet-500 cursor-pointer p-4 text-white font-semibold text-xl rounded-md shadow-xl hover:-translate-y-1 duration-200"
              />
            </div>
          </form>
          <div className="flex flex-col gap-4 justify-center items-center text-center px-4">
            <h2 className="text-3xl mb-4 font-bold text-zinc-800">
              Te vejo em breve!
            </h2>
            <p className="text-sm md:text-base font-medium text-zinc-600">
              Preencha o formulário que eu te retorno rapidinho combinado?
            </p>
            <Socials />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contato

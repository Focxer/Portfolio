import Logo from '../../assets/getintouch.webp'

function Contato() {
  return (
    <>
      <div className="bg-zinc-50 shadow-lg p-4 flex flex-col lg:flex-row items-center lg:items-center lg:justify-center">
        <form
          action="https://formsubmit.co/focxer@hotmail.com"
          method="post"
          className="flex flex-col items-center justify-center gap-8 pb-8 mt-4 w-full"
        >
          <h1 className="init-hidden text-4xl lg:text-6xl font-bold font-pacifico text-violet-500">
            Fale comigo!
          </h1>

          <div className="flex flex-col w-full md:w-2/3">
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
        <img
          src={Logo}
          alt="Main image"
          className="init-hidden w-full lg:w-1/2 rounded-lg"
        />
      </div>
    </>
  )
}

export default Contato

import React from 'react'
import { Download, Github, LinkedinIcon, MailIcon } from 'lucide-react'

function Socials() {
  return (
    <>
      <div className="flex gap-2 mt-4 flex-wrap xl:flex-nowrap justify-center lg:justify-start">
        <a
          href="https://github.com/focxer"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-1"
        >
          <Github className="bg-violet-400 text-zinc-50 p-1 rounded-xl shadow-md" />
          /focxer
        </a>
        <a
          href="https://www.linkedin.com/in/focxer/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-1"
        >
          <LinkedinIcon className="bg-violet-400 text-zinc-50 p-1 rounded-xl shadow-md" />
          /focxer
        </a>
        <a
          href="mailto:focxer@hotmail.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-1"
        >
          <MailIcon className="bg-violet-400 text-zinc-50 p-1 rounded-xl shadow-md" />
          focxer@hotmail.com
        </a>
      </div>

      <div className="mt-4 flex justify-center lg:justify-start">
        <a
          href="https://drive.google.com/file/d/1RaczEghhlWWC4GLf7k9UZ28xLIhwWNvR/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="flex gap-1 items-center text-blue-400 hover:text-blue-600 w-fit"
        >
          <Download />
          Download CV
        </a>
      </div>
    </>
  )
}

export default Socials

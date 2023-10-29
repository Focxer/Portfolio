import { useEffect } from 'react'

function Observer() {
  useEffect(() => {
    const elements = document.querySelectorAll('.init-hidden')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('init-hidden-off', entry.isIntersecting)
        })
      },
      { threshold: 0.3 },
    )

    elements.forEach((e) => {
      observer.observe(e)
    })
  })
}

export default Observer

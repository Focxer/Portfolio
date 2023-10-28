import { useEffect } from 'react'

function Observer() {
  useEffect(() => {
    const elements = document.querySelectorAll('.init-hidden')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.isIntersecting
          ? entry.target.classList.add('init-hidden-off')
          : console.log('init-hidden')
      })
    })

    elements.forEach((e) => {
      observer.observe(e)
    })
  })
}

export default Observer

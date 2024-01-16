import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import "./color-background.css"

export const ColorBackground = () => {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".first-panel", {
      scrollTrigger: {
        trigger: ".font-header",
        markers: true,
        start: "top +=300",
        scrub: true,
        toggleActions: "play none reverse none"
      },
      background: "linear-gradient(0deg, rgba(7,179,186,1) 0%, rgba(13,152,194,1) 46%, rgba(23,204,175,0.3883928571428571) 100%)"
    })

  })

  return (
    <>
      <div className="container-bg">
        <div className="first-panel">
          <h1 className="font-header">Panel1</h1>
        </div>
      </div>
    </>
  )
}
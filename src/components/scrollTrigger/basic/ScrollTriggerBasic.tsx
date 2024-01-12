import { useEffect, useRef } from 'react'
import './scrollTriggerBasic.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const ScrollTriggerBasic = () => {
  const boxCRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const boxMoveGsap = gsap.context(() => {
      gsap.to(boxCRef.current, {
        scrollTrigger: {
          trigger: boxCRef.current,
          /**
           * las acciones que se pueden poner en toggleActions son:
           *  - play
           *  - pause
           *  - resume
           *  - reverse
           *  - restart
           *  - reset
           *  - complete
           *  - none
           *
           * en toggleActions:
           *  primer elemento: cuando pase el scroll por el elemento, este se accionara
           *  segundo elemento: cuando se pase por debajo del elemento, se activara
           *  tercer elemento: cuando haga scroll de abajo hacia arriba y vea el elemento, se activará
           *  cuarto elemento: cuando pase el scroll de abajo hacia arriba, se activara
           */
          toggleActions: 'restart pause resume none',
        },
        x: 700,
        rotation: 360,
        duration: 4,
        repeat: -1,
      })
    })

    return () => boxMoveGsap.revert()
  }, [])

  return (
    <>
      <div className="box a">a</div>
      <div className="box b">b</div>
      <div className="box c" ref={boxCRef}>
        c
      </div>
      <div className="box a">d</div>
      <div className="box b">e</div>
    </>
  )
}

export default ScrollTriggerBasic

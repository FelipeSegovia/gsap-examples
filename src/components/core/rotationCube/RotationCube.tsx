import gsap from 'gsap'
import { useLayoutEffect, useRef } from 'react'
import CardComponent from '../../cardComponent/CardComponent'

const RotationCube = () => {
  const boxRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const contextGsap = gsap.context(() => {
      gsap.to(boxRef.current, {
        duration: 10,
        repeat: -1,
        rotation: 360,
      })
    })
    return () => contextGsap.revert()
  }, [])

  return (
    <CardComponent>
      <p>Rotación 360</p>
      <div
        ref={boxRef}
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: 'orange',
        }}
      />
    </CardComponent>
  )
}

export default RotationCube

import { useEffect, useRef } from "react"
import gsap from "gsap"

export const useHorizontalGsap = () => {
  const boxHorizontalRef = useRef(null)


  useEffect(() => {
    const boxHorizontalGsap = gsap.context(() => {
      gsap.to(boxHorizontalRef.current, {
        x: 100,
        duration: 2
      })
    })

    return () => boxHorizontalGsap.revert()

  }, [])

  return { boxHorizontalRef }
}

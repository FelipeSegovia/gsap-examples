import gsap from "gsap"
import { useEffect, useRef } from "react"

export const useVerticalGsap = () => {
  const boxVerticalRef = useRef(null)


  useEffect(() => {
    const boxVerticalGsap = gsap.context(() => {
      gsap.to(boxVerticalRef.current, {
        y: 50,
        duration: 2
      })
    })

    return () => boxVerticalGsap.revert()

  }, [])

  return { boxVerticalRef }
}

import { useRef, useEffect } from "react";
import gsap from "gsap";

export const useDiagonalGsap = () => {
  const boxDiagonalRef = useRef(null)

  useEffect(() => {
    const boxDiagonalGsap = gsap.context(() => {
      gsap.to(boxDiagonalRef.current, {
        y: 50,
        duration: 2
      })
      gsap.to(boxDiagonalRef.current, {
        x: 50,
        duration: 2
      })
    })

    return () => boxDiagonalGsap.revert()

  }, [])

  return { boxDiagonalRef }
}

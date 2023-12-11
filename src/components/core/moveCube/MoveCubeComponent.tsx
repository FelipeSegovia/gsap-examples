import CardComponent from "../../cardComponent/CardComponent";
import { useDiagonalGsap } from "./gsap/useDiagonalGsap";
import { useHorizontalGsap } from "./gsap/useHorizontalGsp";
import { useVerticalGsap } from "./gsap/useVerticalGsap";
import "./moveCubeComponent.css"

const MoveCubeComponent = () => {

  const { boxHorizontalRef } = useHorizontalGsap()
  const { boxVerticalRef } = useVerticalGsap()
  const { boxDiagonalRef } = useDiagonalGsap()

  return (
    <div className="content-card">
      <CardComponent>
        <p>Movimiento Horizontal</p>
        <div ref={boxHorizontalRef} style={{ width: '100px', height: '100px', backgroundColor: 'green' }} />
      </CardComponent>
      <CardComponent>
        <p>Movimiento Vertical</p>
        <div ref={boxVerticalRef} style={{ width: '100px', height: '100px', backgroundColor: 'green' }} />
      </CardComponent>
      <CardComponent>
        <p>Movimiento Diagonal</p>
        <div ref={boxDiagonalRef} style={{ width: '100px', height: '100px', backgroundColor: 'green' }} />
      </CardComponent>
    </div>
  )
}

export default MoveCubeComponent

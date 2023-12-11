import { ReactNode } from 'react'
import './cardComponent.css'

type PropsCard = {
  children: ReactNode
}

const CardComponent = ({ children }: PropsCard) => {
  return <div className="card-component">{children}</div>
}

export default CardComponent

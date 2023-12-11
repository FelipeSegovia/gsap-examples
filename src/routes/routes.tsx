import { createBrowserRouter } from 'react-router-dom'
import RouteComponent from './RouteComponent'
import RotationCube from '../components/core/rotationCube/RotationCube.tsx'
import MoveCubeComponent from '../components/core/moveCube/MoveCubeComponent.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RouteComponent />,
  },
  {
    path: 'core',
    children: [

      {
        path: 'rotation-cube',
        element: <RotationCube />,
      },
      {
        path: 'move-cube',
        element: <MoveCubeComponent />,
      },
    ],
  },
])

export default router

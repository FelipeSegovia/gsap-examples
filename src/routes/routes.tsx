import { createBrowserRouter } from 'react-router-dom'
import RouteComponent from './RouteComponent'
import RotationCube from '../components/core/rotationCube/RotationCube.tsx'
import MoveCubeComponent from '../components/core/moveCube/MoveCubeComponent.tsx'
import ScrollTriggerBasic from '../components/scrollTrigger/basic/ScrollTriggerBasic.tsx'
import ScrollTriggerStartEnd from '../components/scrollTrigger/start-end/ScrollTriggerStartEnd.tsx'
import { TimeLineComponent } from '../components/timeline/TimeLineComponent.tsx'
import { ColorBackground } from '../components/scrollTrigger/color-background/ColorBackground.tsx'

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
  {
    path: 'scroll-trigger',
    children: [
      {
        path: 'basic',
        element: <ScrollTriggerBasic />,
      },
      {
        path: 'start-to-end',
        element: <ScrollTriggerStartEnd />,
      },
      {
        path: 'change-color',
        element: <ColorBackground />
      }
    ],
  },{
    path: "/timeline",
    element: <TimeLineComponent />
  }
])

export default router

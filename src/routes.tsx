import type { RouteRecord } from 'vite-react-ssg'
import RootLayout from './components/layout/RootLayout'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import RoomDetail, { getStaticPaths as roomPaths } from './pages/RoomDetail'
import Programme from './pages/Programme'
import Speakers from './pages/Speakers'
import NotFound from './pages/NotFound'

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'rooms', element: <Rooms /> },
      {
        path: 'rooms/:slug',
        element: <RoomDetail />,
        getStaticPaths: () => roomPaths(),
      },
      { path: 'programme', element: <Programme /> },
      { path: 'speakers', element: <Speakers /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]

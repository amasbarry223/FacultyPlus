import { createBrowserRouter } from 'react-router-dom'
import Home from '@/components/Home'
import About from '@/pages/About'
import Services from '@/pages/Services'
import Contact from '@/pages/Contact'
import Tarification from '@/pages/Tarification'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/tarification',
    element: <Tarification />,
  },
])


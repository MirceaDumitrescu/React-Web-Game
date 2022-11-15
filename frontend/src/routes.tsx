import { createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/homepage/homepage'
import RegisterComponent from './pages/register/register'
import LoginComponent from './pages/login/login'
import ProfilePageComponent from './pages/profilePage/profilePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/login',
    element: <LoginComponent />,
  },
  {
    path: '/register',
    element: <RegisterComponent />,
  },
  {
    path: '/profile',
    element: <ProfilePageComponent />,
  },
])

export default router

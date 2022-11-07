import RegisterComponent from './pages/register/register'
import LoginComponent from './pages/login/login'
import Homepage from './pages/homepage/homepage'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage></Homepage>,
  },
  {
    path: '/login',
    element: <LoginComponent></LoginComponent>,
  },
  {
    path: '/register',
    element: <RegisterComponent></RegisterComponent>,
  },
])

export default router

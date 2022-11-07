import { createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/homepage/homepage'
import LoginComponent from './pages/login/login'
import RegisterComponent from './pages/register/register'

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

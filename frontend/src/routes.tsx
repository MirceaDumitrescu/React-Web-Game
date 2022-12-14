import { createBrowserRouter } from 'react-router-dom'
import Homepage from './pages/homepage/homepage'
import RegisterComponent from './pages/register/register'
import LoginComponent from './pages/login/login'
import ProfilePageComponent from './pages/profilePage/profilePage'
import AuthGuard from './components/AuthGuard/AuthGuard'
import CharacterCreation from './pages/character-creation/chracter-creation'
import CharacterSelect from './pages/character-selection/character-selection'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthGuard>
        <Homepage />
      </AuthGuard>
    ),
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
    element: (
      <AuthGuard>
        <ProfilePageComponent />
      </AuthGuard>
    ),
  },
  {
    path: '/char-create',
    element: (
      // <AuthGuard>
      <CharacterCreation />
      // </AuthGuard>
    ),
  },
  {
    path: '/char-select',
    element: (
      // <AuthGuard>
      <CharacterSelect />
      // </AuthGuard>
    ),
  },
])

export default router

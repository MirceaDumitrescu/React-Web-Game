import { Navigate } from 'react-router-dom'
import { useLoggedIn, useAdminUser } from '../../features/hooks/hooks'
import { User } from '../../features/interfaces/interfaces'
import { SpinnerComponent } from '../SpinnerComponent/SpinnerComponent'

const AuthGuard = ({ children }: any) => {
  // const data = JSON.parse(localStorage.getItem('user') as string) as User

  const isLoggedIn = useLoggedIn()
  // const isAdmin = useAdminUser(data)

  if (isLoggedIn === undefined) {
    return <SpinnerComponent />
  }

  return isLoggedIn ? children : <Navigate to='/login' />
}

export default AuthGuard

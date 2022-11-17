import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AuthGuard = ({ children }: any) => {
  const loggedStatus = useSelector((state: any) => state.user.value)

  return loggedStatus ? children : <Navigate to='/login' />
}

export default AuthGuard

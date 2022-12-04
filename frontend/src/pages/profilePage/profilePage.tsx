import { useNavigate } from 'react-router-dom'
import './profilePage.scss'
import { setLogout } from '../../features/reducers/loginStatusReducer'
import { warningToast } from '../../components/toasts/toasts'
import { useAppDispatch } from '../../features/hooks/hooks'
import { User } from '../../features/interfaces/interfaces'
import Cookies from 'universal-cookie'

function ProfilePageComponent() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const cookies = new Cookies()
  const user = JSON.parse(localStorage.getItem('user') as string) as User

  const logoutFunction = () => {
    dispatch(setLogout())
    localStorage.removeItem('user')
    cookies.remove('token')
    navigate('/login')
  }

  return (
    <div className='profile'>
      <h1 className='profile__form__title'>Profile Page</h1>
      <div className='profile__form'>
        <p>Email: {user.email}</p>
      </div>
      <button className='profile__form__btn' onClick={logoutFunction}>
        Log Out
      </button>
    </div>
  )
}

export default ProfilePageComponent

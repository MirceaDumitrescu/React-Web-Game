import { useNavigate } from 'react-router-dom'
import './profilePage.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setLogout } from '../../features/reducers/loginStatusReducer'
import { warningToast } from '../../components/toasts/toasts'

function ProfilePageComponent() {
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const user = useSelector((state: any) => state.user.value)

  const logoutFunction = () => {
    dispatch(setLogout())
    warningToast('You are logged out! Bye Bye!')
    navigate('/login')
  }

  return (
    <div className='profile'>
      <h1 className='profile__form__title'>Profile Page</h1>
      <div className='profile__form'>
        <p>Username: {user.user?.username} </p>
        <p>Email: {user.user?.email}</p>
      </div>
      <button className='profile__form__btn' onClick={logoutFunction}>
        Log Out
      </button>
    </div>
  )
}

export default ProfilePageComponent

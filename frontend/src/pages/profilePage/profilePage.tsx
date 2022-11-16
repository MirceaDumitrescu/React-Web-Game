import { useNavigate } from 'react-router-dom'
import '../register/register.scss'
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
    <div className='card'>
      <h1 className='card__form__title'>Profile Page</h1>
      <div className='card__form'>
        <p>Username: {user.username} </p>
        <p>Email: {user.email}</p>
      </div>
      <button className='card__form__btn' onClick={logoutFunction}>
        Log Out
      </button>
    </div>
  )
}

export default ProfilePageComponent

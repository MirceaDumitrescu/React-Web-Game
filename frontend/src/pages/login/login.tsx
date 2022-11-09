import './login.scss'
import FormGenerator from '../formGenerator/formGenerator'
import inputConfigs from './config_login'
import { Link, useNavigate } from 'react-router-dom'
import { successToast, errorToast, warningToast } from '../../components/toasts'
import { useDispatch } from 'react-redux'
import { setLogin } from '../../features/reducers/loginStatusReducer'

// onClick={() => {
//   dispatch(login({ name: 'adrian', email: 'adrian@mail.com' }))
// }}

const LoginComponent = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmit = (data: any) => {
    const userData = JSON.parse(localStorage.getItem('users') || '{}')
    if (data.email !== userData.email) {
      errorToast('Account does not exist!')
    } else if (data.password != userData.password) {
      warningToast('Incorect password!')
    } else {
      dispatch(setLogin({ username: userData.username, email: userData.email }))
      successToast('Welcome!')
      return navigate('/profile')
    }
  }
  return (
    <div className='card'>
      <h4 className='card__form__title'>Login Form</h4>
      <FormGenerator inputConfigs={inputConfigs} onSubmit={onSubmit}></FormGenerator>
      <h4>
        <Link to='/register'>Missing an account? Register here!</Link>
      </h4>
    </div>
  )
}

export default LoginComponent

import './login.scss'
import configBtnLogin from './config_btn_login'
import FormGenerator from '../../components/formGenerator/formGenerator'
import inputConfigs from './config_login'
import { useNavigate } from 'react-router-dom'
import { successToast, errorToast } from '../../components/toasts/toasts'
import { loginUsername } from '../../api/api.login'
import { setLogin } from '../../features/reducers/loginStatusReducer'
import { useLocalStorage, useAppDispatch } from '../../features/hooks/hooks'
import Cookies from 'universal-cookie'

const LoginComponent = () => {
  const navigate = useNavigate()
  const cookies = new Cookies()
  const dispatch = useAppDispatch()
  const [userData, setUserData] = useLocalStorage('user', '{}' as string)

  interface FormData {
    email: string
    password: string
  }

  const onSubmit = async (data: FormData) => {
    try {
      const response = await loginUsername(data)
      if (response.error) {
        errorToast(response.error)
      } else {
        const userData = {
          token: response.token,
          ...response.user,
        }
        setUserData(userData)
        dispatch(setLogin(userData))
        cookies.set('token', response.token, { path: '/' })
        successToast('Welcome!')
        return navigate('/profile')
      }
    } catch (err: any) {
      console.error(err)
    }
  }

  return (
    <div className='form__login' data-testid='login-form'>
      <h4 className='form__title'>Login Form</h4>
      <FormGenerator inputConfigs={inputConfigs} onSubmit={onSubmit} btnConfigs={configBtnLogin} />
    </div>
  )
}

export default LoginComponent

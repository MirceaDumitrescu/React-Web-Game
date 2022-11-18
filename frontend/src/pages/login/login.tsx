import './login.scss'
import configBtnLogin from './config_btn_login'
import FormGenerator from '../../components/formGenerator/formGenerator'
import inputConfigs from './config_login'
import { useNavigate } from 'react-router-dom'
import { successToast, errorToast } from '../../components/toasts/toasts'
import { useDispatch } from 'react-redux'
import { setLogin } from '../../features/reducers/loginStatusReducer'
import { logUser } from '../../api/api.login'

const LoginComponent = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  interface FormData {
    email: string
    password: string
  }

  const onSubmit = async (data: FormData) => {
    try {
      const response = await logUser(data)
      if (response.error) {
        errorToast(response.error)
      } else {
        dispatch(setLogin({ user: response.user }))
        successToast('Welcome!')
        return navigate('/profile')
      }
    } catch (error: any) {
      console.error(error)
    }
  }

  return (
    <div className='form__login' data-testid='login-form'>
      <h4 className='form__title'>Login Form</h4>
      <FormGenerator
        inputConfigs={inputConfigs}
        onSubmit={onSubmit}
        btnConfigs={configBtnLogin}
      ></FormGenerator>
    </div>
  )
}

export default LoginComponent

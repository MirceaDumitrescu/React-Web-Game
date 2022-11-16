import './login.scss'
import inputConfigs from './config_login'
import configBtnLogin from './config_btn_login'
import FormGenerator from '../formGenerator/formGenerator'
import BtnGenerator from '../button/buttonGenerator'
import { useNavigate } from 'react-router-dom'
import { successToast, errorToast } from '../../components/toasts'
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
        dispatch(setLogin({ email: data.email }))
        successToast('Welcome!')
        return navigate('/profile')
      }
    } catch (error: any) {
      console.error(error)
    }
  }

  return (
    <div className='card'>
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

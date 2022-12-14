import configs from './config_register'
import configBtnRegister from './config_btn_register'
import FormGenerator from '../../components/formGenerator/formGenerator'
import './register.scss'
import { useNavigate } from 'react-router-dom'
import { successToast, errorToast } from '../../components/toasts/toasts'
import { registerUser } from '../../api/auth.register'

const RegisterComponent = () => {
  const navigate = useNavigate()

  interface FormData {
    username: string
    email: string
    password: string
    confirmPass: string
  }

  interface UserData {
    username: string
    email: string
    password: string
  }

  const onSubmit = async (data: FormData) => {
    const userData: UserData = {
      username: data.username,
      email: data.email,
      password: data.password,
    }
    if (data.password === data.confirmPass) {
      try {
        const response = await registerUser(userData)
        if (response.status === 200) {
          successToast('User registered successfully')
          navigate('/login')
        }
        errorToast('Something went wrong')
      } catch (error) {
        errorToast('Error creating user')
      }
    } else {
      errorToast('Passwords do not match!')
    }
  }

  return (
    <div className='form__register'>
      <h4 className='form__title'>Register Form</h4>
      <FormGenerator
        onSubmit={onSubmit}
        inputConfigs={configs}
        btnConfigs={configBtnRegister}
      ></FormGenerator>
    </div>
  )
}

export default RegisterComponent

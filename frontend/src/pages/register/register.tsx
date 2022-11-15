import configs from './config_register'
import FormGenerator from '../formGenerator/formGenerator'
import './register.scss'
import { Link, useNavigate } from 'react-router-dom'
import { successToast, errorToast } from '../../components/toasts'
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

  const onSubmit = (data: FormData) => {
    const userData: UserData = {
      username: data.username,
      email: data.email,
      password: data.password,
    }
    if (data.password === data.confirmPass) {
      registerUser(userData)
      successToast('Account was registered!')
      return navigate('/login')
    } else {
      errorToast('Passwords do not match!')
    }
  }

  return (
    <div className='card'>
      <h4 className='form__title'>Register Form</h4>
      <FormGenerator onSubmit={onSubmit} inputConfigs={configs}></FormGenerator>
      <button className='form__redirect'>
        <Link className='form__redirect__link' to='/login'>
          Already have an account? Login here!
        </Link>
      </button>
    </div>
  )
}

export default RegisterComponent

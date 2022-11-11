import configs from './config_register'
import { v4 as uuidv4 } from 'uuid'
import FormGenerator from '../formGenerator/formGenerator'
import './register.scss'
import { Link, useNavigate } from 'react-router-dom'
import { successToast, errorToast } from '../../components/toasts'

const RegisterComponent = () => {
  const uuid = uuidv4()
  const navigate = useNavigate()

  interface FormData {
    username: string
    email: string
    password: string
    confirmPass: string
  }

  const onSubmit = (data: FormData) => {
    const userData = { id: uuid, ...data }
    if (data.password === data.confirmPass) {
      localStorage.setItem('users', JSON.stringify(userData))
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

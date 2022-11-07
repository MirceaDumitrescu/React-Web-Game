import configs from './config_register'
import { v4 as uuidv4 } from 'uuid'
import FormGenerator from '../formGenerator/formGenerator'
import './register.scss'
import router from '../../routes'
import { RouterProvider, Link } from 'react-router-dom'

const RegisterComponent = () => {
  const uuid = uuidv4()

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
      alert('Account was registered!')
    } else {
      alert('Passwords do not match!')
    }
  }

  return (
    <div className='card'>
      <h4 className='card__form__title'>Register Form</h4>
      <FormGenerator onSubmit={onSubmit} inputConfigs={configs}></FormGenerator>
      <h5>
        <Link to='/login'> Already have an account? Go to Login!</Link>
      </h5>
    </div>
  )
}

export default RegisterComponent

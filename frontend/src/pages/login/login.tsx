import './login.scss'
import FormGenerator from '../formGenerator/formGenerator'
import inputConfigs from './config_login'

const LoginComponent = () => {
  const onSubmit = (data: any) => {
    const userData = JSON.parse(localStorage.getItem('user') || '{}')
    if (data.email != userData.email) {
      return alert('Account do not exist! Please register.')
    } else if (data.password != userData.password && data.email === userData.email) {
      return alert('Incorect password!')
    } else {
      return alert('You are logged in')
    }
  }

  return (
    <div className='card'>
      <h4 className='card__form__title'>Login Form</h4>
      <FormGenerator inputConfigs={inputConfigs} onSubmit={onSubmit}></FormGenerator>
    </div>
  )
}

export default LoginComponent

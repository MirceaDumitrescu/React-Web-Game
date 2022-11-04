import './login.scss'
import { useForm } from 'react-hook-form'
import FormGeneratorLogin from '../formGenerator/formGeneratorLogin'
import configsLogin from './config_login'

const LoginComponent = () => {
  const onSubmit = (data: any) => {
    console.log('I hate this shit sometimes!')
  }

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     email: '',
  //     password: '',
  //   },
  // })

  // const watchEmail: string = watch('email')
  // const watchPassword: string = watch('password')
  // console.log(watchEmail, watchPassword)

  // const userData: any = JSON.parse(localStorage.getItem('users') || '{}')

  // console.log(userData.email, userData.password)

  // const mailValidation = () => {
  //   if (watchEmail != userData.email) {
  //     return 'No account exists with the provided email!'
  //   }
  // }

  // const passValidation = () => {
  //   if (watchPassword != userData.password) {
  //     return 'Invalid password'
  //   }
  // }

  // const errorsRender = (field: any) => {
  //   if (field && field.type === 'required') {
  //     return <span role='alert'>This is required!</span>
  //   } else if (field && field.type === 'validate') {
  //     return <span role='alert'>Invalid credentials!</span>
  //   }
  // }

  return (
    <div className='card'>
      <FormGeneratorLogin configsLogin={configsLogin} onSubmit={onSubmit}></FormGeneratorLogin>
    </div>
  )
}

export default LoginComponent

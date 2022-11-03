import './login.scss'
import { useForm } from 'react-hook-form'

const LoginComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const watchEmail: string = watch('email')
  const watchPassword: string = watch('password')
  const userData: any = JSON.parse(localStorage.getItem('users') || '{}')

  console.log(userData.email, userData.password)

  const mailValidation = () => {
    if (watchEmail != userData.email) {
      return 'No account exists with the provided email!'
    }
  }

  const passValidation = () => {
    if (watchPassword != userData.password) {
      return 'Invalid password'
    }
  }

  const errorsRender = (field: any) => {
    if (field && field.type === 'required') {
      return <span role='alert'>This is required!</span>
    } else if (field && field.type === 'validate') {
      return <span role='alert'>Invalid credentials!</span>
    }
  }

  return (
    <div className='card'>
      <form
        className='card__form'
        onSubmit={handleSubmit(() => {
          return console.log('You are logged in!')
        })}
      >
        <h4 className='card__form__title'>Login</h4>
        <div className='card__form__group'>
          <label>Email Adress:</label>
          <input
            id='log-email'
            type='email'
            {...register('email', {
              required: true,
              validate: mailValidation,
            })}
            className='card__form__group__input'
          ></input>
          {errorsRender(errors.email)}
        </div>
        <div className='card__form__group'>
          <label>Password</label>
          <input
            type='password'
            {...register('password', { required: true, validate: passValidation })}
            className='card__form__group__input'
          ></input>
          {errorsRender(errors.password)}
        </div>
        <button className='card__form__btn' type='submit'>
          Log In
        </button>
      </form>
    </div>
  )
}

export default LoginComponent

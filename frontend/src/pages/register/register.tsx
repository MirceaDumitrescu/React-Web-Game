import { useForm } from 'react-hook-form'
import './register.scss'

const RegisterComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPass: '',
    },
  })

  console.log(errors)

  return (
    <div className='card'>
      <form
        className='card__form'
        onSubmit={handleSubmit((data) => {
          console.log(data)
        })}
      >
        <h4 className='card__form__title'>Register</h4>
        <div className='card__form__group'>
          <label htmlFor='name'>Name:</label>
          <input
            id='name'
            type='text'
            {...register('name', { required: true, minLength: 3 })}
            className='card__form__group__input'
          ></input>
          {errors.name && errors.name.type === 'required' && (
            <span role='alert'>This is required</span>
          )}
        </div>
        <div className='card__form__group'>
          <label>Email address:</label>
          <input
            id='email'
            type='email'
            {...register('email', { required: true, minLength: 3 })}
            className='card__form__group__input'
          ></input>
          {errors.email && errors.email.type === 'required' && (
            <span role='alert'>This is required</span>
          )}
          {errors.email && errors.email.type === 'minLength'}
        </div>
        <div className='card__form__group'>
          <label>Password:</label>
          <input
            id='password'
            type='password'
            {...register('password', { required: true, minLength: 8, maxLength: 20 })}
            className='card__form__group__input'
          ></input>
          {errors.password && errors.password.type === 'required' && (
            <span role='alert'>This is required</span>
          )}
          {errors.password && errors.password.type === 'minLength' && (
            <span role='alert'>Password can not be shorter than 8 characters!</span>
          )}
          {errors.password && errors.password.type === 'maxLength' && (
            <span role='alert'>Password can not be longer than 20 characters!</span>
          )}
        </div>
        <div className='card__form__group'>
          <label htmlFor='confirmPass'>Confirm password:</label>
          <input
            id='confirmPass'
            type='password'
            {...register('confirmPass', {
              required: true,
              minLength: 8,
              maxLength: 20,
              validate: (val: string) => {
                if (watch('password') != val) {
                  return 'Your password do not match!'
                }
              },
            })}
            className='card__form__group__input'
          ></input>
          {errors.confirmPass && errors.confirmPass.type === 'required' && (
            <span role='alert'>This is required</span>
          )}
          {errors.confirmPass && errors.confirmPass.type === 'minLength' && (
            <span role='alert'>Password can not be shorter than 8 characters!</span>
          )}
          {errors.confirmPass && errors.confirmPass.type === 'maxLength' && (
            <span role='alert'>Password can not be longer than 20 characters!</span>
          )}
          {errors.confirmPass && errors.confirmPass.type === 'validate' && (
            <span role='alert'>The passwords do not match!</span>
          )}
        </div>
        <button id='btn-submit' className='card__form__btn' type='submit'>
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterComponent

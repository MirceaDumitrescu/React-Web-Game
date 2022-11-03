import { useForm } from 'react-hook-form'
import { validate } from 'uuid'
import '../login/login.scss'

interface FormLogin {
  configsLogin: any
  onSubmit: (data: any) => void
}

const FormGeneratorLogin = (param: FormLogin) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()

  const fieldsWatched = watch()

  return (
    <div className='card'>
      <form className='card__form' onSubmit={handleSubmit(() => param.onSubmit(fieldsWatched))}>
        <h4 className='card__form__title'>Login Form</h4>
        {param.configsLogin.map((config: any) => (
          <div key={config.name} className='card__form__group'>
            <label>{config.label}</label>
            <input
              type={config.type}
              className='card__form__group__input'
              {...register(config.name, config.validation)}
            />
            {errors[config.name]?.type === 'required' && (
              <span role='alert'>This is required!</span>
            )}
            {errors[config.name]?.type === 'validate' && (
              <span role='alert'>{validate(config.validate)}</span>
            )}
          </div>
        ))}
        <button type='submit' className='card__form__btn'>
          Login
        </button>
      </form>
    </div>
  )
}

export default FormGeneratorLogin

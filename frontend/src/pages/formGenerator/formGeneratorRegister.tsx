import { useForm } from 'react-hook-form'
import '../register/register.scss'

interface FormProps {
  onSubmit: (data: any) => void
  inputConfigs: any
}

const FormGenerator = (props: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()

  const fieldsWatched = watch()

  return (
    <form className='card__form' onSubmit={handleSubmit(() => props.onSubmit(fieldsWatched))}>
      <h4 className='card__form__title'>Register Form</h4>
      {props.inputConfigs.map((config: any) => (
        <div key={config.name} className='card__form__group'>
          <label>{config.label}</label>
          <input
            type={config.type}
            className='card__form__group__input'
            {...register(config.name, config.validation)}
          />
          {errors[config.name]?.type === 'required' && (
            <span role='alert'>This field is required!</span>
          )}
          {errors[config.name]?.type === 'minLength' && (
            <span role='alert'>Password cannot be shorter than 8 characters!</span>
          )}
          {errors[config.name]?.type === 'maxLength' && (
            <span role='alert'>Password cannot be longer than 20 characters!</span>
          )}
        </div>
      ))}
      <button type='submit' className='card__form__btn'>
        Register
      </button>
    </form>
  )
}
export default FormGenerator

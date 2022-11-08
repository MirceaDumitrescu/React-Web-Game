import { useForm } from 'react-hook-form'
import '../register/register.scss'
import '../login/login.scss'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface FormProps {
  onSubmit: (data: any) => void
  inputConfigs?: any
  configsLogin?: any
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
      {props.inputConfigs.map((config: any) => (
        <div key={config.name} className='card__form__group'>
          <label>{config.label}</label>
          <input
            type={config.type}
            className={config.className}
            value={config.value}
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
    </form>
  )
}
export default FormGenerator

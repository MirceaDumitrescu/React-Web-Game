import { useForm } from 'react-hook-form'
import BtnGenerator from '../button/buttonGenerator'
import './formGenerator.scss'

interface FormProps {
  onSubmit: (data: any) => void
  inputConfigs?: any
  btnConfigs?: any
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
    <div className='form__group'>
      <form className='form' onSubmit={handleSubmit(() => props.onSubmit(fieldsWatched))}>
        {props.inputConfigs.map((config: any) => (
          <div key={config.name} className='form__group'>
            <label>{config.label}</label>
            <input
              type={config.type}
              className={config.className}
              value={config.value}
              {...register(config.name, config.validation)}
              data-testid={config.name}
            />
            {errors[config.name]?.type === 'required' && (
              <span role='alert' data-testid='form-error'>
                This field is required!
              </span>
            )}
            {errors[config.name]?.type === 'minLength' && (
              <span role='alert' data-testid='form-error'>
                Password cannot be shorter than 8 characters!
              </span>
            )}
            {errors[config.name]?.type === 'maxLength' && (
              <span role='alert' data-testid='form-error'>
                Password cannot be longer than 20 characters!
              </span>
            )}
          </div>
        ))}
      </form>
      <BtnGenerator btnConfigs={props.btnConfigs}></BtnGenerator>
    </div>
  )
}
export default FormGenerator

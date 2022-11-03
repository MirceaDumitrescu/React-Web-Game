import inputConfigs from './config'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import RegisterComponent from '../register/register'
import '../register/register.scss'
import { v4 as uuidv4 } from 'uuid'

const FormGenerator = () => {
  const [inputFields, setInputFields] = useState(inputConfigs)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()

  const allFields = watch()

  return (
    <div className='card'>
      <form
        className='card__form'
        onSubmit={handleSubmit(() => {
          onSubmit(allFields)
        })}
      >
        <h4 className='card__form__title'>Register Form</h4>
        {inputFields.map((config) => (
          <div key={config.name} className='card__form__group'>
            <label>{config.label}</label>
            <input
              type={config.type}
              className='card__form__group__input'
              {...register(config.name, config.validation)}
            />
            {errors[config.name] && <span role='alert'>This field is required!</span>}
            {errors[config.name] && errors[config.name]?.type === 'minLength' && (
              <span role='alert'>Password too smal!</span>
            )}
          </div>
        ))}
        <button type='submit' className='card__form__btn'>
          Register
        </button>
      </form>
    </div>
  )
}
export default FormGenerator

import inputConfigs from './config'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
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

  const onSubmit = (data: any) => {
    console.log(data)
    const userData = { id: uuidv4(), ...data }
    console.log(userData)
    localStorage.setItem('users', JSON.stringify(userData))
  }

  console.log(errors)

  return (
    <div className='card'>
      <form className='card__form' onSubmit={handleSubmit(onSubmit)}>
        <h4 className='card__form__title'>Register Form</h4>
        {inputFields.map((config) => (
          <div key={config.name} className='card__form__group'>
            <label>{config.label}</label>
            <input
              type={config.type}
              className='card__form__group__input'
              {...register(config.name, { required: true, minLength: 8, maxLength: 20 })}
            />
            {errors[config.name] && <span role='alert'>This field is required!</span>}
            {errors[config.name]?.type === 'minLength' && (
              <span role='alert'>Password cannot be shorter than 8 characters!ß</span>
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

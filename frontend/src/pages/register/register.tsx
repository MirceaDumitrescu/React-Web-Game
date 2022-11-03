// import { useEffect, useState } from 'react'
import configs from './config_register'
// import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import FormGenerator from '../formGenerator/formGeneratorRegister'
import './register.scss'

const RegisterComponent = () => {
  const uuid = uuidv4()

  interface FormData {
    username: string
    email: string
    password: string
    confirmPass: string
  }

  const onSubmit = (data: FormData) => {
    const message = <span role='alert'>Passwords do not match!</span>
    const userData = { id: uuidv4(), ...data }
    if (data.password === data.confirmPass) {
      localStorage.setItem('users', JSON.stringify(userData))
      alert('you are logged in!')
    } else {
      return message
    }
  }

  const errorsRender = (field: any) => {
    if (field && field.type === 'required') {
      return <span role='alert'>This is required!</span>
    } else if (field && field.type === 'minLength') {
      return <span role='alert'>Password can not be shorter than 8 characters!</span>
    } else if (field && field.type === 'maxLength') {
      return <span role='alert'> Password can not be longer then 20 characters!</span>
    } else if (field && field.type === 'validate') {
      return <span role='alert'>The passwords do not match!</span>
    } else {
      return null
    }
  }

  return (
    <FormGenerator onSubmit={onSubmit} inputConfigs={configs}></FormGenerator>
    // <div className='card'>

    //   <form className='card__form' onSubmit={handleSubmit(onSubmit)}>
    //     <h4 className='card__form__title'>Register</h4>
    //     <div className='card__form__group'>
    //       <label htmlFor='name'>Name:</label>
    //       <input
    //         id='name'
    //         type='text'
    //         {...register('name', { required: true })}
    //         className='card__form__group__input'
    //       />
    //       {errorsRender(errors.name)}
    //     </div>
    //     <div className='card__form__group'>
    //       <label>Email address:</label>
    //       <input
    //         id='email'
    //         type='email'
    //         {...register('email', { required: true })}
    //         className='card__form__group__input'
    //       ></input>
    //       {errorsRender(errors.email)}
    //     </div>
    //     <div className='card__form__group'>
    //       <label>Password:</label>
    //       <input
    //         id='password'
    //         type='password'
    //         {...register('password', { required: true, minLength: 8, maxLength: 20 })}
    //         className='card__form__group__input'
    //       ></input>
    //       {errorsRender(errors.password)}
    //     </div>
    //     <div className='card__form__group'>
    //       <label htmlFor='confirmPass'>Confirm password:</label>
    //       <input
    //         id='confirmPass'
    //         type='password'
    //         {...register('confirmPass', {
    //           required: true,
    //           minLength: 8,
    //           maxLength: 20,
    //           validate: passValidation,
    //         })}
    //         className='card__form__group__input'
    //       ></input>
    //       {errorsRender(errors.confirmPass)}
    //     </div>
    //     <button id='btn-submit' className='card__form__btn' type='submit'>
    //       Register
    //     </button>
    //   </form>
    // </div>
  )
}

export default RegisterComponent

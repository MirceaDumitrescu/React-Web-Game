// import { useEffect, useState } from 'react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
<<<<<<< Updated upstream
import { v4 as uuidv4 } from 'uuid'
import inputConfig from '../formGenerator/config'
import FormGenerator from '../formGenerator/formGenerator'
=======
import { Type } from 'typescript'
>>>>>>> Stashed changes
import './register.scss'

const RegisterComponent = () => {
  const uuid = uuidv4()

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

<<<<<<< Updated upstream
  const passValidation = (val: string) => {
    if (watch('password') != val) {
      return 'Your password do not match!'
    }
  }

  const onSubmit = (data: any) => {
    console.log(data)
    const userData = { id: uuidv4(), ...data }
    localStorage.setItem('users', JSON.stringify(userData))
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
    <FormGenerator onSubmit={onSubmit} inputConfig={...inputConfig}></FormGenerator>
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
=======
  const errorRequired = (errors: {param:string} ) => {
    errors.param === 'required' && <span role='alert'>This is required</span>
  }

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
          {errorRequired(errors:{'password'})}
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
>>>>>>> Stashed changes
  )
}

export default RegisterComponent

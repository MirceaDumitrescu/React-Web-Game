import './register.scss'

const RegisterComponent = () => {
  return (
    <div className='form__container'>
      <form className='form__submit'>
        <h4>Register Form</h4>
        <div className='form__input-group'>
          <label>Name:</label>
          <input type='text' name='name' className='form__input'></input>
        </div>
        <div className='form__input-group'>
          <label>Email address:</label>
          <input type='email' name='email' className='form__input'></input>
        </div>
        <div className='form__input-group'>
          <label>Password:</label>{' '}
          <input type='password' name='password' className='form__input'></input>
        </div>
        <div className='form__input-group'>
          <label>Confirm password:</label>
          <input type='password' name='confirmPass' className='form__input'></input>
        </div>
        <button className='form__btn' type='submit'>
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterComponent

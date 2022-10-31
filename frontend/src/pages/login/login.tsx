import './login.scss'

const LoginComponent = () => {
  return (
    <div className='form__container'>
      <h4>Login Form</h4>
      <form className='form__submit'>
        <div className='form__input-group'>
          <label>Email Adress:</label>
          <input type='email' name='email' className='form__input'></input>
        </div>
        <div className='form__input-group'>
          <label>Password</label>
          <input type='password' name='password' className='form__input'></input>
        </div>
        <button className='form__btn' type='submit'>
          Log In
        </button>
      </form>
    </div>
  )
}

export default LoginComponent

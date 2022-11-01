import './login.scss'

const LoginComponent = () => {
  return (
    <div className='card'>
      <form className='card__form'>
        <h4 className='card__form__title'>Login</h4>
        <div className='card__form__group'>
          <label>Email Adress:</label>
          <input type='email' name='email' className='card__form__group__input'></input>
        </div>
        <div className='card__form__group'>
          <label>Password</label>
          <input type='password' name='password' className='card__form__group__input'></input>
        </div>
        <button className='card__form__btn' type='submit'>
          Log In
        </button>
      </form>
    </div>
  )
}

export default LoginComponent

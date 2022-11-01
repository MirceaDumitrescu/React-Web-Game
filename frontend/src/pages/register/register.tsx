import './register.scss'

const RegisterComponent = () => {
  return (
    <div className='card'>
      <form className='card__form'>
        <h4 className='card__form__title'>Register</h4>
        <div className='card__form__group'>
          <label>Name:</label>
          <input type='text' name='name' className='card__form__group__input'></input>
        </div>
        <div className='card__form__group'>
          <label>Email address:</label>
          <input type='email' name='email' className='card__form__group__input'></input>
        </div>
        <div className='card__form__group'>
          <label>Password:</label>{' '}
          <input type='password' name='password' className='card__form__group__input'></input>
        </div>
        <div className='card__form__group'>
          <label>Confirm password:</label>
          <input type='password' name='confirmPass' className='card__form__group__input'></input>
        </div>
        <button className='card__form__btn' type='submit'>
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterComponent

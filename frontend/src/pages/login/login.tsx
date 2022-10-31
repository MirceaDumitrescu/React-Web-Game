import './login.scss'

const LoginComponent = () => {
  return (
    <div className='flex-col'>
      <h4>Login Form</h4>
      <form className='submit-form'>
        <div className='input-group flex-col'>
          <label>Email Adress:</label>
          <input type='email' name='email' className='form-input'></input>
        </div>
        <div className='input-group flex-col'>
          <label>Password</label>
          <input type='password' name='password' className='form-input'></input>
        </div>
        <button type='submit'>Log In</button>
      </form>
    </div>
  )
}

export default LoginComponent

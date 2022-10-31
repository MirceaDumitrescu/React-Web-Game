const LoginComponent = () => {
  return (
    <div className='container'>
      <h4>Login Form</h4>
      <form className='submit-form'>
        <div>
          <label>Email Adress:</label>
          <input type='email' name='email' className='form-input'></input>
        </div>
        <div>
          <label>Password</label>
          <input type='password' name='password' className='form-input'></input>
        </div>
        <button type='submit'>Log In</button>
      </form>
    </div>
  )
}

export default LoginComponent

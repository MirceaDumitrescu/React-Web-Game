const RegisterComponent = () => {
  return (
    <div className='container'>
      <form className='submit-form'>
        <h4>Register Form</h4>
        <div>
          <label>Name:</label>
          <input type='text' name='name' className='form-input'></input>
        </div>
        <div>
          <label>Email address:</label>
          <input type='email' name='email'></input>
        </div>
        <div>
          <label>Password:</label>
          <input type='password' name='password'></input>
        </div>
        <div>
          <label>Confirm password:</label>
          <input type='password' name='confirmPass'></input>
        </div>
        <button type='submit'></button>
      </form>
    </div>
  )
}

export default RegisterComponent

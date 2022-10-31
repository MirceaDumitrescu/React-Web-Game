import './register.scss'

const RegisterComponent = () => {
  return (
    <div className='container flex-col'>
      <form className='submit-form'>
        <h4>Register Form</h4>
        <div className='input-group flex-col'>
          <label>Name:</label>
          <input type='text' name='name' className='form-input'></input>
        </div>
        <div className='input-group flex-col'>
          <label>Email address:</label>
          <input type='email' name='email' className='form-input'></input>
        </div>
        <div className='input-group flex-col'>
          <label>Password:</label>
          <input type='password' name='password' className='form-input'></input>
        </div>
        <div className='input-group flex-col'>
          <label>Confirm password:</label>
          <input type='password' name='confirmPass' className='form-input'></input>
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default RegisterComponent

import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='card'>
      <h3 className='form__title'>Hompage</h3>
      <div className='form__group'>
        <button className='form__btn'>
          <Link to='/login'>Login</Link>
        </button>
        <button className='form__btn'>
          <Link to='/register'>Register</Link>
        </button>
      </div>
    </div>
  )
}

export default Homepage

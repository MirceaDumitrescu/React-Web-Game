import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='card'>
      <h3 className='card__form__title'>Hompage</h3>
      <div className='card__form__group'>
        <button className='card__form__btn'>
          <Link to='/login'>Login</Link>
        </button>
        <button className=' card__form__btn'>
          <Link to='/register'>Register</Link>
        </button>
      </div>
    </div>
  )
}

export default Homepage

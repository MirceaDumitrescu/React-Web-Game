import { createBrowserRouter, Route, RouterProvider, Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='card'>
      <h4 className='card__form__title'>Homepage</h4>
      <div className='card__form__group'>
        <button className='card__form__btn'>
          <Link to='/login'>Login</Link>
        </button>
        <button className='card__form__btn'>
          <Link to='/register'>Register</Link>
        </button>
      </div>
    </div>
  )
}

export default Homepage

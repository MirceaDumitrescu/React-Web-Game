import uuid from 'react-uuid'

const configBtnHome = [
  {
    id: uuid(),
    className: 'form__redirect',
    link: {
      className: 'form__redirect__link',
      to: '/login',
      value: 'Login',
    },
  },
  {
    id: uuid(),
    className: 'form__redirect',
    link: {
      className: 'form__redirect__link',
      to: '/register',
      value: 'Register',
    },
  },
]

export default configBtnHome

import uuid from 'react-uuid'

const configBtnLogin = [
  {
    id: uuid(),
    className: 'form__redirect',
    link: {
      className: 'form__redirect__link',
      to: '/register',
      value: '  Missing an account? Register here!',
    },
  },
]

export default configBtnLogin

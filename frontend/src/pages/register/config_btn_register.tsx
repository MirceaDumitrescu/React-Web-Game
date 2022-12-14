import uuid from 'react-uuid'

const configBtnRegister = [
  {
    id: uuid(),
    containerClass: 'form_group',
    className: 'form__redirect',
    link: {
      className: 'form__redirect__link',
      to: '/login',
      value: 'Already have an account? Login here!',
    },
  },
]

export default configBtnRegister

const inputConfigs = [
  {
    label: 'Email adress',
    type: 'email',
    name: 'email',
    className: 'form__group__input',
    validation: {
      required: true,
    },
  },
  {
    label: 'Password',
    type: 'password',
    name: 'password',
    className: 'form__group__input',
    validation: {
      required: true,
    },
  },
  {
    label: '',
    type: 'submit',
    name: 'button',
    className: 'form__btn',
    value: 'Login',
    id: 'submit_btn',
  },
]

export default inputConfigs

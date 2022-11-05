const inputConfigs = [
  {
    label: 'Email adress',
    type: 'email',
    name: 'email',
    className: 'card__form__group__input',
    validation: {
      required: true,
    },
  },
  {
    label: 'Password',
    type: 'password',
    name: 'password',
    className: 'card__form__group__input',
    validation: {
      required: true,
    },
  },
  {
    label: '',
    type: 'submit',
    name: 'button',
    className: 'card__form__btn',
    value: 'Login',
    id: 'submit_btn',
  },
]

export default inputConfigs

const configs = [
  {
    label: 'Name',
    type: 'text',
    name: 'username',
    className: 'card__form__group__input',

    validation: {
      required: true,
    },
  },
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
      minLength: 8,
      maxLength: 20,
    },
  },
  {
    label: 'Confirm Password',
    type: 'password',
    name: 'confirmPass',
    className: 'card__form__group__input',

    validation: {
      required: true,
      minLength: 8,
      maxLength: 20,
    },
  },

  {
    label: '',
    type: 'submit',
    name: 'button',
    className: 'card__form__btn',
    value: 'Register',
    id: 'submit_btn',
  },
]

export default configs

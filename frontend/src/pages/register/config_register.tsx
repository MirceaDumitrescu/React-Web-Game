const configs = [
  {
    label: 'Name',
    type: 'text',
    name: 'username',
    className: 'form__group__input',

    validation: {
      required: true,
    },
  },
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
      minLength: 8,
      maxLength: 20,
    },
  },
  {
    label: 'Confirm Password',
    type: 'password',
    name: 'confirmPass',
    className: 'form__group__input',

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
    className: 'form__btn',
    value: 'Register',
    id: 'submit_btn',
  },
]

export default configs

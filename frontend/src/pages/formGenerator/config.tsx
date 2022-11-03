const inputConfig = [
  {
    label: 'Name',
    type: 'text',
    name: 'username',
    value: '',
    validation: {
      required: true,
    },
  },
  {
    label: 'Email adress',
    type: 'email',
    name: 'email',
    value: '',
    validation: {
      required: true,
    },
  },
  {
    label: 'Password',
    type: 'password',
    name: 'password',
    value: '',
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
    value: '',
    validation: {
      required: true,
      minLength: 8,
      maxLength: 20,
    },
  },
]

export default inputConfig

const configLogin = [
  {
    label: 'Email adress',
    type: 'email',
    name: 'email',
    value: '',
    validation: {
      required: true,
      validate: function (inputMail: string, storedMail: string) {
        if (inputMail != storedMail) {
          return 'Account do not exist!'
        }
      },
    },
  },
  {
    label: 'Password',
    type: 'password',
    name: 'password',
    value: '',
    validation: {
      required: true,
      validate: function (
        inputMail: string,
        storedMail: string,
        inputPass: string,
        storedPass: string,
      ) {
        if (inputPass != storedPass && inputMail != storedMail) {
          return 'Incorrect password '
        } else {
          return 'You are logged in!'
        }
      },
    },
  },
]

export default configLogin

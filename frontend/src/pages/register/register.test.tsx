import RegisterComponent from './register'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../features/utils/test-utils'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

describe(RegisterComponent, () => {
  beforeEach(() => {
    renderWithProviders(
      <MemoryRouter>
        <RegisterComponent />
      </MemoryRouter>,
    )
  })
})

it('should render the register component', () => {
  expect(screen.getByTestId('register-form')).toBeInTheDocument()
})

it('should have a name field, email field, password field and a confirm password field ', () => {
  expect(screen.getByTestId('username')).toBeInTheDocument()
  expect(screen.getByTestId('email')).toBeInTheDocument()
  expect(screen.getByTestId('password')).toBeInTheDocument()
  expect(screen.getByTestId('confirmPassword')).toBeInTheDocument()
})

it('should have a register button', () => {
  expect(screen.getByTestId('form-button'))
})

it('should have a link to login', () => {
  expect(screen.getByText('Already have an account? Login here!'))
})

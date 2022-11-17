import LoginComponent from './login'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '../../features/utils/test-utils'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

describe('Login Component', () => {
  beforeEach(() => {
    renderWithProviders(
      <MemoryRouter>
        <LoginComponent />
      </MemoryRouter>,
    )
  })

  it('should render the login component', () => {
    expect(screen.getByTestId('login-form')).toBeInTheDocument()
  })

  it('should have an email field and a password field', () => {
    expect(screen.getByTestId('email')).toBeInTheDocument()
    expect(screen.getByTestId('password')).toBeInTheDocument()
  })

  it('should have a login button', () => {
    expect(screen.getByTestId('form-button')).toBeInTheDocument()
  })

  it('should have a link to register', () => {
    expect(screen.getByText('Missing an account? Register here!')).toBeInTheDocument()
  })
})

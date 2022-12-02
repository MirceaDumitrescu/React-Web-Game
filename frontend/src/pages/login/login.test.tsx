import LoginComponent from './login'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import createStoreComponent from '../../features/utils/helpers'
import configs from './config_login'

const Login = createStoreComponent(LoginComponent)

it('should match snapshot', () => {
  const { asFragment } = render(<Login />)
  expect(asFragment()).toMatchSnapshot()
})

it('should have all inputs from config', () => {
  render(<Login />)
  configs.forEach((config) => {
    expect(screen.getByTestId(config.name)).toBeInTheDocument()
  })
})

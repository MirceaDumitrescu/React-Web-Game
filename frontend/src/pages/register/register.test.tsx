import RegisterComponent from './register'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import createStoreComponent from '../../features/utils/helpers'
import configs from './config_register'

const Register = createStoreComponent(RegisterComponent)

it('should match snapshot', () => {
  const { asFragment } = render(<Register />)
  expect(asFragment()).toMatchSnapshot()
})

it('should have all inputs from config', () => {
  render(<Register />)
  configs.forEach((config) => {
    expect(screen.getByTestId(config.name)).toBeInTheDocument()
  })
})

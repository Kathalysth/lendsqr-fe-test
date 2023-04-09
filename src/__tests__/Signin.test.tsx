import { render, screen } from '@testing-library/react'
import { SigninPage } from '../pages'

it('should have a username and a password field, also a submit button', () => {
  render(<SigninPage />)
  const usernameField = screen.getByLabelText(/username/i)
  const passwordField = screen.getAllByLabelText(/password/i)
  const submitButton = screen.getByText(/Log in/i)

  expect(usernameField).toBeInTheDocument()
  expect(passwordField).toBeInTheDocument()
  expect(submitButton).toBeInTheDocument()
})

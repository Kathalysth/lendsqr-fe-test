// Imports
import { describe, it, expect } from 'vitest'
import { render, screen } from './test-utils'
import userEvent from '@testing-library/user-event'
import type { LoginData } from '../@types'

// To Test
import Signin from '../pages/Signin'

// Tests
describe('Renders Sign in page correctly', async () => {
  it('Should render the email field, password field, and submit button', async () => {
    // Setup
    render(<Signin />)
    const h1 = await screen.findByText('Welcome!')
    const emailField = await screen.findByPlaceholderText('Email Address')
    const passwordField = await screen.findByPlaceholderText('Password')
    const submitButton = await screen.findByText('Log in')

    // Expectations
    expect(h1).toBeInTheDocument()
    expect(emailField).toBeInTheDocument()
    expect(passwordField).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })
  it('Should allow the user to submit their credentials', async () => {
    // Setup
    const LoginForm = {
      submit(values: LoginData) {
        console.log(values)
      }
    }
    render(<Signin submit={LoginForm.submit} />)

    const user = userEvent.setup()
    const emailField: HTMLInputElement = await screen.findByPlaceholderText(
      'Email Address'
    )
    const passwordField: HTMLInputElement = await screen.findByPlaceholderText(
      'Password'
    )
    const passwordToggleButton: HTMLButtonElement = await screen.findByText(
      'Show'
    )
    const submitButton: HTMLButtonElement = await screen.findByText('Log in')

    // Email Input
    expect(emailField.value).toBe('')
    expect(emailField.type).toBe('email')
    await user.type(emailField, 'chris@gmail.com')
    expect(emailField.value).toBe('chris@gmail.com')
    expect(emailField).toBeRequired()
    //  Password Input
    await user.type(passwordField, 'password')
    expect(passwordField.type).toBe('password')
    expect(passwordField).toBeRequired()
    expect(passwordToggleButton.textContent).toBe('Show')
    await user.click(passwordToggleButton)
    expect(passwordField.type).toBe('text')
    expect(passwordToggleButton.textContent).toBe('Hide')
    // const submit = vi.spyOn(LoginForm, 'submit')
    await user.click(submitButton)

    // Expectations
  })
})

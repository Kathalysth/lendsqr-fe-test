// Imports
import { test, expect } from 'vitest'
import { render, screen } from './test-utils'
import userEvent from '@testing-library/user-event'
import type { LoginData } from '../@types'

// To Test
import Signin from '../pages/Signin'

// Tests
test('Should render the email field, password field, and submit button', async () => {
  // Setup
  render(<Signin />)
  const emailField: HTMLInputElement = await screen.findByPlaceholderText(
    'Email Address'
  )
  const passwordField: HTMLInputElement = await screen.findByPlaceholderText(
    'Password'
  )
  const submitButton: HTMLButtonElement = await screen.findByText('Log in')

  // Expectations
  expect(emailField).toBeInTheDocument()
  expect(emailField.type).toBe('email')

  expect(passwordField).toBeInTheDocument()
  expect(passwordField.type).toBe('password')

  expect(submitButton).toBeInTheDocument()
  expect(submitButton.type).toBe('submit')
})
test('input fields are required', async () => {
  // Setup

  render(<Signin />)

  const emailField: HTMLInputElement = await screen.findByPlaceholderText(
    'Email Address'
  )
  const passwordField: HTMLInputElement = await screen.findByPlaceholderText(
    'Password'
  )

  expect(emailField).toBeRequired()
  expect(passwordField).toBeRequired()

  // Expectations
})
test('disable submit button without input', async () => {
  // Setup

  render(<Signin />)

  const user = userEvent.setup()
  const emailField: HTMLInputElement = await screen.findByPlaceholderText(
    'Email Address'
  )
  const passwordField: HTMLInputElement = await screen.findByPlaceholderText(
    'Password'
  )

  const submitButton: HTMLButtonElement = await screen.findByText('Log in')

  expect(submitButton).toBeDisabled()

  await user.type(emailField, 'chris@gmail.com')
  expect(emailField.value).toBe('chris@gmail.com')

  await user.type(passwordField, 'password')
  expect(passwordField.type).toBe('password')

  expect(submitButton).not.toBeDisabled()
})
test('password toggle', async () => {
  // Setup
  render(<Signin />)

  const user = userEvent.setup()
  const passwordField: HTMLInputElement = await screen.findByPlaceholderText(
    'Password'
  )
  const passwordToggleButton: HTMLButtonElement = await screen.findByText(
    'Show'
  )
  // Assertions
  expect(passwordField.type).toBe('password')
  expect(passwordToggleButton.textContent).toBe('Show')

  // does something
  await user.click(passwordToggleButton)

  // Assertions
  expect(passwordField.type).toBe('text')
  expect(passwordToggleButton.textContent).toBe('Hide')
})

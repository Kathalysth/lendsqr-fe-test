import { describe, it, expect } from 'vitest'
import { render, screen } from './test-utils'
import userEvent from '@testing-library/user-event'

// To Test
import Users from '../pages/Users'

// Tests
describe('Renders Users page correctly', async () => {
  it('Should render table element, users stats', async () => {
    // Setup
    render(<Users />)
    const tableElement = await screen.findByRole('table')
    // const emailField = await screen.findByPlaceholderText('Email Address')
    // const passwordField = await screen.findByPlaceholderText('Password')
    // const submitButton = await screen.findByText('Log in')

    // Expectations
    expect(tableElement).toBeInTheDocument()
    // expect(emailField).toBeInTheDocument()
    // expect(passwordField).toBeInTheDocument()
    // expect(submitButton).toBeInTheDocument()
  })
})

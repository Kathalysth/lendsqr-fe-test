// Imports
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

// To Test
import Signin from '../pages/Signin'

// Tests
describe('Renders main page correctly', async () => {
  it('Should render the page correctly', async () => {
    // Setup
    render(
      <MemoryRouter>
        <Signin />
      </MemoryRouter>
    )
    const h1 = await screen.queryByText('Welcome!')
    const emailField = await screen.queryByLabelText('email')
    const passwordField = await screen.queryByLabelText('password')

    // Expectations
    expect(h1).not.toBeNull()
    expect(emailField).not.toBeNull()
    expect(passwordField).not.toBeNull()
  })
})

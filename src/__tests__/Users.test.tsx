import { test, expect } from 'vitest'
import { render, screen } from './test-utils'
import userEvent from '@testing-library/user-event'

// To Test
import Users from '../pages/Users'

// Tests
test('Should render table element, users stats', async () => {
  // Setup
  render(<Users />)
  const tableElement = await screen.findByRole('table')
  const usersCard = await screen.findByText('users')
  const usersWithLoanCard = await screen.findByText('users with loans')
  const activeUsersCard = await screen.findByText('active users')
  const usersWithSavingsCard = await screen.findByText('users with savings')

  // Expectations
  expect(tableElement).toBeInTheDocument()
  expect(usersCard).toBeInTheDocument()
  expect(usersWithLoanCard).toBeInTheDocument()
  expect(activeUsersCard).toBeInTheDocument()
  expect(usersWithSavingsCard).toBeInTheDocument()
})

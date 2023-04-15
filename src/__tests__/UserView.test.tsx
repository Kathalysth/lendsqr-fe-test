import { test, expect } from 'vitest'
import { render, screen } from './test-utils'
import userEvent from '@testing-library/user-event'

// To Test
import UserView from '../pages/Users/view'
// Tests
test('Should render app tab element, app tab content', async () => {
  // Setup
  render(<UserView />)
  const tabNavElement = screen.getByTestId('app-tab-nav')
  const tabContentElement = screen.getByTestId('app-tab-content')
  const backButton = screen.getByText('Back to Users')

  // Expectations
  expect(tabNavElement).toBeInTheDocument()
  expect(tabContentElement).toBeInTheDocument()
  expect(backButton).toBeInTheDocument()
})
test('Should render app tab element, app tab content', async () => {
  // Setup
  render(<UserView />)
  const user = userEvent.setup()
  const tabContentElement = screen.getByTestId('app-tab-content')
  const backButton = screen.getByText('Back to Users')
  expect(tabContentElement).toBeInTheDocument()
  expect(backButton).toBeInTheDocument()
  user.click(backButton)
})

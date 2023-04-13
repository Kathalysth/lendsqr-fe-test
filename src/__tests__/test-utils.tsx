import type { ReactNode, ReactElement } from 'react'
import { render } from '@testing-library/react'
import type { RenderOptions, RenderResult } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MemoryRouter } from 'react-router-dom'

const STALE_TIME_IN_MILLISEC = 1000 * 60 * 10
const CACHE_TIME_IN_MILLISEC = 1000 * 60 * 10

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: STALE_TIME_IN_MILLISEC,
      cacheTime: CACHE_TIME_IN_MILLISEC
    }
  }
})

const AllTheProviders = ({
  children
}: {
  children: ReactNode
}): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>{children}</MemoryRouter>
    </QueryClientProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options })

// eslint-disable-next-line
export * from '@testing-library/react'
// eslint-disable-next-line
export { customRender as render }

import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'react-perfect-scrollbar/dist/css/styles.css'
import './styles/main.scss'
import ScrollOnRoute from './components/ScrollOnRoute'
import ResizeObserver from 'resize-observer-polyfill'
import * as Sentry from '@sentry/react'
import Loader from './components/loader'

window.ResizeObserver = ResizeObserver
const App = lazy(() => import('./App'))
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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Sentry.ErrorBoundary
      fallback={<p className="app_center">An error has occurred</p>}
    >
      <Suspense
        fallback={
          <div className="flex items-center flex-column app_center">
            <div className="mb-2 loader" />
            <Loader />
          </div>
        }
      >
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <ScrollOnRoute>
              <App />
            </ScrollOnRoute>
          </BrowserRouter>
        </QueryClientProvider>
      </Suspense>
    </Sentry.ErrorBoundary>
  </React.StrictMode>
)

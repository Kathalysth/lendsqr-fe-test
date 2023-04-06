import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'
import ResizeWrapper from './components/ResizeWrapper'
import 'react-perfect-scrollbar/dist/css/styles.css'
import './styles/main.scss'
import ScrollOnRoute from './components/ScrollOnRoute'

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
    <ResizeWrapper>
      <Suspense fallback={<div>loading...</div>}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <ScrollOnRoute>
              <App />
            </ScrollOnRoute>
          </BrowserRouter>
        </QueryClientProvider>
      </Suspense>
    </ResizeWrapper>
  </React.StrictMode>
)

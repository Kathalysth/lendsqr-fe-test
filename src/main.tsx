import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ResizeWrapper from './components/ResizeWrapper'
import 'react-perfect-scrollbar/dist/css/styles.css'
import './styles/main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ResizeWrapper>
      <Suspense fallback={<div>loading...</div>}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </ResizeWrapper>
  </React.StrictMode>
)

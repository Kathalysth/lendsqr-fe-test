import { Routes, Route, Navigate } from 'react-router-dom'
import { SigninPage } from './pages'

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<SigninPage />} />
    </Routes>
  )
}

export default Router

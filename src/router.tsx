import { Routes, Route, Navigate } from 'react-router-dom'
import { SigninPage, DashboardPage, UsersPage } from './pages'
import PrivateLayout from './layout/PrivateLayout'

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/login" element={<SigninPage />} />
      <Route path="/dashboard" element={<PrivateLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="users" element={<UsersPage />} />
      </Route>
    </Routes>
  )
}

export default Router

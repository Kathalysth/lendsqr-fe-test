import { Routes, Route, Navigate } from 'react-router-dom'
import { SigninPage, UsersPage, UserViewPage, NotFoundPage } from './pages'
import PrivateLayout from './layout/PrivateLayout'

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/login" element={<SigninPage />} />
      <Route path="/dashboard" element={<PrivateLayout />}>
        <Route index element={<Navigate to="/dashboard/users" />} />
        <Route path="users">
          <Route index element={<UsersPage />} />
          <Route path=":id" element={<UserViewPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default Router

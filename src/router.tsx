import { Routes, Route, Navigate } from 'react-router-dom'

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<div>login</div>} />
    </Routes>
  )
}

export default Router

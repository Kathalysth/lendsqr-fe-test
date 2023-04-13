import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/layouts/layout.scss'

function PrivateLayout(): JSX.Element | null {
  const navigate = useNavigate()
  const auth = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth') ?? '')
    : false

  useEffect(() => {
    if (!auth) {
      navigate('/login')
    }
  })
  if (!auth) {
    return null
  }
  return (
    <div id="app">
      <Navbar />
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default PrivateLayout

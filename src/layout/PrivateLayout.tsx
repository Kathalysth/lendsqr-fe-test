import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../styles/layouts/layout.scss'

function PrivateLayout(): JSX.Element {
  return (
    <div id="app">
      <Navbar />
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default PrivateLayout

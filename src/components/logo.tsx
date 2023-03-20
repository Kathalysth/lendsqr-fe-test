import { Link } from 'react-router-dom'
import logo from '../assets/logo/lendsqrlogo.svg'

function Logo(): JSX.Element {
  return (
    <Link to="/">
      <img src={logo} alt="logo" width={174} height={36} />
    </Link>
  )
}

export default Logo

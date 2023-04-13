import { Link } from 'react-router-dom'
import logo from '../assets/logo/lendsqrlogo.svg'

function Logo({
  width = 174,
  height = 36
}: {
  width?: number
  height?: number
}): JSX.Element {
  return (
    <Link to="/">
      <img src={logo} alt="logo" width={width} height={height} />
    </Link>
  )
}

export default Logo

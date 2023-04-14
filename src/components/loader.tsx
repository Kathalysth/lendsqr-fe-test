import logo from '../assets/logo/lendsqrlogo.svg'

function Loader({
  width = 174,
  height = 36
}: {
  width?: number
  height?: number
}): JSX.Element {
  return <img src={logo} alt="logo" width={width} height={height} />
}

export default Loader

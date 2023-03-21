import Logo from './logo'
import { GoSearch } from 'react-icons/go'
import { BsBell } from 'react-icons/bs'
import { IoMdArrowDropdown } from 'react-icons/io'
import { Link } from 'react-router-dom'
import avatar from '../assets/images/avatar/image 4.svg'

function Navbar(): JSX.Element {
  return (
    <header>
      <nav className="app_nav">
        <Logo width={117} height={30} />
        <form>
          <div className="search_wrapper">
            <input type="search" placeholder="Search for anything" />
            <div className="search_icon__wrapper">
              <GoSearch width={25} height={25} />
            </div>
          </div>
        </form>
        <div className="leftside__nav">
          <Link to="/docs">Docs</Link>
          <BsBell width={40} height={40} />
          <div className="navbar_userdropdown">
            <img src={avatar} alt="user profile pic" width={38} height={38} />
            <span>Chris</span>
            <IoMdArrowDropdown width={25} height={25} />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

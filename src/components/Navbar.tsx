import { useState } from 'react'
import Logo from './logo'
import { GoSearch } from 'react-icons/go'
import { BsBell } from 'react-icons/bs'
import { IoMdArrowDropdown } from 'react-icons/io'
import { HiOutlineMenu } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import avatar from '../assets/images/avatar/image 4.svg'

function Navbar(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false)

  const toggleOpen = (): void => {
    setOpen(!open)
  }
  return (
    <header>
      <nav className="app_nav">
        <div className="app_brand">
          <Logo width={117} height={30} />
        </div>
        <div className="app_nav_wrapper">
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
            <span className="nav_notification">
              <BsBell width={40} height={40} />
            </span>
            <div className="navbar_userdropdown">
              <img src={avatar} alt="user profile pic" width={38} height={38} />
              <span>Chris</span>
              <IoMdArrowDropdown width={25} height={25} />
            </div>
            <button
              className="mobile_menu"
              onClick={toggleOpen}
              role="menu"
              aria-label="Open Menu"
            >
              <HiOutlineMenu size={30} />
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`overlay__backdrop ${
          open ? ' overlay__backdrop_slide_in ' : 'overlay_backdrop_slide_out'
        }`}
      >
        <Logo width={117} height={30} />
        <hr />
      </div>
      <div
        onClick={toggleOpen}
        tabIndex={-1}
        role="button"
        className={`${open ? 'mobile__menu_overlay' : ''}`}
      />
    </header>
  )
}

export default Navbar

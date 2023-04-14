import { useState, Fragment } from 'react'
import Logo from './logo'
import { GoSearch } from 'react-icons/go'
import { AiOutlineClose } from 'react-icons/ai'
import { BsBell } from 'react-icons/bs'
import { HiOutlineMenu } from 'react-icons/hi'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import type { nav } from '../@types'
import navigation from '../navigation'
import UserDropdown from './UserDropdown'
import SwitchOrg from './SwitchOrg'

function Navbar(): JSX.Element {
  const navigate = useNavigate()
  const [open, setOpen] = useState<boolean>(false)

  const toggleOpen = (): void => {
    setOpen(!open)
  }
  function handleLogout(): void {
    localStorage.removeItem('auth')
    navigate('/login')
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
            <UserDropdown className="user_dropdown_wrapper" />
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
        className={`overlay__backdrop opacity-none ${
          open
            ? ' overlay__backdrop_slide_in opacity-full'
            : 'overlay_backdrop_slide_out'
        }`}
      >
        <button aria-label="Close Menu" onClick={toggleOpen} className="close">
          <AiOutlineClose size={25} />
        </button>
        <Logo width={117} height={30} />
        <hr />
        <UserDropdown className="user_dropdown_wrapper my-1 pl-1" />
        <hr />
        <SwitchOrg placement="bottom" />
        <nav>
          <PerfectScrollbar options={{ wheelPropagation: false }}>
            <ul className="navbar_nav_list">
              {navigation.map((nav: nav, index: number) => {
                if (nav.children !== undefined) {
                  return (
                    <Fragment key={index + 1}>
                      <li className="sidebar__group_title">{nav.title}</li>
                      {nav.children.map((childNav: nav, cindex: number) => (
                        <li key={cindex + 1}>
                          <NavLink
                            onClick={toggleOpen}
                            className={({ isActive }) => {
                              return `sidebar__nav_item ${
                                isActive ? 'nav_item_active' : ''
                              }`
                            }}
                            to={childNav.link}
                          >
                            <span className="nav_title">{childNav.title}</span>
                          </NavLink>
                        </li>
                      ))}
                    </Fragment>
                  )
                }
                return (
                  <li key={index + 1}>
                    <NavLink
                      onClick={toggleOpen}
                      className={({ isActive }) => {
                        return `sidebar__nav_item ${
                          isActive ? 'nav_item_active' : ''
                        }`
                      }}
                      end
                      to={nav.link}
                    >
                      <span className="nav_title">{nav.title}</span>
                    </NavLink>
                  </li>
                )
              })}
            </ul>
          </PerfectScrollbar>
          <hr />
          <div className="flex flex-column text-left">
            <button
              onClick={handleLogout}
              className="p-1 logout"
              type="button"
              aria-label="logout app"
            >
              <span className="nav_title"> Logout</span>
            </button>
            <span className="version">v1.2.0</span>
          </div>
        </nav>
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

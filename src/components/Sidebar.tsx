import { Fragment } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import navigation from '../navigation'
import type { nav } from '../@types'
// @ts-expect-error no support yet
import { ReactComponent as SignOut } from '../assets/icons/sign-out 1.svg'
import SwitchOrg from './SwitchOrg'

function Sidebar(): JSX.Element {
  const navigate = useNavigate()
  function handleLogout(): void {
    localStorage.removeItem('auth')
    navigate('/login')
  }
  return (
    <aside className="app_sidebar">
      <SwitchOrg className="w-full" />
      {/* <hr /> */}
      <nav>
        <PerfectScrollbar options={{ wheelPropagation: false }}>
          <ul className="sidebar_nav_list">
            {navigation.map((nav: nav, index: number) => {
              if (nav.children !== undefined) {
                return (
                  <Fragment key={index + 1}>
                    <li className="sidebar__group_title">{nav.title}</li>
                    {nav.children.map((childNav: nav, cindex: number) => (
                      <li key={cindex + 1}>
                        <NavLink
                          className={({ isActive }) => {
                            return `sidebar__nav_item ${
                              isActive ? 'nav_item_active' : ''
                            }`
                          }}
                          to={childNav.link}
                        >
                          {childNav.icon !== undefined ? (
                            <childNav.icon width={15} height={15} />
                          ) : null}
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
                    className={({ isActive }) => {
                      return `sidebar__nav_item ${
                        isActive ? 'nav_item_active' : ''
                      }`
                    }}
                    end
                    to={nav.link}
                  >
                    {nav.icon !== undefined ? (
                      <nav.icon width={15} height={15} />
                    ) : null}
                    <span className="nav_title">{nav.title}</span>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </PerfectScrollbar>
      </nav>
      <hr />
      <div className="sidebar_logout">
        <button onClick={handleLogout} type="button" aria-label="logout app">
          <SignOut width={15} height={15} />
          <span className="nav_title"> Logout</span>
        </button>
        <span className="version">v1.2.0</span>
      </div>
    </aside>
  )
}

export default Sidebar

import { Fragment } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import PerfectScrollbar from 'react-perfect-scrollbar'
import navigation from '../navigation'
import type { nav } from '../@types'
// @ts-expect-error no support yet
import { ReactComponent as BriefCase } from '../assets/icons/briefcase 1.svg'
// @ts-expect-error no support yet
import { ReactComponent as SignOut } from '../assets/icons/sign-out 1.svg'

function Sidebar(): JSX.Element {
  return (
    <aside className="app_sidebar">
      <button
        type="button"
        aria-label="switch organization"
        className="sidebar_switch_org"
      >
        <BriefCase width={15} height={15} />
        Switch Organization
        <FaChevronDown width={20} height={20} />
      </button>
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
                          className="sidebar__nav_item"
                          to={childNav.link}
                        >
                          {childNav.icon !== undefined ? (
                            <childNav.icon width={15} height={15} />
                          ) : null}
                          {childNav.title}
                        </NavLink>
                      </li>
                    ))}
                  </Fragment>
                )
              }
              return (
                <li key={index + 1}>
                  <NavLink className="sidebar__nav_item" to={nav.link}>
                    {nav.icon !== undefined ? (
                      <nav.icon width={15} height={15} />
                    ) : null}
                    {nav.title}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </PerfectScrollbar>
      </nav>
      <hr />
      <div className="sidebar_logout">
        <button type="button" aria-label="logout app">
          <SignOut width={15} height={15} />
          Logout
        </button>
        <span>v1.2.0</span>
      </div>
    </aside>
  )
}

export default Sidebar

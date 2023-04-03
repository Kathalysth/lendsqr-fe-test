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
      <div className="sidebar_switch_wrapper">
        <button
          type="button"
          aria-label="switch organization"
          className="sidebar_switch_org"
        >
          <BriefCase width={15} height={15} />
          <span className="nav_title">Switch Organization</span>

          <FaChevronDown className="chervon_down" width={20} height={20} />
        </button>
      </div>
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
                          className={({ isActive, isPending }) =>
                            isPending
                              ? 'sidebar__nav_item'
                              : isActive
                              ? 'nav_item_active sidebar__nav_item'
                              : 'sidebar__nav_item'
                          }
                          // end
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
                    className={({ isActive, isPending }) =>
                      isPending
                        ? 'sidebar__nav_item'
                        : isActive
                        ? 'nav_item_active sidebar__nav_item'
                        : 'sidebar__nav_item'
                    }
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
        <button type="button" aria-label="logout app">
          <SignOut width={15} height={15} />
          <span className="nav_title"> Logout</span>
        </button>
        <span className="version">v1.2.0</span>
      </div>
    </aside>
  )
}

export default Sidebar

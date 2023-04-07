import { IoMdArrowDropdown } from 'react-icons/io'
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItems
} from './dropdown'
import avatar from '../assets/images/avatar/image 4.svg'

function UserDropdown(props: { className?: string }): JSX.Element {
  return (
    <Dropdown {...props}>
      <DropdownToggle>
        <div className="navbar_userdropdown">
          <img src={avatar} alt="user profile pic" width={38} height={38} />
          <span>Chris</span>
          <IoMdArrowDropdown width={25} height={25} />
        </div>
      </DropdownToggle>
      <DropdownMenu className="z-10 p-1 flex flex-column text-info">
        <DropdownItems
          className="p-1 text-info"
          tag="a"
          to="/dashboard/profile"
        >
          Profile
        </DropdownItems>
        <DropdownItems
          className="p-1 text-info"
          tag="a"
          to="/dashboard/settings"
        >
          Settings
        </DropdownItems>
      </DropdownMenu>
    </Dropdown>
  )
}

export default UserDropdown

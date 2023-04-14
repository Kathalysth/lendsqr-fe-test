import { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import {
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItems
} from './dropdown'
import avatar from '../assets/images/avatar/user-avatar.png'

function UserDropdown(props: { className?: string }): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false)

  const toggleOpen = (): void => {
    setOpen(!isOpen)
  }
  return (
    <Dropdown
      isOpen={isOpen}
      toggleOpen={toggleOpen}
      setOpen={setOpen}
      {...props}
    >
      <DropdownToggle>
        <div className="navbar_userdropdown">
          <img src={avatar} alt="user profile pic" width={38} height={38} />
          <span>Ayodeji</span>
          <IoMdArrowDropdown width={25} height={25} />
        </div>
      </DropdownToggle>
      <DropdownMenu className="z-10 flex flex-column text-info">
        <DropdownItems className="text-info" tag="a" to="/dashboard/profile">
          Profile
        </DropdownItems>
        <DropdownItems className="text-info" tag="a" to="/dashboard/settings">
          Settings
        </DropdownItems>
      </DropdownMenu>
    </Dropdown>
  )
}

export default UserDropdown

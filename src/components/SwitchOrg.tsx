import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import { Dropdown, DropdownMenu, DropdownToggle } from './dropdown'
// @ts-expect-error no support yet
import { ReactComponent as BriefCase } from '../assets/icons/briefcase 1.svg'
import type { Placement } from '@popperjs/core'

function SwitchOrg(props: {
  className?: string
  placement?: Placement
}): JSX.Element {
  const [isOpen, setOpen] = useState<boolean>(false)

  const toggleOpen = (): void => {
    setOpen(!isOpen)
  }
  return (
    <Dropdown
      isOpen={isOpen}
      toggleOpen={toggleOpen}
      setOpen={setOpen}
      placement="right"
      {...props}
    >
      <DropdownToggle className="w-full">
        <div className="sidebar_switch_wrapper">
          <div className="sidebar_switch_org">
            <BriefCase width={15} height={15} />
            <span className="nav_title">Switch Organization</span>

            <FaChevronDown className="chervon_down" width={20} height={20} />
          </div>
        </div>
      </DropdownToggle>
      <DropdownMenu className="z-10 p-1 flex flex-column text-info">
        <li className="p-1 text-info">
          You no do not currently belong to any organizations.
        </li>
      </DropdownMenu>
    </Dropdown>
  )
}

export default SwitchOrg

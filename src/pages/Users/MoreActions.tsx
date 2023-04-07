import { HiDotsVertical } from 'react-icons/hi'
import {
  Dropdown,
  DropdownItems,
  DropdownMenu,
  DropdownToggle
} from '../../components/dropdown'

// @ts-expect-error no support yet
import { ReactComponent as ActivateUserIcon } from '../../assets/icons/activateUser.svg'
// @ts-expect-error no support yet
import { ReactComponent as BlacklistUserIcon } from '../../assets/icons/blacklistUser.svg'
// @ts-expect-error no support yet
import { ReactComponent as ViewUserIcon } from '../../assets/icons/viewUser.svg'

function MoreActions({ user }: { user: { id: string } }): JSX.Element {
  return (
    <Dropdown className="more_actions" placement="left-start">
      <DropdownToggle>
        <HiDotsVertical size={14} />
      </DropdownToggle>
      <DropdownMenu className="actions_menu">
        <DropdownItems
          tag="a"
          to={`/dashboard/users/${user.id}`}
          className="actions_items"
        >
          <ViewUserIcon />
          View Details
        </DropdownItems>
        <DropdownItems className="actions_items">
          <BlacklistUserIcon />
          Blacklist User
        </DropdownItems>
        <DropdownItems className="actions_items">
          <ActivateUserIcon />
          Activate User
        </DropdownItems>
      </DropdownMenu>
    </Dropdown>
  )
}

export default MoreActions

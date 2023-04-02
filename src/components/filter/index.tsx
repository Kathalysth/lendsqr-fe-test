import { IoFilter } from 'react-icons/io5'
import Dropdown from '../dropdown'
import DropdownMenu from '../dropdown/DropdownMenu'
import DropdownToggle from '../dropdown/DropdownToggle'

function Filter({ title }: { title: string }): JSX.Element {
  return (
    <Dropdown>
      <DropdownToggle>
        <span className="table__title">{title}</span>
        <IoFilter size={16} />
      </DropdownToggle>
      <DropdownMenu>
        <li className="table_filter">
          <form className="table__filter_form">
            <div className="form_group">
              <label>Organization</label>
              <input className="form_control" />
            </div>
            <div className="form_group">
              <label>Username</label>
              <input className="form_control" />
            </div>
            <div className="form_group">
              <label>Email</label>
              <input className="form_control" />
            </div>
            <div className="form_group">
              <label>Date</label>
              <input className="form_control" />
            </div>
            <div className="form_group">
              <label>Phone Number</label>
              <input className="form_control" />
            </div>
            <div className="form_group">
              <label>Status</label>
              <input className="form_control" />
            </div>
            <div className="form_group action_buttons">
              <button className="reset">Reset</button>
              <button>Filter</button>
            </div>
          </form>
        </li>
      </DropdownMenu>
    </Dropdown>
  )
}

export default Filter

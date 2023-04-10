import { useState, useContext } from 'react'
import type { FormEvent } from 'react'
import { IoFilter } from 'react-icons/io5'
import Select from 'react-select'
import { Dropdown, DropdownToggle, DropdownMenu } from '../dropdown'
import { TableContext } from '../table/TableContext'
import type { Filter as FilterProps } from '../table/filter'
import { initialCaps, scrolltoId } from '../../utils'

type SelectOptionType = {
  label: string
  value: string
}
type StatusOptionType = {
  label: string
  value: 'active' | 'inactive' | 'blacklisted' | 'pending'
}

function Filter({ title }: { title: string }): JSX.Element {
  const { setFilters, organizations } = useContext(TableContext)
  const [isOpen, setOpen] = useState<boolean>(false)
  const [organization, setOrganization] = useState<SelectOptionType | null>(
    null
  )
  const [email, setEmail] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [username, setUsername] = useState<string>('')
  const [status, setStatus] = useState<StatusOptionType | null>(null)

  const statusOptions: StatusOptionType[] = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'pending', label: 'Pending' },
    { value: 'blacklisted', label: 'Blacklisted' }
  ]
  const toggleOpen = (): void => {
    setOpen(!isOpen)
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    const filter: FilterProps = {}
    if (email !== '') {
      filter.email = email
    }
    if (username !== '') {
      filter.username = username
    }
    if (status !== null) {
      filter.status = status.value
    }
    if (organization !== null) {
      filter.organization = organization.value
    }
    if (phoneNumber !== '') {
      filter.phoneNumber = phoneNumber
    }
    if (date !== '') {
      filter.date = date
    }
    setFilters(filter)
    scrolltoId('app-table')
    toggleOpen()
  }

  function handleClear(): void {
    setOrganization(null)
    setDate('')
    setEmail('')
    setPhoneNumber('')
    setStatus(null)
    setUsername('')
    setFilters({})
    scrolltoId('app-table')
    toggleOpen()
  }

  return (
    <Dropdown isOpen={isOpen} toggleOpen={toggleOpen} setOpen={setOpen}>
      <DropdownToggle>
        <span className="table__title">{title}</span>
        <IoFilter size={16} />
      </DropdownToggle>
      <DropdownMenu>
        <li className="table_filter">
          <form className="table__filter_form" onSubmit={handleSubmit}>
            <div className="form_group">
              <label>Organization</label>
              <Select
                defaultValue={organization}
                className="form_select"
                classNamePrefix="select"
                onChange={(option: SelectOptionType | null) => {
                  if (option !== null && option !== undefined) {
                    setOrganization(option)
                  }
                }}
                isSearchable
                name="organization"
                options={organizations.map((orgName: string) => {
                  return { value: orgName, label: initialCaps(orgName) }
                })}
              />
            </div>
            <div className="form_group">
              <label>Username</label>
              <input
                value={username}
                onChange={e => {
                  setUsername(e.target.value)
                }}
                className="form_control"
                name="username"
              />
            </div>
            <div className="form_group">
              <label>Email</label>
              <input
                onChange={e => {
                  setEmail(e.target.value)
                }}
                value={email}
                className="form_control"
                name="email"
              />
            </div>
            <div className="form_group">
              <label>Date</label>
              <input
                type="date"
                value={date}
                className="form_control"
                onChange={e => {
                  setDate(e.target.value)
                }}
                placeholder="date"
                name="date"
              />
            </div>
            <div className="form_group">
              <label>Phone Number</label>
              <input
                onChange={e => {
                  setPhoneNumber(e.target.value)
                }}
                value={phoneNumber}
                className="form_control"
                name="phoneNumber"
              />
            </div>
            <div className="form_group">
              <label>Status</label>
              <Select
                className="form_select"
                classNamePrefix="select"
                name="status"
                defaultValue={status}
                onChange={(option: StatusOptionType | null) => {
                  if (option !== null && option !== undefined) {
                    setStatus(option)
                  }
                }}
                options={statusOptions}
              />
            </div>
            <div className="form_group action_buttons">
              <button type="reset" className="reset" onClick={handleClear}>
                Reset
              </button>
              <button type="submit">Filter</button>
            </div>
          </form>
        </li>
      </DropdownMenu>
    </Dropdown>
  )
}

export default Filter

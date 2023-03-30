import type { ReactNode } from 'react'
import { createColumnHelper } from '@tanstack/react-table'
import { HiDotsVertical } from 'react-icons/hi'
import type { User } from '../../@types'
import Filter from '../../components/filter'

const columnHelper = createColumnHelper<User>()
type Status = {
  active: string
  inactive: string
  blacklisted: string
  pending: string
}
function Badge({
  children,
  status
}: {
  children: ReactNode
  status: string
}): JSX.Element {
  const colors: Status = {
    active: 'light-success',
    inactive: 'light-info',
    blacklisted: 'light-danger',
    pending: 'light-warning'
  }
  return (
    <div className={`badge ${colors[status.toLowerCase()]}`}>{children}</div>
  )
}

const columns = [
  columnHelper.accessor('organization', {
    cell: info => info.getValue(),
    header: () => (
      <span className="table__head-cell">
        Organization <Filter />
      </span>
    )
  }),
  columnHelper.accessor(row => row.username, {
    id: 'username',
    cell: info => <span>{info.getValue()}</span>,
    header: () => (
      <span className="table__head-cell">
        Username <Filter />
      </span>
    )
  }),
  columnHelper.accessor('email', {
    header: () => (
      <span className="table__head-cell">
        Email <Filter />
      </span>
    ),
    cell: info => info.renderValue()
  }),
  columnHelper.accessor('phone', {
    header: () => (
      <span className="table__head-cell">
        Phone Number <Filter />
      </span>
    ),
    cell: info => <span>{info.getValue()}</span>
  }),
  columnHelper.accessor('date', {
    header: () => (
      <span className="table__head-cell">
        Date Joined <Filter />
      </span>
    ),
    cell: info => <span>{info.getValue()}</span>
  }),
  columnHelper.accessor('status', {
    header: () => (
      <span className="table__head-cell">
        Status <Filter />
      </span>
    ),
    cell: info => <Badge status={info.getValue()}>{info.getValue()}</Badge>
  }),
  columnHelper.accessor('action', {
    header: '',
    cell: info => <button>{<HiDotsVertical size={14} />}</button>
  })
]
export default columns

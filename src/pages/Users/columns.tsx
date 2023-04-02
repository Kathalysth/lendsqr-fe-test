import type { ReactNode } from 'react'
import { createColumnHelper } from '@tanstack/react-table'

import type { User } from '../../@types'
import Filter from '../../components/filter'
import MoreActions from './MoreActions'

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
      <div className="table__head-cell">
        <Filter title="Organization" />
      </div>
    )
  }),
  columnHelper.accessor(row => row.username, {
    id: 'username',
    cell: info => <span>{info.getValue()}</span>,
    header: () => (
      <div className="table__head-cell">
        <Filter title="Username" />
      </div>
    )
  }),
  columnHelper.accessor('email', {
    header: () => (
      <div className="table__head-cell">
        <Filter title="Email" />
      </div>
    ),
    cell: info => info.renderValue()
  }),
  columnHelper.accessor('phone', {
    header: () => (
      <div className="table__head-cell">
        <Filter title="Phone Number" />
      </div>
    ),
    cell: info => <span>{info.getValue()}</span>
  }),
  columnHelper.accessor('date', {
    header: () => (
      <div className="table__head-cell">
        <Filter title="Date Joined" />
      </div>
    ),
    cell: info => <span>{info.getValue()}</span>
  }),
  columnHelper.accessor('status', {
    header: () => (
      <div className="table__head-cell">
        <Filter title="Status" />
      </div>
    ),
    cell: info => <Badge status={info.getValue()}>{info.getValue()}</Badge>
  }),
  columnHelper.accessor(row => row.id, {
    id: 'id',
    header: '',
    cell: info => <MoreActions user={{ id: info.getValue() }} />
  })
]
export default columns

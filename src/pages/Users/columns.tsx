import type { ReactNode } from 'react'
import dayjs from 'dayjs'
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
  columnHelper.accessor('orgName', {
    cell: info => <span className="capitalize"> {info.getValue()}</span>,
    header: () => (
      <div className="table__head-cell">
        <Filter title="Organization" />
      </div>
    )
  }),
  columnHelper.accessor(row => row.userName, {
    id: 'username',
    cell: info => <span className="capitalize">{info.getValue()}</span>,
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
    cell: info => <span className="lowercase">{info.renderValue()}</span>
  }),
  columnHelper.accessor(row => row.profile.phoneNumber, {
    id: 'phoneNumber',
    header: () => (
      <div className="table__head-cell">
        <Filter title="Phone Number" />
      </div>
    ),
    cell: info => <span>{info.getValue()}</span>
  }),
  columnHelper.accessor('createdAt', {
    header: () => (
      <div className="table__head-cell">
        <Filter title="Date Joined" />
      </div>
    ),
    cell: info => (
      <span>
        {dayjs(new Date(info.getValue())).format('MMM DD, YYYY HH:mm A')}
      </span>
    )
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

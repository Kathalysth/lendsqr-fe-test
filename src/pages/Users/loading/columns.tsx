import { createColumnHelper } from '@tanstack/react-table'
import type { User } from '../../../@types'
import Filter from '../../../components/filter'
import Skeleton from '../../../components/skeleton'

const columnHelper = createColumnHelper<User>()

const columns = [
  columnHelper.accessor('orgName', {
    cell: info => <Skeleton className="py-1 px-3" />,
    header: () => (
      <div className="table__head-cell">
        <Filter title="Organization" />
      </div>
    )
  }),
  columnHelper.accessor(row => row.userName, {
    id: 'username',
    cell: info => <Skeleton className="py-1 px-4" />,
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
    cell: info => <Skeleton className="py-1 px-4" />
  }),
  columnHelper.accessor(row => row.profile.phoneNumber, {
    id: 'phoneNumber',
    header: () => (
      <div className="table__head-cell">
        <Filter title="Phone Number" />
      </div>
    ),
    cell: info => <Skeleton className="py-1 px-4" />
  }),
  columnHelper.accessor('createdAt', {
    header: () => (
      <div className="table__head-cell">
        <Filter title="Date Joined" />
      </div>
    ),
    cell: info => <Skeleton className="py-1 px-4" />
  }),
  columnHelper.accessor('status', {
    header: () => (
      <div className="table__head-cell">
        <Filter title="Status" />
      </div>
    ),
    cell: info => <Skeleton className="py-1 px-3" />
  }),
  columnHelper.accessor(row => row.id, {
    id: 'id',
    header: '',
    cell: info => <Skeleton className="py-1 px-1" />
  })
]
export default columns

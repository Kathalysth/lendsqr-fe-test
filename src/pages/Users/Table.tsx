import type { User } from '../../@types'
import Table from '../../components/table'
import columns from './columns'
import { loadColumns, loadData } from './loading'
import { appendUserStatus } from '../../utils/userUtils'

type UserTableProps = {
  users: User[]
  isLoading: boolean
}

function UserTable({ users, isLoading }: UserTableProps): JSX.Element {
  return (
    <Table
      data={isLoading ? loadData() : appendUserStatus(users)}
      // @ts-expect-error fixed
      columns={isLoading ? loadColumns : columns}
    />
  )
}

export default UserTable

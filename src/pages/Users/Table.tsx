import dayjs from 'dayjs'
import type { User } from '../../@types'
import Table from '../../components/table'
import columns from './columns'

function UserTable({ users }: { users: User[] }): JSX.Element {
  return <Table data={users.map((user: User) => {
    let status = 'active'
    if (!dayjs().add(1, 'day').isAfter(new Date(user.createdAt))) {
      status = 'pending'
    } else if (!dayjs().subtract(32, 'day').isBefore(new Date(user.lastActiveDate))) {
      status = 'inactive'
    }
    return { ...user, status }
  })} columns={columns} />
}

export default UserTable

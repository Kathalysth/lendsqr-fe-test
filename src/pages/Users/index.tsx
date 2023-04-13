import { useEffect } from 'react'
import dayjs from 'dayjs'
import { useQuery } from '@tanstack/react-query'
import type { UserStat, User } from '../../@types'
import StatCard from '../../components/stat-card'
import '../../styles/pages/users.scss'
// @ts-expect-error no support yet
import { ReactComponent as UsersIcon } from '../../assets/icons/users.svg'
// @ts-expect-error no support yet
import { ReactComponent as UsersGroupIcon } from '../../assets/icons/users-group.svg'
// @ts-expect-error no support yet
import { ReactComponent as FileCoinsIcon } from '../../assets/icons/file-coins.svg'
// @ts-expect-error no support yet
import { ReactComponent as DatabaseIcon } from '../../assets/icons/database.svg'
import UserTable from './Table'
import { fetchUsers } from '../../api'
import { addUsersToStore, setDocumentTitle } from '../../utils'
import { appendUserStatus } from '../../utils/userUtils'

function Users(): JSX.Element {
  const users = useQuery(['users'], fetchUsers, { placeholderData: [] })
  const userStats: UserStat[] = [
    {
      title: 'users',
      stat: users.data?.length ?? 0,
      icon: <UsersIcon />,
      iconColor: 'pink-light',
      isLoading: users.isFetching
    },
    {
      title: 'active users',
      stat:
        appendUserStatus(users?.data ?? []).filter((user: User) => {
          return user.status === 'active'
        }).length ?? 0,
      icon: <UsersGroupIcon />,
      iconColor: 'purple-light',
      isLoading: users.isFetching
    },
    {
      title: 'users with loans',
      stat: users.data?.map(user => user.education.loanRepayment).length ?? 0,
      icon: <FileCoinsIcon />,
      iconColor: 'warning-light',
      isLoading: users.isFetching
    },
    {
      title: 'users with savings',
      stat: users.data?.map(user => user.accountBalance).length ?? 0,
      icon: <DatabaseIcon />,
      iconColor: 'danger-light',
      isLoading: users.isFetching
    }
  ]
  if (users.data !== undefined && users.data?.length > 0) {
    addUsersToStore(users.data)
  }
  useEffect(() => {
    setDocumentTitle('Users')
  })
  return (
    <main id="app_content" className="app_content">
      <div className="app_users_list">
        <h1 className="page_title">Users</h1>
        <div>
          <ul className="app_stats">
            {userStats.map(stat => (
              <li key={stat.title}>
                <StatCard stat={stat} />
              </li>
            ))}
          </ul>
        </div>
        <div className="app_users_table">
          <UserTable users={users.data ?? []} isLoading={users.isFetching} />
        </div>
      </div>
    </main>
  )
}

export default Users

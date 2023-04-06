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

function Users(): JSX.Element {
  const users = useQuery(['users'], fetchUsers, { placeholderData: [] })
  console.log(users.data)

  const userStats: UserStat[] = [
    {
      title: 'users',
      stat: users.data?.length ?? 0,
      icon: <UsersIcon />,
      iconColor: 'pink-light'
    },
    {
      title: 'active users',
      stat: users.data?.map((user: User) => {
        let status = 'active'
        if (!dayjs().add(1, 'day').isAfter(new Date(user.createdAt))) {
          status = 'pending'
        } else if (!dayjs().subtract(32, 'day').isBefore(new Date(user.lastActiveDate))) {
          status = 'inactive'
        }
        return { ...user, status }
      }).filter((user: User) => user.status === 'active').length ?? 0,
      icon: <UsersGroupIcon />,
      iconColor: 'purple-light'
    },
    {
      title: 'users with loans',
      stat: users.data?.map(user => user.education.loanRepayment).length ?? 0,
      icon: <FileCoinsIcon />,
      iconColor: 'warning-light'
    },
    {
      title: 'users with savings',
      stat: users.data?.map(user => user.accountBalance).length ?? 0,
      icon: <DatabaseIcon />,
      iconColor: 'danger-light'
    }
  ]
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
          <UserTable users={users.data ?? []} />
        </div>
      </div>
    </main>
  )
}

export default Users

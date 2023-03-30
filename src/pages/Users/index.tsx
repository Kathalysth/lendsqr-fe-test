import type { UserStat } from '../../@types'
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

const userStats: UserStat[] = [
  {
    title: 'users',
    stat: 2430,
    icon: <UsersIcon />,
    iconColor: 'pink-light'
  },
  {
    title: 'active users',
    stat: 2430,
    icon: <UsersGroupIcon />,
    iconColor: 'purple-light'
  },
  {
    title: 'users with loans',
    stat: 12430,
    icon: <FileCoinsIcon />,
    iconColor: 'warning-light'
  },
  {
    title: 'users with savings',
    stat: 102430,
    icon: <DatabaseIcon />,
    iconColor: 'danger-light'
  }
]

function Users(): JSX.Element {
  return (
    <main className="app_content">
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
          <UserTable />
        </div>
      </div>
    </main>
  )
}

export default Users

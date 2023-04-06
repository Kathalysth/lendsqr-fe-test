import type { UserStat } from '../../@types'
import Skeleton from '../skeleton'

function StatCard({ stat }: { stat: UserStat }): JSX.Element {
  return (
    <div className="stat_card">
      <div className={`stat_icon ${stat.iconColor}`}>{stat.icon}</div>
      <h4 className="stat_title">{stat.title}</h4>
      {stat.isLoading ? (
        <Skeleton className="p-1" />
      ) : (
        <span className="stat_num">{stat.stat.toLocaleString('en-US')}</span>
      )}
    </div>
  )
}

export default StatCard

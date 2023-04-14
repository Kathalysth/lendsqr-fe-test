import type { User } from '../../@types'
import dayjs from 'dayjs'

export type Filter = {
  status?: 'active' | 'inactive' | 'blacklisted' | 'pending'
  organization?: string
  phoneNumber?: string
  date?: string
  username?: string
  email?: string
}
export const filter = (data: User[], filter: Filter): User[] => {
  return data.filter((user: User) => {
    if (filter !== null && filter !== undefined) {
      if (
        filter.email !== undefined &&
        filter.email.toLowerCase() !== user.email.toLowerCase()
      ) {
        return false
      }
      if (
        filter.username !== undefined &&
        filter.username.toLowerCase() !== user.userName.toLowerCase()
      ) {
        return false
      }
      if (
        filter.date !== undefined &&
        !dayjs(new Date(filter.date)).isSame(new Date(user.createdAt), 'date')
      ) {
        return false
      }
      if (
        filter.phoneNumber !== undefined &&
        filter.phoneNumber.toLowerCase() !==
          user.profile.phoneNumber.toLowerCase()
      ) {
        return false
      }
      if (
        filter.organization !== undefined &&
        filter.organization.toLowerCase() !== user.orgName.toLowerCase()
      ) {
        return false
      }
      if (
        filter.status !== undefined &&
        filter.status.toLowerCase() !== user.status.toLowerCase()
      ) {
        return false
      }
    }

    return true
  })
}

import dayjs from 'dayjs'
import type { User } from '../@types'

export function appendUserStatus(users: User[]): User[] {
  return users.map((user: User) => {
    let status = 'active'
    if (!dayjs().add(1, 'day').isAfter(new Date(user.createdAt))) {
      status = 'pending'
    } else if (
      !dayjs().subtract(32, 'day').isBefore(new Date(user.lastActiveDate))
    ) {
      status = 'inactive'
    }
    return { ...user, status } as User
  })
}

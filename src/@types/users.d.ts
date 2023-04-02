export type UserStat = {
  title: string
  stat: number
  icon: JSX.Element
  iconColor: string
}

export type User = {
  id: string
  organization: string
  username: string
  email: string
  phone: number
  date: string
  status: string
  action: string
}

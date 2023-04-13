export type UserStat = {
  title: string
  stat: number
  icon: JSX.Element
  iconColor: string
  isLoading: boolean
}

export type UserStatus = 'active' | 'inactive' | 'blacklisted' | 'pending' | ''

export type User = {
  id: string
  profile: {
    firstName: string
    lastName: string
    gender: string
    avatar: string
    phoneNumber: string
    bvn: string
    address: string
  }
  education: {
    duration: string
    level: string
    employmentStatus: string
    loanRepayment: string
    monthlyIncome: string[2]
    sector: string
    officeEmail: string
  }
  guarantor: {
    firstName: string
    lastName: string
    gender: string
    address: string
    phoneNumber: string
  }
  socials: {
    facebook: string
    instagram: string
    twitter: string
  }
  orgName: string
  userName: string
  email: string
  accountBalance: string
  accountNumber: string
  lastActiveDate: string
  createdAt: string
  status: UserStatus
  action: string
}

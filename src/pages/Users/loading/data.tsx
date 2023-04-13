import type { User } from '../../../@types'
import { getArrayFromInteger } from '../../../utils'

function loadData(): User[] {
  return getArrayFromInteger(10).map((num: number): User => {
    return {
      id: '',
      profile: {
        firstName: '',
        lastName: '',
        gender: '',
        avatar: '',
        phoneNumber: '',
        bvn: '',
        address: ''
      },
      education: {
        duration: '',
        level: '',
        employmentStatus: '',
        loanRepayment: '',
        monthlyIncome: '',
        sector: '',
        officeEmail: ''
      },
      guarantor: {
        firstName: '',
        lastName: '',
        gender: '',
        address: '',
        phoneNumber: ''
      },
      socials: {
        facebook: '',
        instagram: '',
        twitter: ''
      },
      orgName: '',
      userName: '',
      email: '',
      accountBalance: '',
      accountNumber: '',
      lastActiveDate: '',
      createdAt: '',
      status: '',
      action: ''
    }
  })
}

export default loadData

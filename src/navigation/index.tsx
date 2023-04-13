import type { nav } from '../@types'
// @ts-expect-error no support yet
import { ReactComponent as HomeIcon } from '../assets/icons/home.svg'
// @ts-expect-error no support yet
import { ReactComponent as UsersFriendsIcon } from '../assets/icons/user-friends.svg'
// @ts-expect-error no support yet
import { ReactComponent as UsersIcon } from '../assets/icons/users-alt.svg'
// @ts-expect-error no support yet
import { ReactComponent as SackIcon } from '../assets/icons/sack.svg'
// @ts-expect-error no support yet
import { ReactComponent as BadgePercentIcon } from '../assets/icons/badge-percent.svg'
// @ts-expect-error no support yet
import { ReactComponent as ChartBarIcon } from '../assets/icons/chart-bar.svg'
// @ts-expect-error no support yet
import { ReactComponent as ClipboardIcon } from '../assets/icons/clipboard-list.svg'
// @ts-expect-error no support yet
import { ReactComponent as CoinsIcon } from '../assets/icons/coins-solid.svg'
// @ts-expect-error no support yet
import { ReactComponent as HandshakeIcon } from '../assets/icons/handshake-regular.svg'
// @ts-expect-error no support yet
import { ReactComponent as PiggyBankIcon } from '../assets/icons/piggy-bank.svg'
// @ts-expect-error no support yet
import { ReactComponent as ScrollIcon } from '../assets/icons/scroll.svg'
// @ts-expect-error no support yet
import { ReactComponent as TireIcon } from '../assets/icons/tire.svg'
// @ts-expect-error no support yet
import { ReactComponent as UserXIcon } from '../assets/icons/user-times.svg'
// @ts-expect-error no support yet
import { ReactComponent as UserCheckIcon } from '../assets/icons/user-check.svg'
// @ts-expect-error no support yet
import { ReactComponent as BriefcaseIcon } from '../assets/icons/briefcase.svg'
// @ts-expect-error no support yet
import { ReactComponent as LoanRequestIcon } from '../assets/icons/hands-money.svg'
// @ts-expect-error no support yet
import { ReactComponent as TransactionIcon } from '../assets/icons/icon.svg'
// @ts-expect-error no support yet
import { ReactComponent as UserCogIcon } from '../assets/icons/user-cog.svg'
// @ts-expect-error no support yet
import { ReactComponent as GroupIcon } from '../assets/icons/Group.svg'
// @ts-expect-error no support yet
import { ReactComponent as SlidersIcon } from '../assets/icons/sliders-h.svg'
// @ts-expect-error no support yet
import { ReactComponent as ServicesIcon } from '../assets/icons/galaxy.svg'
const navigation: nav[] = [
  {
    title: 'Dashboard',
    icon: HomeIcon,
    link: '/dashboard'
  },
  {
    title: 'Customers',
    link: '',
    children: [
      { title: 'Users', link: '/dashboard/users', icon: UsersFriendsIcon },
      { title: 'Guarantors', link: '/dashboard/guarantors', icon: UsersIcon },
      { title: 'Loans', link: '/dashboard/loans', icon: SackIcon },
      {
        title: 'Decision Model',
        link: '/dashboard/decision-model',
        icon: HandshakeIcon
      },
      { title: 'Savings', link: '/dashboard/savings', icon: PiggyBankIcon },
      {
        title: 'Loan Requests',
        link: '/dashboard/loan-requests',
        icon: LoanRequestIcon
      },
      { title: 'Whitelist', link: '/dashboard/whitelist', icon: UserCheckIcon },
      { title: 'Karma', link: '/dashboard/karma', icon: UserXIcon }
    ]
  },
  {
    title: 'Businesses',
    link: '',
    children: [
      {
        title: 'Organization',
        link: '/dashboard/organization',
        icon: BriefcaseIcon
      },
      {
        title: 'Loan Products',
        link: '/dashboard/loan-products',
        icon: SackIcon
      },
      {
        title: 'Savings Products',
        link: '/dashboard/savings-products',
        icon: GroupIcon
      },
      {
        title: 'Fees and Charges',
        link: '/dashboard/fees-charges',
        icon: CoinsIcon
      },
      {
        title: 'Transactions',
        link: '/dashboard/transactions',
        icon: TransactionIcon
      },
      { title: 'Services', link: '/dashboard/services', icon: ServicesIcon },
      {
        title: 'Service Account',
        link: '/dashboard/service-account',
        icon: UserCogIcon
      },
      {
        title: 'Settlements',
        link: '/dashboard/settlements',
        icon: ScrollIcon
      },
      { title: 'Reports', link: '/dashboard/reports', icon: ChartBarIcon }
    ]
  },
  {
    title: 'Settings',
    link: '',
    children: [
      {
        title: 'Preferences',
        link: '/dashboard/preferences',
        icon: SlidersIcon
      },
      {
        title: 'Fees and Pricing',
        link: '/dashboard/pricing',
        icon: BadgePercentIcon
      },
      {
        title: 'Audit Logs',
        link: '/dashboard/audit-logs',
        icon: ClipboardIcon
      },
      {
        title: 'Systems Messages',
        link: '/dashboard/systems-messages',
        icon: TireIcon
      }
    ]
  }
]
export default navigation

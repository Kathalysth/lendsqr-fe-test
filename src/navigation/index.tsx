import type { nav } from '../@types'
// @ts-expect-error no support yet
import { ReactComponent as HomeIcon } from '../assets/icons/home 1.svg'
// @ts-expect-error no support yet
import { ReactComponent as UsersFriendsIcon } from '../assets/icons/user-friends 1.svg'
// @ts-expect-error no support yet
import { ReactComponent as UsersIcon } from '../assets/icons/users 1.svg'
// @ts-expect-error no support yet
import { ReactComponent as SackIcon } from '../assets/icons/sack 1.svg'
// @ts-expect-error no support yet
import { ReactComponent as BadgePercentIcon } from '../assets/icons/badge-percent 1.svg'
// @ts-expect-error no support yet
import { ReactComponent as ChartBarIcon } from '../assets/icons/chart-bar 2.svg'
// @ts-expect-error no support yet
import { ReactComponent as ClipboardIcon } from '../assets/icons/clipboard-list 1.svg'
// @ts-expect-error no support yet
import { ReactComponent as CoinsIcon } from '../assets/icons/coins-solid 1.svg'
// @ts-expect-error no support yet
import { ReactComponent as HandshakeIcon } from '../assets/icons/handshake-regular 1.svg'
// @ts-expect-error no support yet
import { ReactComponent as PiggyBankIcon } from '../assets/icons/piggy-bank 1.svg'
// @ts-expect-error no support yet
import { ReactComponent as ScrollIcon } from '../assets/icons/scroll 1.svg'
// @ts-expect-error no support yet
import { ReactComponent as TireIcon } from '../assets/icons/tire 1.svg'
// @ts-expect-error no support yet
import { ReactComponent as UserXIcon } from '../assets/icons/user-times 1.svg'
// @ts-expect-error no support yet
import { ReactComponent as UserCheckIcon } from '../assets/icons/user-check 1.svg'
// @ts-expect-error no support yet
import { ReactComponent as BriefcaseIcon } from '../assets/icons/briefcase 1.svg'
// @ts-expect-error no support yet
import { ReactComponent as LoanRequestIcon } from '../assets/icons/Group 104.svg'
// @ts-expect-error no support yet
import { ReactComponent as TransactionIcon } from '../assets/icons/icon.svg'
// @ts-expect-error no support yet
import { ReactComponent as UserCogIcon } from '../assets/icons/user-cog 1.svg'
// @ts-expect-error no support yet
import { ReactComponent as GroupIcon } from '../assets/icons/Group.svg'
// @ts-expect-error no support yet
import { ReactComponent as SlidersIcon } from '../assets/icons/sliders-h 1.svg'
// @ts-expect-error no support yet
import { ReactComponent as ServicesIcon } from '../assets/icons/galaxy 1.svg'
const navigation: nav[] = [
  {
    title: 'Dashboard',
    icon: HomeIcon,
    link: '/'
  },
  {
    title: 'Customers',
    link: '',
    children: [
      { title: 'Users', link: '/users', icon: UsersFriendsIcon },
      { title: 'Guarantors', link: '/guarantors', icon: UsersIcon },
      { title: 'Loans', link: '/loans', icon: SackIcon },
      { title: 'Decision Model', link: '/decision-model', icon: HandshakeIcon },
      { title: 'Savings', link: '/savings', icon: PiggyBankIcon },
      { title: 'Loan Requests', link: '/loan-requests', icon: LoanRequestIcon },
      { title: 'Whitelist', link: '/whitelist', icon: UserCheckIcon },
      { title: 'Karma', link: '/karma', icon: UserXIcon }
    ]
  },
  {
    title: 'Businesses',
    link: '',
    children: [
      { title: 'Organization', link: '/organization', icon: BriefcaseIcon },
      { title: 'Loan Products', link: '/loan-products', icon: SackIcon },
      {
        title: 'Savings Products',
        link: '/savings-products',
        icon: GroupIcon
      },
      { title: 'Fees and Charges', link: '/fees-charges', icon: CoinsIcon },
      { title: 'Transactions', link: '/transactions', icon: TransactionIcon },
      { title: 'Services', link: '/services', icon: ServicesIcon },
      { title: 'Service Account', link: '/service-account', icon: UserCogIcon },
      { title: 'Settlements', link: '/settlements', icon: ScrollIcon },
      { title: 'Reports', link: '/reports', icon: ChartBarIcon }
    ]
  },
  {
    title: 'Settings',
    link: '',
    children: [
      { title: 'Preferences', link: '/preferences', icon: SlidersIcon },
      { title: 'Fees and Pricing', link: '/pricing', icon: BadgePercentIcon },
      { title: 'Audit Logs', link: '/audit-logs', icon: ClipboardIcon },
      { title: 'Systems Messages', link: '/systems-messages', icon: TireIcon }
    ]
  }
]
export default navigation

import Table from '../../components/table'
import columns from './columns'

const data = [
  {
    organization: 'Lendsqr',
    email: 'skyymatrix@gmail.com',
    username: 'bolade',
    phone: '09036438765',
    date: '2022-04-12',
    status: 'active'
  },
  {
    organization: 'Lendsqr',
    email: 'skfskj',
    username: 'bolade',
    phone: '08134534587',
    date: '2022-04-12',
    status: 'active'
  },
  {
    organization: 'Lendstar',
    email: 'opeyemi@gmail.com',
    username: 'frank',
    phone: '08134534587',
    date: '2022-04-12',
    status: 'blacklisted'
  }
]

function UserTable(): JSX.Element {
  return <Table data={data} columns={columns} />
}

export default UserTable

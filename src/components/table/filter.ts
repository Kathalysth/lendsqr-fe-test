import _ from 'lodash'
import type { User } from '../../@types'

type Filter = {
  page: number
  perPage: number
  sort?: 'asc' | 'desc' | undefined
  sortColumn?: string
}
export const filter = (data: User[], filter: Filter): User[] => {
  const { page = 1, perPage = 10, sort = 'asc', sortColumn = '' } = filter

  const sorted: User[] = _.orderBy(data, sortColumn, sort)
  // ** Returns paginated array
  const paginateArray = (
    array: User[],
    perPage: number,
    page: number
  ): User[] => array.slice((page - 1) * perPage, page * perPage)

  return paginateArray(sorted, perPage, page)
}

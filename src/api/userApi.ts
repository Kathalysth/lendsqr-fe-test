import fetchAPI from './baseApi'
import { BASE_API_URL } from '../utils'
import { isFetchSuccess } from './utils'
import type { User } from '../@types'

//  **Get Users */
export const fetchUsers = async (): Promise<User[]> => {
  const apiRes = await fetchAPI.get(`${BASE_API_URL}/users`)
  if (isFetchSuccess(apiRes)) {
    throw new Error('Something went wrong')
  }

  return apiRes.data
}

//  **Get User */
export const fetchUser = async ({ queryKey }): Promise<User> => {
  const id: number = queryKey[1]
  const apiRes = await fetchAPI.get(`${BASE_API_URL}/users/${id}`)

  if (isFetchSuccess(apiRes)) {
    throw new Error('Something went wrong')
  }

  return apiRes.data
}

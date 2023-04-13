import { QueryFunctionContext } from '@tanstack/react-query'
import fetchAPI from './baseApi'
import { BASE_API_URL } from '../utils'
import { isFetchSuccess } from './utils'
import type { User } from '../@types'

//  **Get Users */
export const fetchUsers = async (): Promise<User[]> => {
  const apiRes = await fetchAPI.get<User[]>(`${BASE_API_URL}/users`)
  if (isFetchSuccess(apiRes)) {
    throw new Error('Something went wrong')
  }

  return apiRes.data
}

//  **Get User */
export const fetchUser = async ({
  queryKey
}: QueryFunctionContext<
  [string, string | undefined | null]
>): Promise<User> => {
  const id: string | undefined | null = queryKey[1]
  const apiRes = await fetchAPI.get<User>(`${BASE_API_URL}/users/${id}`)

  if (isFetchSuccess(apiRes)) {
    throw new Error('Something went wrong')
  }

  return apiRes.data
}

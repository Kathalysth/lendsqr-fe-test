import { AxiosResponse } from 'axios'
export function isFetchSuccess(response: AxiosResponse): boolean {
  //  eslint-disable-next-line
  return response.status !== 200 ? true : false
}

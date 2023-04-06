export function isFetchSuccess(response): boolean {
  //  eslint-disable-next-line
  return response.status !== 200 ? true : false
}

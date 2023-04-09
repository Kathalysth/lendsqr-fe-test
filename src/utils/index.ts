export function getArrayFromInteger(number: number): number[] {
  return [...Array(number)].map((y, i) => i)
}
export * from './constants'
export * from './stringUtils'
export * from './domUtils'

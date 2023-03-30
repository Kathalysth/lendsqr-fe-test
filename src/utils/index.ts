export function getArrayFromInteger(number: number): number[] {
  return [...Array(number)].map((y, i) => i)
}

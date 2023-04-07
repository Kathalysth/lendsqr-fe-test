import type { ReactComponentElement } from 'react'
export type nav = {
  title: string
  link: string
  icon?: ReactComponentElement
  children?: nav[]
}

import React from 'react'
import type { Dispatch, SetStateAction } from 'react'
import type { Filter } from './filter'

type TableContextProps = {
  setFilters: Dispatch<SetStateAction<Filter>>
  filters: Filter
  organizations: string[]
}
export const TableContext = React.createContext<TableContextProps>({
  setFilters: state => {
    return {}
  },
  filters: {},
  organizations: []
})

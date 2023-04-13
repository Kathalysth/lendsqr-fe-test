import { useState, useMemo } from 'react'
import type { ChangeEvent } from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import type { ColumnDef } from '@tanstack/react-table'
import { FaListUl } from 'react-icons/fa'
import Pagination from './pagination'
import { filter } from './filter'
import type { Filter } from './filter'
import { TableContext } from './TableContext'
import type { User } from '../../@types'

function Table({
  data,
  columns
}: {
  data: User[]
  columns: Array<ColumnDef<User>>
}): JSX.Element {
  const [filters, setFilters] = useState<Filter>({})
  const [itemOffset, setItemOffset] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)
  const endOffset = itemOffset + rowsPerPage

  // Invoke when user click to request another page.
  const handlePageClick = (event): void => {
    const newOffset = (event.selected * rowsPerPage) % data.length
    setItemOffset(newOffset)
  }

  // ** Function in get data on rows per page
  const handlePerPage = (e: ChangeEvent<HTMLSelectElement>): void => {
    const value = parseInt(e.currentTarget.value)
    setRowsPerPage(value)
  }
  function renderPageLimitSelect(): JSX.Element {
    return (
      <>
        <select
          name="pagination-limits"
          id="pagination-limits-select"
          className="pagination_limits-select"
          style={{ width: '5rem' }}
          value={rowsPerPage}
          // @ts-expect-error okay
          onChange={handlePerPage}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={75}>75</option>
          <option value={100}>100</option>
        </select>
      </>
    )
  }
  const filteredData = useMemo(() => {
    return filter(data, filters)
  }, [data, filters])

  const paginatedData = useMemo(() => {
    return filteredData.slice(itemOffset, endOffset)
  }, [itemOffset, endOffset, filteredData])

  const table = useReactTable({
    data: paginatedData,
    columns,

    getCoreRowModel: getCoreRowModel()
  })

  return (
    <TableContext.Provider
      value={{
        setFilters,
        filters,
        organizations: data.map((user: User) => {
          return user.orgName
        })
      }}
    >
      <div id="app-table" className="table_wrapper">
        <table>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              table.getRowModel().rows.map(row => (
                <tr key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  className="text-center text-info"
                  colSpan={columns.length - 1}
                >
                  <div className="flex items-center flex-column ">
                    <FaListUl size={50} />
                    <span className="mt-1">No Records</span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="table__footer">
        <span>
          Showing {renderPageLimitSelect()} out of {filteredData.length}
        </span>
        <Pagination
          itemsPerPage={rowsPerPage}
          items={filteredData}
          handlePageClick={handlePageClick}
        />
      </div>
    </TableContext.Provider>
  )
}

export default Table

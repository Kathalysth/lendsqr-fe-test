import { useState, useMemo } from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import Pagination from './pagination'

function Table({ data, columns }): JSX.Element {
  const [itemOffset, setItemOffset] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)
  const endOffset = itemOffset + rowsPerPage

  // Invoke when user click to request another page.
  const handlePageClick = (event: any): void => {
    const newOffset = (event.selected * rowsPerPage) % data.length
    setItemOffset(newOffset)
  }

  // ** Function in get data on rows per page
  const handlePerPage = e => {
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
  const paginatedData = useMemo(() => {
    return data.slice(itemOffset, endOffset)
  }, [data, itemOffset, endOffset])

  const table = useReactTable({
    data: paginatedData,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <>
      <div className="table_wrapper">
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
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table__footer">
        <span>
          Showing {renderPageLimitSelect()} out of {data.length}
        </span>
        <Pagination
          itemsPerPage={rowsPerPage}
          items={data}
          handlePageClick={handlePageClick}
        />
      </div>
    </>
  )
}

export default Table

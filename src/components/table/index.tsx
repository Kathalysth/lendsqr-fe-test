import {
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table'
import Pagination from './pagination'

function renderPageLimitSelect(): JSX.Element {
  return (
    <>
      {/* <label htmlFor="pet-select">Choose a pet:</label> */}

      <select
        name="pagination-limits"
        id="pagination-limits-select"
        className="pagination_limits-select"
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

function Table({ data, columns }): JSX.Element {
  const table = useReactTable({
    data,
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
        <span>Showing {renderPageLimitSelect()} out of 500</span>
        <Pagination itemsPerPage={1} items={data} />
      </div>
    </>
  )
}

export default Table

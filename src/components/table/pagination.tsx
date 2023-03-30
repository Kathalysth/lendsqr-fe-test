import { useState } from 'react'
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight
} from 'react-icons/md'
import ReactPaginate from 'react-paginate'

export default function Pagination({
  itemsPerPage = 10,
  items = []
}: {
  itemsPerPage: number
  items: []
}): JSX.Element {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0)

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage
  console.log(`Loading items from ${itemOffset} to ${endOffset}`)
  const currentItems = items.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(items.length / itemsPerPage)

  // Invoke when user click to request another page.
  const handlePageClick = (event: any): void => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
    setItemOffset(newOffset)
  }

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={<MdOutlineKeyboardArrowRight size={18} />}
      nextClassName="table_pagination_next"
      pageLinkClassName="table_pagination_link"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel={<MdOutlineKeyboardArrowLeft size={18} />}
      previousClassName="table_pagination_previous"
      renderOnZeroPageCount={null}
      containerClassName="table_pagination"
    />
  )
}

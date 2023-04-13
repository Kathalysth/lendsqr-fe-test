import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight
} from 'react-icons/md'
import ReactPaginate from 'react-paginate'
import type { User } from '../../@types'

export default function Pagination({
  itemsPerPage = 10,
  items = [],
  handlePageClick
}: {
  itemsPerPage: number
  items: User[]
  handlePageClick: (event: any) => void
}): JSX.Element {
  const pageCount = Math.ceil(items.length / itemsPerPage)

  return (
    <ReactPaginate
      breakLabel="..."
      breakLinkClassName="table_pagination_link"
      nextLabel={<MdOutlineKeyboardArrowRight size={18} />}
      nextClassName="table_pagination_next"
      pageLinkClassName="table_pagination_link"
      activeLinkClassName="table_pagination_active"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel={<MdOutlineKeyboardArrowLeft size={18} />}
      previousClassName="table_pagination_previous"
      // @ts-expect-error okay
      renderOnZeroPageCount={null}
      containerClassName="table_pagination"
    />
  )
}

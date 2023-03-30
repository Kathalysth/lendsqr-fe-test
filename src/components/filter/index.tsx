import { useState } from 'react'
import { IoFilter } from 'react-icons/io5'
import FilterModal from './modal'

function Filter(): JSX.Element {
  const [isOpen, setOpen] = useState(false) // toggles button visibility
  const [filterCoordinates, setFilterCoordinates] = useState({})
  const toggleOpen = (): void => {
    setOpen(!isOpen)
  }
  return (
    <>
      <button
        aria-label="Toggle Table Filter"
        onClick={(e): void => {
          const rect = e.target.getBoundingClientRect()
          setFilterCoordinates({
            left: rect.left,
            top: rect.top + rect.height
          })
          toggleOpen()
        }}
      >
        <IoFilter size={16} />
      </button>
      {isOpen ? <FilterModal position={filterCoordinates} /> : null}
    </>
  )
}

export default Filter

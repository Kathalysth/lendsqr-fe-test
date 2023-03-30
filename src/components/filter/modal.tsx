import Portal from '../Portal'

function FilterModal({ position }): JSX.Element {
  return (
    <Portal style={position}>
      <div>Filter Modal</div>
    </Portal>
  )
}

export default FilterModal

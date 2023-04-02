import { useContext, Fragment } from 'react'
import type { ReactNode } from 'react'
import { DropdownContext } from './DropdownContext'

function DropdownToggle({ children }: { children: ReactNode }): JSX.Element {
  const { toggleOpen, setReferenceElement } = useContext(DropdownContext)
  return (
    <Fragment>
      <button
        type="button"
        onClick={toggleOpen}
        ref={setReferenceElement}
        className="dropdown__toggle"
      >
        {children}
      </button>
    </Fragment>
  )
}

export default DropdownToggle

import { useContext, Fragment } from 'react'
import type { ReactNode } from 'react'
import { DropdownContext } from './DropdownContext'
import classnames from 'classnames'

function DropdownToggle({
  children,
  ...props
}: {
  children: ReactNode
  className?: string
}): JSX.Element {
  const { toggleOpen, setReferenceElement } = useContext(DropdownContext)
  return (
    <Fragment>
      <button
        type="button"
        onClick={toggleOpen}
        ref={setReferenceElement}
        className={classnames('dropdown__toggle', props.className)}
      >
        {children}
      </button>
    </Fragment>
  )
}

export default DropdownToggle

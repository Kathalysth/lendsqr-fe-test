import { useContext, Fragment } from 'react'
import Portal from '../Portal'
import classnames from 'classnames'
import type { ReactNode } from 'react'
import { DropdownContext } from './DropdownContext'

function DropdownMenu({
  children,
  className
}: {
  children: ReactNode
  className?: string
}): JSX.Element {
  const { isOpen, styles, attributes, setPopperElement } =
    useContext(DropdownContext)
  return (
    <Fragment>
      {isOpen ? (
        <Portal>
          <ul
            className={classnames('dropdown__container', className)}
            ref={setPopperElement}
            // @ts-expect-error context
            style={{ ...styles.popper, margin: '0.5rem' }}
            // @ts-expect-error context
            {...attributes.popper}
          >
            {children}
          </ul>
        </Portal>
      ) : null}
    </Fragment>
  )
}

export default DropdownMenu

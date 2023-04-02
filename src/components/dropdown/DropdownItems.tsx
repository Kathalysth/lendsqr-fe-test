import { useContext } from 'react'
import classnames from 'classnames'
import type { ReactNode } from 'react'
import { DropdownContext } from './DropdownContext'
function DropdownItems({
  children,
  className
}: {
  children: ReactNode
  className?: string
}): JSX.Element {
  const { toggleOpen } = useContext(DropdownContext)
  return (
    <li
      role="button"
      tabIndex={-1}
      className={classnames(className)}
      onClick={toggleOpen}
    >
      {children}
    </li>
  )
}

export default DropdownItems

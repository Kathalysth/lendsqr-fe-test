import { useContext } from 'react'
import classnames from 'classnames'
import type { ReactNode } from 'react'
import { DropdownContext } from './DropdownContext'
import { Link } from 'react-router-dom'
function DropdownItems({
  children,
  className,
  tag,
  to,
  ...props
}: {
  children: ReactNode
  className?: string
  tag?: string
  to?: string
}): JSX.Element {
  const { toggleOpen } = useContext(DropdownContext)
  if (tag === 'a') {
    return (
      <Link
        to={to ?? ''}
        role="link"
        tabIndex={-1}
        className={classnames(className)}
        onClick={toggleOpen}
        {...props}
      >
        {children}
      </Link>
    )
  }
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

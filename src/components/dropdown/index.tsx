import { useState } from 'react'
import type { ReactNode } from 'react'
import { DropdownContext } from './DropdownContext'
import { usePopper } from 'react-popper'
import classnames from 'classnames'
import type { Placement } from '@popperjs/core'
import useClickOutside from '../../hooks/useClickOutside'

function Dropdown({
  children,
  placement,
  className
}: {
  children: ReactNode
  placement?: Placement
  className?: string
}): JSX.Element {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  )
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null)
  const [isOpen, setOpen] = useState<boolean>(false)
  const toggleOpen = (): void => {
    setOpen(!isOpen)
  }
  const domNode = useClickOutside(() => {
    setOpen(false)
  }, popperElement)

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: `${placement ?? 'bottom-start'}`,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8]
        }
      },
      {
        name: 'preventOverflow',
        options: {
          padding: { top: 8, right: 16 }
        }
      }
    ]
  })

  return (
    <DropdownContext.Provider
      value={{
        // @ts-expect-error fix
        setPopperElement,
        // @ts-expect-error fix
        setReferenceElement,
        toggleOpen,
        isOpen,
        styles,
        attributes
      }}
    >
      <div ref={domNode} className={classnames('dropdown__menu', className)}>
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

export default Dropdown

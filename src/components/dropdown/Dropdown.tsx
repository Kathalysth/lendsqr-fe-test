import { useState } from 'react'
import type { ReactNode, Dispatch, SetStateAction } from 'react'
import { DropdownContext } from './DropdownContext'
import { usePopper } from 'react-popper'
import classnames from 'classnames'
import type { Placement } from '@popperjs/core'
import useClickOutside from '../../hooks/useClickOutside'

type DropdownProps = {
  children: ReactNode
  placement?: Placement
  className?: string
  isOpen: boolean
  type?: string
  toggleOpen: () => void
  setOpen: Dispatch<SetStateAction<boolean>>
}
function Dropdown({
  children,
  placement,
  className,
  isOpen,
  type,
  toggleOpen,
  setOpen
}: DropdownProps): JSX.Element {
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  )
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null)
  const domNode = useClickOutside(
    () => {
      setOpen(false)
    },
    popperElement,
    type
  )

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

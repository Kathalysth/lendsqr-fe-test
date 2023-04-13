import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'

function Portal({ children }: { children: ReactNode }): JSX.Element | null {
  const elRef = useRef<HTMLDivElement | null>(null)
  if (elRef.current === null) {
    elRef.current = document.createElement('div')
  }

  useEffect(() => {
    if (elRef.current !== null) {
      document.body.appendChild(elRef.current)
    }
    return () => {
      if (elRef.current !== null) {
        document.body.removeChild(elRef.current)
      }
    }
  }, [])
  if (elRef.current !== null) {
    return createPortal(<div>{children}</div>, elRef.current)
  }
  return null
}

export default Portal

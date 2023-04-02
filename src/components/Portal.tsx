import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'

function Portal({ children }: { children: ReactNode }): JSX.Element {
  const elRef = useRef(null)
  if (!elRef.current) {
    elRef.current = document.createElement('div')
  }

  useEffect(() => {
    document.body.appendChild(elRef.current)
    return () => document.body.removeChild(elRef.current)
  }, [])

  return createPortal(<div>{children}</div>, elRef.current)
}

export default Portal

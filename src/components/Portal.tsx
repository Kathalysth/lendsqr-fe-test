import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { createPortal } from 'react-dom'

function Portal({ children, style }: { children: ReactNode }): JSX.Element {
  const mount = document.body
  const el = document.createElement('div')
  el.classList.add('portal')
  el.setAttribute(
    'style',
    `position:absolute;left:${style.left}px;top:${style.top}px`
  )
  useEffect(() => {
    mount.appendChild(el)
    return () => mount.removeChild(el)
  }, [el, mount])

  return createPortal(children, el)
}

export default Portal

import { useEffect, useRef } from 'react'
import type { ReactNode, MutableRefObject } from 'react'

function useClickOutside(
  handler: () => void,
  popperElement: ReactNode | null
): MutableRefObject<ReactNode> {
  const domNode = useRef(null)
  useEffect(() => {
    const mouseDownHandler = (event): void => {
      if (popperElement !== null && popperElement !== undefined) {
        if (
          !popperElement.contains(event.target) &&
          !domNode.current.contains(event.target)
        ) {
          handler()
        }
      }
    }

    document.addEventListener('mousedown', mouseDownHandler)

    return () => {
      document.removeEventListener('mousedown', mouseDownHandler)
    }
  }, [popperElement])

  return domNode
}
export default useClickOutside

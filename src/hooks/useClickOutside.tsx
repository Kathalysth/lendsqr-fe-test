import { useEffect, useRef } from 'react'
import type { RefObject } from 'react'

function useClickOutside(
  handler: () => void,
  popperElement: HTMLElement | null
): RefObject<HTMLDivElement> {
  const domNode = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const mouseDownHandler = (event: MouseEvent): void => {
      if (popperElement !== null && popperElement !== undefined) {
        if (
          !popperElement.contains(event.target as Node) &&
          !domNode?.current?.contains(event.target as Node)
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

import { useEffect, useRef } from 'react'
import type { LegacyRef, MutableRefObject } from 'react'

function useClickOutside(
  handler: () => void,
  popperElement: HTMLElement | null
): LegacyRef<HTMLDivElement> | null {
  const domNode = useRef<LegacyRef<HTMLDivElement> | null>(null)
  useEffect(() => {
    const mouseDownHandler = (event): void => {
      if (popperElement !== null && popperElement !== undefined) {
        if (
          !popperElement.contains(event.target) &&
          !domNode.current?.contains(event.target)
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

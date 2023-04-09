import { useEffect, useRef } from 'react'

function useClickOutside(
  handler: () => void,
  popperElement: HTMLElement | null
): HTMLElement | null {
  const domNode = useRef<HTMLElement | null>(null)
  useEffect(() => {
    // @ts-expect-error okay
    const mouseDownHandler = (event): void => {
      if (popperElement !== null && popperElement !== undefined) {
        if (
          (!popperElement.contains(event.target) && domNode === null) ||
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

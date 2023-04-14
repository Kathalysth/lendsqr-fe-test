import { useEffect, useRef, useState } from 'react'
import type { RefObject } from 'react'

function useClickOutside(
  handler: () => void,
  popperElement: HTMLElement | null,
  type?: string
): RefObject<HTMLDivElement> {
  const domNode = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const visibilityHandler = (entries: IntersectionObserverEntry[]): void => {
    const [entry] = entries
    setIsVisible(entry.isIntersecting)
  }

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  }

  useEffect(() => {
    const observer = new IntersectionObserver(visibilityHandler, options)
    if (domNode.current) {
      observer.observe(domNode.current)
    }
    if (
      popperElement !== null &&
      popperElement !== undefined &&
      !isVisible &&
      !type
    ) {
      handler()
    }
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
      if (domNode.current) {
        observer.unobserve(domNode.current)
      }
    }
  }, [popperElement, isVisible])

  return domNode
}
export default useClickOutside

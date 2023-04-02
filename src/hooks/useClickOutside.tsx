import { useEffect } from 'react'

function useClickOutside(handler: () => void, popperElement): void {
  useEffect(() => {
    const mouseDownHandler = (event: Event): void => {
      if (popperElement) {
        if (!popperElement.contains(event.target)) {
          handler()
        }
      }
    }

    document.addEventListener('mousedown', mouseDownHandler)

    return () => {
      document.removeEventListener('mousedown', mouseDownHandler)
    }
  }, [popperElement])
}
export default useClickOutside

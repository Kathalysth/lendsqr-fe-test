import React from 'react'

function debounce(fn: () => void, ms: number): () => void {
  let timer: number | null
  return () => {
    clearTimeout(timer ?? 0)
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

export default function ResizeWrapper({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 1000)

    window.addEventListener('resize', debouncedHandleResize)

    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  })
  return <>{children}</>
}

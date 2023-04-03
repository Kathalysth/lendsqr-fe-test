import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollOnRoute(props: { children: ReactNode }): JSX.Element {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return <>{props.children}</>
}

export default ScrollOnRoute

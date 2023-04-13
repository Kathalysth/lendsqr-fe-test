import React from 'react'

export const DropdownContext = React.createContext({
  setPopperElement: () => {},
  setReferenceElement: () => {},
  toggleOpen: () => {},
  isOpen: false,
  styles: {},
  attributes: {}
})

export function scrolltoId(id: string): void {
  const domNode: HTMLElement | null = document.getElementById(id)
  if (domNode !== null) {
    window.scrollTo({
      top: domNode.scrollTop,
      left: domNode.scrollLeft
    })
  }
}

export const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)

export function isReactRefObj(target: boolean): boolean {
  if (target && typeof target === 'object') {
    return 'current' in target
  }
  return false
}

export function findDOMElements(target) {
  if (isReactRefObj(target)) {
    return target.current
  }
  if (isFunction(target)) {
    return target()
  }
  if (typeof target === 'string' && canUseDOM) {
    let selection = document.querySelectorAll(target)
    if (!selection.length) {
      selection = document.querySelectorAll(`#${target}`)
    }
    if (!selection.length) {
      throw new Error(
        `The target '${target}' could not be identified in the dom, tip: check spelling`
      )
    }
    return selection
  }
  return target
}

export function isArrayOrNodeList(els): boolean {
  if (els === null) {
    return false
  }
  return Array.isArray(els) || (canUseDOM && typeof els.length === 'number')
}

export function getTarget(target) {
  const els = findDOMElements(target)

  if (isArrayOrNodeList(els)) {
    return els[0]
  }
  return els
}

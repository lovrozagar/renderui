function renderProp<T, A extends unknown[]>(
  nodeOrFunction: T | ((...functionArgs: A) => T),
  ...args: A
) {
  if (typeof nodeOrFunction === "function") {
    return (nodeOrFunction as (...functionArgs: A) => T)(...args)
  }

  return nodeOrFunction as T
}

export { renderProp }

type OptionalObject<T extends object> = T | undefined

const EMPTY_OBJECT = Object.freeze({})

function getOptionalObject<T extends object>(object: OptionalObject<T>) {
  return object ?? (EMPTY_OBJECT as NonNullable<T>)
}

export { EMPTY_OBJECT, getOptionalObject, getOptionalObject as optional, type OptionalObject }

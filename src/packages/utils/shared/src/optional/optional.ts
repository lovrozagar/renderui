type OptionalObject<T extends object> = T | undefined

const EMPTY_OBJECT = Object.freeze({})

function optional<T extends object>(object: OptionalObject<T>) {
  return object ?? (EMPTY_OBJECT as NonNullable<T>)
}

export { EMPTY_OBJECT, optional, type OptionalObject }

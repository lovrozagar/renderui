type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }

type ExclusiveUnion<T, U> = T | U extends Record<string, unknown>
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U

export type { ExclusiveUnion }

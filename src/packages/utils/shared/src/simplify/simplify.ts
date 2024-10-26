/**
 * Type that represents a simplified, flattened version of a given type `T`.
 *
 * @template T The type to be simplified.
 */

/* biome-ignore lint/complexity/noBannedTypes: allow empty object here for simplify to work */
type Simplify<T> = { [KeyType in keyof T]: T[KeyType] } & Readonly<{}>

export type { Simplify }

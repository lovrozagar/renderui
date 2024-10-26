import type { Ref } from "react"
import { handleRef } from "./handle-ref"

function mergeRefs<T extends Element>(element: T | null, refs: Array<Ref<T> | undefined | null>) {
  if (!refs) return

  refs.filter(Boolean).forEach((ref) => {
    handleRef(element, ref)
  })
}

export { mergeRefs }

import type { Ref } from "react"

function handleRef<T extends Element>(element: T | null, ref: Ref<T> | undefined | null) {
  if (!element || !ref) return

  if (typeof ref === "function") {
    ref(element)

    return
  }
  /* @TODO change when React 19 released */
  /* @ts-ignore */
  ;(ref as RefObject<T>).current = element
}

export { handleRef }

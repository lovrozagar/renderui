"use client"

import { type Ref, useCallback } from "react"
import { mergeRefs } from "./merge-refs"

function useMergedRef<T extends Element>(refs: Array<Ref<T> | undefined | null>) {
  return useCallback(
    (element: T) => {
      mergeRefs(element, refs)
    },
    [refs],
  )
}

export { useMergedRef }

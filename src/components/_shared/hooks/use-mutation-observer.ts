"use client"

import { useFreshRef } from "@/components/_shared/hooks/use-fresh-ref"
import React from "react"

type UseMutationObserverProps<T extends HTMLElement> = {
  node: T | null
  callback: MutationCallback
  options: MutationObserverInit
  enabled?: boolean
}

function useMutationObserver<T extends HTMLElement>(props: UseMutationObserverProps<T>) {
  const { node, callback, options, enabled } = props

  const freshCallback = useFreshRef(callback)
  const freshOptions = useFreshRef(options)

  /* biome-ignore lint/correctness/useExhaustiveDependencies: using fresh ref pattern, ref dep not needed */
  React.useEffect(() => {
    if (!enabled || !node) return undefined

    const observer = new MutationObserver(freshCallback.current)

    observer.observe(node, freshOptions.current)

    return () => {
      observer.disconnect()
    }
  }, [node])
}

export { useMutationObserver }

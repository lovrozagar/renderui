"use client"

import { type RefObject, useEffect, useRef } from "react"
import { useFreshRef } from "../use-fresh-ref/use-fresh-ref"

type UseMutationObserverProps<T extends HTMLElement> = {
  element: RefObject<T | null>
  callback: MutationCallback
  options: MutationObserverInit
  enabled?: boolean
}

function useMutationObserver<T extends HTMLElement>(props: UseMutationObserverProps<T>) {
  const { element, callback, options, enabled = true } = props

  const freshCallback = useFreshRef(callback)
  const freshOptions = useFreshRef(options)
  const observerRef = useRef<MutationObserver | null>(null)

  /* biome-ignore lint/correctness/useExhaustiveDependencies: using fresh ref pattern, ref dep not needed */
  useEffect(() => {
    const currentElement = element.current

    if (!currentElement || !enabled) {
      if (!observerRef.current) return

      observerRef.current.disconnect()

      return
    }

    if (observerRef.current) return

    observerRef.current = new MutationObserver(freshCallback.current)
    observerRef.current.observe(currentElement, freshOptions.current)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [element, enabled])
}

export { useMutationObserver, type UseMutationObserverProps }

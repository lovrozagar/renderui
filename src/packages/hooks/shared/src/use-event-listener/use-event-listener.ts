"use client"

import { useEffect } from "react"
import { useFreshRef } from "../use-fresh-ref/use-fresh-ref"

/* MediaQueryList Event based useEventListener interface */
function useEventListener<K extends keyof MediaQueryListEventMap>(props: {
  event: K
  handler: (event: MediaQueryListEventMap[K]) => void
  element: MediaQueryList
  enabled?: boolean
  options?: boolean | AddEventListenerOptions
}): void

/* Window Event based useEventListener interface */
function useEventListener<K extends keyof WindowEventMap>(props: {
  event: K
  handler: (event: WindowEventMap[K]) => void
  element?: undefined
  enabled?: boolean
  options?: boolean | AddEventListenerOptions
}): void

/* Element Event based useEventListener interface */
function useEventListener<
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement = HTMLDivElement,
>(props: {
  event: K
  handler: (event: HTMLElementEventMap[K]) => void
  element: T | null
  enabled?: boolean
  options?: boolean | AddEventListenerOptions
}): void

/* Document Event based useEventListener interface */
function useEventListener<K extends keyof DocumentEventMap>(props: {
  event: K
  handler: (event: DocumentEventMap[K]) => void
  element: Document
  enabled?: boolean
  options?: boolean | AddEventListenerOptions
}): void

function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  KM extends keyof MediaQueryListEventMap,
  /* biome-ignore lint/suspicious/noConfusingVoidType: allow void */
  T extends HTMLElement | MediaQueryList | void = void,
>(props: {
  event: KW | KH | KM
  element?: T
  options?: boolean | AddEventListenerOptions
  enabled?: boolean
  handler: (
    event: WindowEventMap[KW] | HTMLElementEventMap[KH] | MediaQueryListEventMap[KM] | Event,
  ) => void
}) {
  const { event, element, options, handler, enabled = true } = props

  const freshHandler = useFreshRef(handler)
  const freshOptions = useFreshRef(options)

  /* biome-ignore lint/correctness/useExhaustiveDependencies: using fresh ref pattern, ref dep not needed */
  useEffect(() => {
    /* Define the listening target */
    const targetElement: T | HTMLElement | null =
      element ?? (typeof window !== "undefined" ? window.document.documentElement : null)

    if (!targetElement?.addEventListener) return undefined

    /* Create event listener that calls handler function stored in ref */
    const listener: typeof handler = (event) => freshHandler.current(event)

    const options = freshOptions.current

    /* On disabled, remove existing listener */
    if (!enabled) {
      targetElement.removeEventListener(event, listener, options)

      return undefined
    }

    /* Add event listener */
    targetElement.addEventListener(event, listener, options)

    /* Remove event listener on cleanup */
    return () => {
      targetElement.removeEventListener(event, listener, options)
    }
  }, [event, element, enabled])
}

export { useEventListener }

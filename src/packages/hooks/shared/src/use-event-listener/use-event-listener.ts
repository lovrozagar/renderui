"use client"

import { type RefObject, useEffect } from "react"
import { useFreshRef } from "../use-fresh-ref/use-fresh-ref"

/* MediaQueryList Event based useEventListener interface */
function useEventListener<K extends keyof MediaQueryListEventMap>(props: {
  event: K
  handler: (event: MediaQueryListEventMap[K]) => void
  element: RefObject<MediaQueryList>
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
  T extends RefObject<HTMLElement | null>,
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
  element: RefObject<Document>
  enabled?: boolean
  options?: boolean | AddEventListenerOptions
}): void

function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap,
  KM extends keyof MediaQueryListEventMap,
  T extends HTMLElement | SVGAElement | MediaQueryList = HTMLElement,
>(props: {
  event: KW | KH | KM
  element?: RefObject<T>
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
    const targetElement =
      element?.current ?? (typeof window !== "undefined" ? window.document.documentElement : null)

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

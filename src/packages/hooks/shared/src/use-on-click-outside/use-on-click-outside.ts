"use client"

import type { RefObject } from "react"
import { useEventListener } from "../use-event-listener/use-event-listener"

const DEFAULT_EXCEPTION_SELECTORS: string[] = []

type UseOnClickOutsideProps<T extends HTMLElement = HTMLElement> = {
  element: RefObject<T | null>
  exceptionSelectors?: string[]
} & (
  | {
      event: "mousedown" | "mouseup"
      handler: ((event: MouseEvent) => void) | undefined
    }
  | {
      event: "pointerdown" | "pointerup"
      handler: ((event: PointerEvent) => void) | undefined
    }
)

function useOnClickOutside<T extends HTMLElement = HTMLElement>(props: UseOnClickOutsideProps<T>) {
  const { event, element, handler, exceptionSelectors = DEFAULT_EXCEPTION_SELECTORS } = props

  useEventListener({
    event,
    element,
    handler: (event) => {
      if (!(event.target instanceof Node)) {
        return
      }

      const currentElement = element.current

      if (!handler || currentElement?.contains(event.target)) {
        return
      }

      for (const selector of exceptionSelectors) {
        if ((event.target as Element).matches(selector)) {
          return
        }
      }

      handler(event as PointerEvent)
    },
  })
}

export { useOnClickOutside, type UseOnClickOutsideProps }

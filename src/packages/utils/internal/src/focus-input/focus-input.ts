"use client"

import type { RefObject } from "react"

function focusInput(inputRef: RefObject<HTMLInputElement | null>) {
  if (!inputRef?.current) return

  const { current: input } = inputRef

  input.focus()

  const valueLength = input.value.length

  input.setSelectionRange(valueLength, valueLength)
}

export { focusInput }

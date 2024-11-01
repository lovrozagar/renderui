"use client"

import { useFreshRef } from "@renderui/hooks"
import { useEffect, useRef, useState } from "react"

type UseUncontrolledStateProps<T> = {
  defaultProp?: T | undefined
  onChange: (state: T) => void
}

function useUncontrolledState<T>({ defaultProp, onChange }: UseUncontrolledStateProps<T>) {
  const [value, setValue] = useState<T | undefined>(defaultProp)

  const previousValueRef = useRef(value)

  const handleChange = useFreshRef(onChange)

  useEffect(() => {
    if (previousValueRef.current !== value) {
      handleChange.current?.(value as T)
      previousValueRef.current = value
    }
  }, [value, handleChange])

  return [value, setValue]
}

export { useUncontrolledState }

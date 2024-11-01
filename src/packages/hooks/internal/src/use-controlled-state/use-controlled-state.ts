"use client"

import { useFreshRef } from "@renderui/hooks"
import { noop } from "@renderui/utils"
import { type Dispatch, type SetStateAction, useCallback } from "react"
import { useUncontrolledState } from "../use-uncontrolled-state/use-uncontrolled-state"

type SetStateFunction<T> = (previousState?: T) => T

type UseControlledStateProps<T> = {
  prop?: T | undefined
  defaultProp?: T | undefined
  onChange: (state: T) => void
}

function useControlledState<T>({ prop, defaultProp, onChange = noop }: UseControlledStateProps<T>) {
  const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({ defaultProp, onChange })

  const isControlled = prop !== undefined
  const value = isControlled ? prop : uncontrolledProp

  const handleChange = useFreshRef(onChange)

  const setValue: Dispatch<SetStateAction<T | undefined>> = useCallback(
    (nextValue) => {
      if (isControlled) {
        const setter = nextValue as SetStateFunction<T>
        const value = typeof nextValue === "function" ? setter(prop) : nextValue

        if (value !== prop) handleChange.current(value as T)

        return
      }

      if (typeof setUncontrolledProp === "function") {
        ;(setUncontrolledProp as Dispatch<SetStateAction<T | undefined>>)(nextValue)
      }
    },
    [isControlled, prop, setUncontrolledProp, handleChange],
  )

  return [value, setValue] as [T, Dispatch<SetStateAction<T>>]
}

export { useControlledState }

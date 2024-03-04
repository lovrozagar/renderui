import { TWO, ZERO } from '@renderui/constants'
import { useMutationObserver } from '@renderui/hooks'
import React from 'react'

import { KEYBOARD_RIPPLE_MUTATION_OBSERVER_OPTIONS } from '@/components/ripple/constants/constants'
import { RippleRipple } from '@/components/ripple/types/ripple-ripple'

function useKeyboardRipple<T extends HTMLElement>(
  ref: React.RefObject<T>,
  setRipples: React.Dispatch<React.SetStateAction<RippleRipple[]>>,
) {
  const addRippleOnKeyboardPress = React.useCallback(
    (clientHeight: number, clientWidth: number) => {
      const size = Math.max(clientWidth, clientHeight)

      const rippleKey = crypto.randomUUID()

      setRipples((previousRipples) => [
        ...previousRipples,
        {
          key: rippleKey,
          size,
          x: ZERO,
          y: -clientWidth / TWO + clientHeight / TWO,
        },
      ])

      return rippleKey
    },
    [setRipples],
  )

  const mutationHandler = React.useCallback(
    (mutations: MutationRecord[]) => {
      const { current: element } = ref

      if (!element) return

      const { parentElement } = element

      if (!parentElement) return

      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-keyboard-pressed') {
          const { dataset } = parentElement
          const { pressed: newPressedState } = dataset

          if (newPressedState === 'false' || !newPressedState) {
            const { clientHeight, clientWidth } = element

            addRippleOnKeyboardPress(clientHeight, clientWidth)
          }
        }
      })
    },
    [ref, addRippleOnKeyboardPress],
  )

  const parentRef = ref.current?.parentElement ?? null

  useMutationObserver(parentRef, mutationHandler, KEYBOARD_RIPPLE_MUTATION_OBSERVER_OPTIONS)
}

export { useKeyboardRipple }

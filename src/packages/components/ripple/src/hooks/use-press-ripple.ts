import {
  type Dispatch,
  type MouseEvent,
  type MouseEventHandler,
  type SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react"
import type { RippleRipple } from "../types/ripple-ripple"
import { createRipple } from "../utils/create-ripple"

function usePressRipple(
  setRipples: Dispatch<SetStateAction<RippleRipple[]>>,
  isDisabled: boolean | undefined = undefined,
) {
  const [isRaised, setIsRaised] = useState(false)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined = undefined

    if (isDisabled) {
      timeoutId = setTimeout(() => setIsRaised(true), 0)
    } else {
      setIsRaised(false)
    }

    return () => clearTimeout(timeoutId)
  }, [isDisabled])

  return useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      if (isRaised) return ""

      const newRipple = createRipple({ type: "pointer", event: event })

      setRipples((previousRipples) => [...previousRipples, newRipple])

      return newRipple.key
    },
    [isRaised, setRipples],
  ) as unknown as MouseEventHandler<HTMLElement>
}

export { usePressRipple }

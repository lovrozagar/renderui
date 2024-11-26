import { useComposedRefs } from "@radix-ui/react-compose-refs"
import { type ComponentPropsWithRef, useRef, useState } from "react"

type RippleRipple = {
  key: string
  size: number
  x: number
  y: number
}

type UseRippleProps = {
  ref: ComponentPropsWithRef<"span">["ref"]
  animationDuration: number
  isDisabled: boolean
  isTriggeredOnEnter: boolean
  isTriggeredOnSpace: boolean
}

function useRipple(props: UseRippleProps) {
  const { ref, animationDuration, isDisabled, isTriggeredOnEnter, isTriggeredOnSpace } = props

  const [ripples, setRipples] = useState<RippleRipple[]>([])

  const internalRef = useRef<HTMLSpanElement | null>(null)

  const mergedCallbackRef = useComposedRefs(internalRef, ref)

  const cleanupTime = (animationDuration ?? 0) + 100

  const calculateRippleData = (target: HTMLSpanElement) => {
    const rect = target.getBoundingClientRect()
    const size = Math.max(target.clientWidth, target.clientHeight)

    return { rect, size }
  }

  const createRipple = (size: number, x: number, y: number) => {
    const ripple = { key: crypto.randomUUID(), size, x, y }

    setRipples((prev) => [...prev, ripple])
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.key !== ripple.key)), cleanupTime)
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (
      /* return early if keyboard pointer type...
      ...keyboard action is handled by handleKeyUp handler, prevents creating ripples on key hold */
      (event.nativeEvent instanceof PointerEvent && event.nativeEvent.pointerType === "") ||
      isDisabled
    ) {
      return
    }

    const { rect, size } = calculateRippleData(event.currentTarget)

    /* crate ripple on click position */
    createRipple(size, event.clientX - rect.x - size / 2, event.clientY - rect.y - size / 2)
  }

  const handleKeyUp = (event: React.KeyboardEvent<HTMLElement>) => {
    if (isDisabled) return

    if (
      (event.key === "Enter" && isTriggeredOnEnter) ||
      (event.key === " " && isTriggeredOnSpace)
    ) {
      const { rect, size } = calculateRippleData(event.currentTarget)

      /* crate ripple on element center */
      createRipple(size, rect.width / 2 - size / 2, rect.height / 2 - size / 2)
    }
  }

  return {
    ripples,
    mergedCallbackRef,
    handleClick,
    handleKeyUp,
  }
}

export { useRipple }

"use client"

import { cn } from "@renderui/utils"
import type { AnimationDefinition } from "framer-motion"
import { type Key, type RefObject, useRef, useState } from "react"
import {
  DEFAULT_RIPPLE_CLASSNAME,
  RIPPLE_ANIMATION_END_DEFAULT_SCALE,
  RIPPLE_ANIMATION_END_OPACITY,
  RIPPLE_ANIMATION_START_SCALE,
  RIPPLE_DEFAULT_OPACITY,
  RIPPLE_RIPPLE_BASE_STYLE,
} from "../constants/constants"
import type { RippleProps } from "../types/ripple"
import type { RippleRipple } from "../types/ripple-ripple"
import { getRippleDuration } from "../utils/get-ripple-duration"
import { useKeyboardRipple } from "./use-keyboard-ripple"
import { usePressRipple } from "./use-press-ripple"

type UseRippleReturnType = {
  ripples: RippleRipple[]
  internalSubLayerRef: RefObject<HTMLSpanElement>
  addRippleOnPress: ReturnType<typeof usePressRipple>
  /* biome-ignore lint/suspicious/noExplicitAny: avoid external module reference error */
  getRippleRipplesProps: (ripple: RippleRipple) => any
}

function useRipple(props: Omit<RippleProps, "subLayerProps">): UseRippleReturnType {
  const {
    ref,
    opacity: opacityProp,
    duration: durationProp,
    scale: scaleProp,
    transition: transitionProp,
    initial: initialProp,
    animate: animateProp,
    exit: exitProp,
    style: styleProp,
    className,
    isDisabled,
    onAnimationComplete: onAnimationCompleteProp,
    ...restProps
  } = props

  const internalSubLayerRef = useRef<HTMLSpanElement | null>(null)
  const [ripples, setRipples] = useState<RippleRipple[]>([])

  const addRippleOnPress = usePressRipple(setRipples, isDisabled)

  useKeyboardRipple(internalSubLayerRef, setRipples)

  const clearRipple = (key: Key) => {
    setRipples((previousState) => previousState.filter((ripple) => ripple.key !== key))
  }

  const onAnimationComplete = (ripple: RippleRipple, definition: AnimationDefinition) => {
    clearRipple(ripple.key)

    if (onAnimationCompleteProp) {
      onAnimationCompleteProp(definition)
    }
  }

  const getRippleRipplesProps = (ripple: RippleRipple) => {
    const duration = durationProp ?? getRippleDuration(ripple.size)

    const scale = scaleProp ?? RIPPLE_ANIMATION_END_DEFAULT_SCALE

    const initial = initialProp ?? {
      transform: `scale(${RIPPLE_ANIMATION_START_SCALE})`,
      opacity: opacityProp ?? RIPPLE_DEFAULT_OPACITY,
    }

    const animate = animateProp ?? {
      transform: `scale(${scale})`,
      opacity: RIPPLE_ANIMATION_END_OPACITY,
    }

    const exit = exitProp ?? { opacity: RIPPLE_ANIMATION_END_OPACITY }

    const transition = { duration, ...transitionProp }

    const style = {
      ...RIPPLE_RIPPLE_BASE_STYLE,
      top: ripple.y,
      left: ripple.x,
      width: `${ripple.size}px`,
      height: `${ripple.size}px`,
      ...styleProp,
    }

    return {
      ref,
      initial,
      animate,
      exit,
      transition,
      style,
      "data-slot": "ripple",
      className: cn(DEFAULT_RIPPLE_CLASSNAME, className),
      onAnimationComplete: (definition: AnimationDefinition) =>
        onAnimationComplete(ripple, definition),
      ...restProps,
    }
  }

  return {
    ripples,
    internalSubLayerRef,
    addRippleOnPress,
    getRippleRipplesProps,
  }
}

export { useRipple }

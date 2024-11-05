"use client"

import { CollapsibleContent as CollapsibleContentPrimitive } from "@radix-ui/react-collapsible"
import { cn } from "@renderui/utils"
import { useEffect, useState } from "react"

import { getAnimationStyleVariables } from "@renderui/utils-internal"
import {
  COLLAPSIBLE_ANIMATED_CONTENT_CLASSNAME,
  COLLAPSIBLE_CONTENT_DEFAULT_ANIMATION_DURATION,
  DEFAULT_COLLAPSIBLE_CONTENT_CLASSNAME,
} from "../constants/constants"
import type { CollapsibleContentProps } from "../types/collapsible-content"

const CollapsibleContent = (props: CollapsibleContentProps) => {
  const {
    style,
    className,
    hasSkippedInitialAnimation,
    animationDuration,
    animationInDuration,
    animationOutDuration,
    animationTimingFunction,
    animationInTimingFunction,
    animationOutTimingFunction,
    hasDefaultAnimation = true,
    ...restProps
  } = props

  const [defaultDuration, setDefaultDuration] = useState(
    hasSkippedInitialAnimation ? 0 : COLLAPSIBLE_CONTENT_DEFAULT_ANIMATION_DURATION,
  )

  /* biome-ignore lint/correctness/useExhaustiveDependencies: purposeful dependency */
  useEffect(() => {
    setDefaultDuration(COLLAPSIBLE_CONTENT_DEFAULT_ANIMATION_DURATION)
  }, [hasSkippedInitialAnimation])

  return (
    <CollapsibleContentPrimitive
      data-slot="collapsible-content"
      className={cn(
        DEFAULT_COLLAPSIBLE_CONTENT_CLASSNAME,
        hasDefaultAnimation ? COLLAPSIBLE_ANIMATED_CONTENT_CLASSNAME : undefined,
        className,
      )}
      style={{
        ...getAnimationStyleVariables({
          animationDuration,
          animationInDuration,
          animationOutDuration,
          animationTimingFunction,
          animationInTimingFunction,
          animationOutTimingFunction,
          defaultAnimationDuration: defaultDuration,
          defaultAnimationTimingFunction: "ease-out",
        }),
        ...style,
      }}
      {...restProps}
    />
  )
}

export { CollapsibleContent }

"use client"

import { DialogOverlay } from "@radix-ui/react-dialog"
import { cn } from "@renderui/utils"
import { getAnimationStyleVariables } from "@renderui/utils-internal"
import { DEFAULT_OVERLAY_CLASSNAME } from "../constants/constants"
import type { OverlayProps } from "../types/overlay"

const Overlay = (props: OverlayProps) => {
  const {
    className,
    style,
    animationDuration,
    animationInDuration,
    animationOutDuration,
    animationTimingFunction,
    animationInTimingFunction,
    animationOutTimingFunction,
    ...restProps
  } = props

  return (
    <DialogOverlay
      data-slot="overlay"
      className={cn(DEFAULT_OVERLAY_CLASSNAME, className)}
      style={{
        ...getAnimationStyleVariables({
          animationDuration,
          animationInDuration,
          animationOutDuration,
          animationTimingFunction,
          animationInTimingFunction,
          animationOutTimingFunction,
          defaultAnimationDuration: 200,
          defaultAnimationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }),
        ...style,
      }}
      {...restProps}
    />
  )
}

export { Overlay }

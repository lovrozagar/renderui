"use client"

import { DialogOverlay as DialogOverlayPrimitive } from "@radix-ui/react-dialog"
import { cn } from "@renderui/utils"
import { getAnimationStyleVariables } from "@renderui/utils-internal"
import { DIALOG_OVERLAY_CLASSNAME } from "../constants/constants"
import type { DialogOverlayProps } from "../types/dialog-overlay"

const DialogOverlay = (props: DialogOverlayProps) => {
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
    <DialogOverlayPrimitive
      data-slot="dialog-overlay"
      className={cn(DIALOG_OVERLAY_CLASSNAME, className)}
      style={{
        ...getAnimationStyleVariables({
          animationDuration,
          animationInDuration,
          animationOutDuration,
          animationTimingFunction,
          animationInTimingFunction,
          animationOutTimingFunction,
          defaultAnimationDuration: 250,
          defaultAnimationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }),
        ...style,
      }}
      {...restProps}
    />
  )
}

export { DialogOverlay }

"use client"

import { DialogOverlay as DialogOverlayPrimitive } from "@radix-ui/react-dialog"
import { cn } from "@renderui/utils"
import { getAnimationStyleVariables } from "@renderui/utils-internal"
import { DEFAULT_SHEET_OVERLAY_CLASSNAME } from "../constants/constants"
import type { SheetOverlayProps } from "../types/sheet-overlay"

const SheetOverlay = (props: SheetOverlayProps) => {
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
      data-slot="sheet-overlay"
      className={cn(DEFAULT_SHEET_OVERLAY_CLASSNAME, className)}
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

export { SheetOverlay }

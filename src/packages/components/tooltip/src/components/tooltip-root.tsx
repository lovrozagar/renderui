"use client"

import { TooltipProvider, Tooltip as TooltipRootPrimitive } from "@radix-ui/react-tooltip"
import type { TooltipProps } from "../types/tooltip-root"

const TooltipRoot = (props: TooltipProps) => {
  const {
    isHoverableContentDisabled = false,
    skipDelayDuration = 0,
    delayDuration = 50,
    ...restProps
  } = props

  return (
    <TooltipProvider
      delayDuration={delayDuration}
      skipDelayDuration={skipDelayDuration}
      disableHoverableContent={isHoverableContentDisabled}
    >
      <TooltipRootPrimitive {...restProps} />
    </TooltipProvider>
  )
}

export { TooltipRoot }

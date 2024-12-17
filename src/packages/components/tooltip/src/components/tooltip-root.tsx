"use client"

import { TooltipProvider, Tooltip as TooltipRootPrimitive } from "@radix-ui/react-tooltip"
import type { TooltipRootProps } from "../types/tooltip-root"

const TooltipRoot = (props: TooltipRootProps) => {
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

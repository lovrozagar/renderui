"use client"

import { TooltipTrigger } from "@radix-ui/react-tooltip"
import { cn } from "@renderui/utils"
import { DEFAULT_TOOLTIP_TRIGGER_PRIMITIVE_CLASSNAME } from "../constants/constants"
import type { TooltipTriggerPrimitiveProps } from "../types/tooltip-trigger-primitive"

const TooltipTriggerPrimitive = (props: TooltipTriggerPrimitiveProps) => {
  const { className, ...restProps } = props

  return (
    <TooltipTrigger
      data-slot="tooltip-trigger-primitive"
      className={cn(DEFAULT_TOOLTIP_TRIGGER_PRIMITIVE_CLASSNAME, className)}
      {...restProps}
    />
  )
}

export { TooltipTriggerPrimitive }

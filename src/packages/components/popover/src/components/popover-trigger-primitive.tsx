"use client"

import { PopoverTrigger } from "@radix-ui/react-popover"
import { cn } from "@renderui/utils"
import type { PopoverTriggerPrimitiveProps } from "../types/popover-trigger-primitive"

const PopoverTriggerPrimitive = (props: PopoverTriggerPrimitiveProps) => {
  const { className, ...restProps } = props

  return (
    <PopoverTrigger
      data-slot="popover-trigger-primitive"
      className={cn(className)}
      {...restProps}
    />
  )
}

export { PopoverTriggerPrimitive }

"use client"

import { CollapsibleTrigger } from "@radix-ui/react-collapsible"
import { cn } from "@renderui/utils"
import type { CollapsibleTriggerPrimitiveProps } from "../types/collapsible-trigger-primitive"

const CollapsibleTriggerPrimitive = (props: CollapsibleTriggerPrimitiveProps) => {
  const { className, ...restProps } = props

  return (
    <CollapsibleTrigger
      data-slot="collapsible-trigger-primitive"
      className={cn(className)}
      {...restProps}
    />
  )
}

export { CollapsibleTriggerPrimitive }

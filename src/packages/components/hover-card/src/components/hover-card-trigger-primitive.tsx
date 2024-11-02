"use client"

import { HoverCardTrigger } from "@radix-ui/react-hover-card"
import { cn } from "@renderui/utils"
import { DEFAULT_HOVER_CARD_TRIGGER_PRIMITIVE_CLASSNAME } from "../constants/constants"
import type { HoverCardTriggerPrimitiveProps } from "../types/hover-card-trigger-primitive"

const HoverCardTriggerPrimitive = (props: HoverCardTriggerPrimitiveProps) => {
  const { className, ...restProps } = props

  return (
    <HoverCardTrigger
      data-slot="hover-card-trigger-primitive"
      className={cn(DEFAULT_HOVER_CARD_TRIGGER_PRIMITIVE_CLASSNAME, className)}
      {...restProps}
    />
  )
}

export { HoverCardTriggerPrimitive }

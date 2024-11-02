"use client"

import { HoverCardTrigger as HoverCardTriggerPrimitive } from "@radix-ui/react-hover-card"
import { Button } from "@renderui/button"
import { DEFAULT_HOVER_CARD_TRIGGER_CLASSNAME } from "../constants/constants"
import type { HoverCardTriggerProps } from "../types/hover-card-trigger"

const HoverCardTrigger = (props: HoverCardTriggerProps) => {
  const { className, variant = "plain", ...restProps } = props

  return (
    <HoverCardTriggerPrimitive asChild>
      <Button
        data-slot="hover-card-trigger"
        variant={variant}
        className={[DEFAULT_HOVER_CARD_TRIGGER_CLASSNAME, className]}
        {...restProps}
      />
    </HoverCardTriggerPrimitive>
  )
}

export { HoverCardTrigger }

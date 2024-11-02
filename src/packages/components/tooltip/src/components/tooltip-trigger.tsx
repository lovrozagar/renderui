"use client"

import { TooltipTrigger as TooltipTriggerPrimitive } from "@radix-ui/react-tooltip"
import { Button } from "@renderui/button"
import { chain } from "@renderui/utils"
import { useState } from "react"
import { DEFAULT_TOOLTIP_TRIGGER_CLASSNAME } from "../constants/constants"
import type { TooltipTriggerProps } from "../types/tooltip-trigger"

const TooltipTrigger = (props: TooltipTriggerProps) => {
  const {
    onMouseEnter,
    onMouseLeave,
    className,
    hasDefaultPressedStyles = false,
    variant = "plain",
    ...restProps
  } = props

  /* aria hover event not always firing in combination with radix asChild, track manually with native event */
  const [isHovered, setIsHovered] = useState(false)

  return (
    <TooltipTriggerPrimitive asChild>
      <Button
        data-slot="tooltip-trigger"
        variant={variant}
        data-hover={isHovered}
        hasDefaultPressedStyles={hasDefaultPressedStyles}
        className={[DEFAULT_TOOLTIP_TRIGGER_CLASSNAME, className]}
        onMouseEnter={chain(onMouseEnter, () => setIsHovered(true))}
        onMouseLeave={chain(onMouseLeave, () => setIsHovered(false))}
        {...restProps}
      />
    </TooltipTriggerPrimitive>
  )
}

export { TooltipTrigger }

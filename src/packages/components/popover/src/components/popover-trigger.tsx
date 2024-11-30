"use client"

import { PopoverTrigger as PopoverTriggerPrimitive } from "@radix-ui/react-popover"
import { Button } from "@renderui/button"
import { DEFAULT_POPOVER_TRIGGER_CLASSNAME } from "../constants/constants"
import type { PopoverTriggerProps } from "../types/popover-trigger"

const PopoverTrigger = (props: PopoverTriggerProps) => {
  const { className, variant = "plain", ...restProps } = props

  return (
    <PopoverTriggerPrimitive asChild>
      <Button
        data-slot="popover-trigger"
        variant={variant}
        className={[DEFAULT_POPOVER_TRIGGER_CLASSNAME, className]}
        {...restProps}
      />
    </PopoverTriggerPrimitive>
  )
}

export { PopoverTrigger }

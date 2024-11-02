"use client"

import { PopoverTrigger as PopoverTriggerPrimitive } from "@radix-ui/react-popover"
import { Button } from "@renderui/button"
import { useMergedRef } from "@renderui/hooks"
import { DEFAULT_POPOVER_TRIGGER_CLASSNAME } from "../constants/constants"
import { usePopoverContext } from "../contexts/popover-context"
import type { PopoverTriggerProps } from "../types/popover-trigger"

const PopoverTrigger = (props: PopoverTriggerProps) => {
  const { ref, className, variant = "plain", ...restProps } = props

  const { triggerRef } = usePopoverContext()

  const mergedRefCallback = useMergedRef<HTMLButtonElement>([ref, triggerRef])

  return (
    <PopoverTriggerPrimitive asChild>
      <Button
        data-slot="popover-trigger"
        ref={mergedRefCallback}
        variant={variant}
        className={[DEFAULT_POPOVER_TRIGGER_CLASSNAME, className]}
        {...restProps}
      />
    </PopoverTriggerPrimitive>
  )
}

export { PopoverTrigger }

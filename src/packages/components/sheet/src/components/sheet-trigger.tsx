"use client"

import { DialogTrigger as SheetTriggerPrimitive } from "@radix-ui/react-dialog"
import { Button } from "@renderui/button"
import { cn } from "@renderui/utils"
import { DEFAULT_SHEET_TRIGGER_CLASSNAME } from "../constants/constants"
import type { SheetTriggerProps } from "../types/sheet-trigger"

const SheetTrigger = (props: SheetTriggerProps) => {
  const { className, children, variant = "plain", ...restProps } = props

  return (
    <SheetTriggerPrimitive asChild>
      <Button
        data-slot="sheet-trigger"
        variant={variant}
        className={cn(DEFAULT_SHEET_TRIGGER_CLASSNAME, className)}
        {...restProps}
      >
        {children}
      </Button>
    </SheetTriggerPrimitive>
  )
}

export { SheetTrigger }

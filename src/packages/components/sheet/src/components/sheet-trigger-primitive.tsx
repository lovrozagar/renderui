"use client"

import { DialogTrigger as SheetTrigger } from "@radix-ui/react-dialog"
import { cn } from "@renderui/utils"
import type { SheetTriggerPrimitiveProps } from "../types/sheet-trigger-primitive"

const SheetTriggerPrimitive = (props: SheetTriggerPrimitiveProps) => {
  const { className, ...restProps } = props

  return (
    <SheetTrigger data-slot="sheet-trigger-primitive" className={cn(className)} {...restProps} />
  )
}

export { SheetTriggerPrimitive }

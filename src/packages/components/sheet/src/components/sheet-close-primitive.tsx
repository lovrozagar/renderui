"use client"

import { DialogClose as SheetClose } from "@radix-ui/react-dialog"
import { cn } from "@renderui/utils"
import type { SheetClosePrimitiveProps } from "../types/sheet-close-primitive"

const SheetClosePrimitive = (props: SheetClosePrimitiveProps) => {
  const { className, ...restProps } = props

  return <SheetClose data-slot="sheet-close-primitive" className={cn(className)} {...restProps} />
}

export { SheetClosePrimitive }

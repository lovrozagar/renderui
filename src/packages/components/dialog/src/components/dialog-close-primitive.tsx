"use client"

import { DialogClose } from "@radix-ui/react-dialog"
import { cn } from "@renderui/utils"
import type { DialogClosePrimitiveProps } from "../types/dialog-close-primitive"

const DialogClosePrimitive = (props: DialogClosePrimitiveProps) => {
  const { className, ...restProps } = props

  return <DialogClose data-slot="dialog-close-primitive" className={cn(className)} {...restProps} />
}

export { DialogClosePrimitive }

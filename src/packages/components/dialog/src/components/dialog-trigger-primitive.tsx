"use client"

import { DialogTrigger } from "@radix-ui/react-dialog"
import { cn } from "@renderui/utils"
import type { DialogTriggerPrimitiveProps } from "../types/dialog-trigger-primitive"

const DialogTriggerPrimitive = (props: DialogTriggerPrimitiveProps) => {
  const { className, ...restProps } = props

  return (
    <DialogTrigger data-slot="dialog-trigger-primitive" className={cn(className)} {...restProps} />
  )
}

export { DialogTriggerPrimitive }

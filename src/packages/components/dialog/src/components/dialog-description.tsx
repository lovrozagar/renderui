"use client"

import { DialogDescription as DialogDescriptionPrimitive } from "@radix-ui/react-dialog"
import { cn } from "@renderui/utils"
import type { DialogDescriptionProps } from "../types/dialog-description"

const DialogDescription = (props: DialogDescriptionProps) => {
  const { className, isVisuallyHidden, ...restProps } = props

  return (
    <DialogDescriptionPrimitive
      data-slot="dialog-description"
      className={cn(
        "_dialog-description text-mode-500 text-sm",
        isVisuallyHidden ? "sr-only" : undefined,
        className,
      )}
      {...restProps}
    />
  )
}

export { DialogDescription }

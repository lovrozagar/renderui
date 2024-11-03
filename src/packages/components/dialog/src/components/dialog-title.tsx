"use client"

import { DialogTitle as DialogTitlePrimitive } from "@radix-ui/react-dialog"
import { cn } from "@renderui/utils"
import type { DialogTitleProps } from "../types/dialog-title"

const DialogTitle = (props: DialogTitleProps) => {
  const { className, isVisuallyHidden, ...restProps } = props

  return (
    <DialogTitlePrimitive
      data-slot="dialog-title"
      className={cn(
        "_dialog-title font-semibold text-mode-contrast",
        isVisuallyHidden ? "sr-only" : undefined,
        className,
      )}
      {...restProps}
    />
  )
}

export { DialogTitle }

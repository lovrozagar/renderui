"use client"

import { cn } from "@renderui/utils"
import type { DialogHeaderProps } from "../types/dialog-header"

const DialogHeader = (props: DialogHeaderProps) => {
  const { className, isVisuallyHidden, ...restProps } = props

  return (
    <header
      data-slot="dialog-header"
      className={cn(
        "_dialog-header grid gap-0.5 pb-4",
        isVisuallyHidden ? "sr-only" : undefined,
        className,
      )}
      {...restProps}
    />
  )
}

export { DialogHeader }

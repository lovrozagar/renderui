"use client"

import { DialogDescription as SheetDescriptionPrimitive } from "@radix-ui/react-dialog"
import { cn } from "@renderui/utils"
import type { SheetDescriptionProps } from "../types/sheet-description"

const SheetDescription = (props: SheetDescriptionProps) => {
  const { className, isVisuallyHidden, ...restProps } = props

  return (
    <SheetDescriptionPrimitive
      data-slot="sheet-description"
      className={cn(
        "_sheet-description text-mode-500 text-sm",
        isVisuallyHidden ? "sr-only" : undefined,
        className,
      )}
      {...restProps}
    />
  )
}

export { SheetDescription }

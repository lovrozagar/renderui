"use client"

import { DialogTitle as SheetTitlePrimitive } from "@radix-ui/react-dialog"
import { cn } from "@renderui/utils"
import type { SheetTitleProps } from "../types/sheet-title"

const SheetTitle = (props: SheetTitleProps) => {
  const { className, isVisuallyHidden, ...restProps } = props

  return (
    <SheetTitlePrimitive
      data-slot="sheet-title"
      className={cn(
        "_sheet-title font-semibold text-mode-contrast",
        isVisuallyHidden ? "sr-only" : undefined,
        className,
      )}
      {...restProps}
    />
  )
}

export { SheetTitle }

"use client"

import { cn } from "@renderui/utils"
import type { SheetHeaderProps } from "../types/sheet-header"

const SheetHeader = (props: SheetHeaderProps) => {
  const { className, isVisuallyHidden, ...restProps } = props

  return (
    <header
      data-slot="sheet-header"
      className={cn(
        "_sheet-header grid gap-0.5 pb-4",
        isVisuallyHidden ? "sr-only" : undefined,
        className,
      )}
      {...restProps}
    />
  )
}

export { SheetHeader }

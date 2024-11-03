"use client"

import { cn } from "@renderui/utils"
import type { SheetFooterProps } from "../types/sheet-footer"

const SheetFooter = (props: SheetFooterProps) => {
  const { className, ...restProps } = props

  return (
    <footer
      data-slot="sheet-footer"
      className={cn(
        "_sheet-footer flex flex-col-reverse gap-2 pt-4 sm:flex-row sm:items-center sm:justify-end",
        className,
      )}
      {...restProps}
    />
  )
}

export { SheetFooter }

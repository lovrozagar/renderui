"use client"

import { cn } from "@renderui/utils"
import type { DialogFooterProps } from "../types/dialog-footer"

const DialogFooter = (props: DialogFooterProps) => {
  const { className, ...restProps } = props

  return (
    <footer
      data-slot="dialog-footer"
      className={cn(
        "_dialog-footer flex flex-col-reverse gap-2 pt-4 sm:flex-row sm:items-center sm:justify-end",
        className,
      )}
      {...restProps}
    />
  )
}

export { DialogFooter }

"use client"

import { Dialog as SheetPrimitive } from "@radix-ui/react-dialog"
import { useControlledState } from "@renderui/hooks-internal"
import { noop } from "@renderui/utils"
import { useRef } from "react"
import { SheetProvider } from "../contexts/sheet-context"
import type { SheetRootProps } from "../types/sheet-root"

const SheetRoot = (props: SheetRootProps) => {
  const { defaultOpen, open: openProp, children, onOpenChange = noop, ...restProps } = props

  const [open, setOpen] = useControlledState({
    defaultProp: defaultOpen,
    prop: openProp,
    onChange: onOpenChange,
  })

  const triggerRef = useRef<HTMLButtonElement>(null)

  return (
    <SheetPrimitive open={open} onOpenChange={setOpen} {...restProps}>
      <SheetProvider value={{ triggerRef, open, setOpen }}>
        {typeof children === "function" ? children({ open, setOpen }) : children}
      </SheetProvider>
    </SheetPrimitive>
  )
}

export { SheetRoot }

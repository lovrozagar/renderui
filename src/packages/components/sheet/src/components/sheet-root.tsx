"use client"

import { Dialog as SheetPrimitive } from "@radix-ui/react-dialog"
import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { noop } from "@renderui/utils"
import { type Dispatch, type SetStateAction, useRef } from "react"
import { SheetProvider } from "../contexts/sheet-context"
import type { SheetRootProps } from "../types/sheet-root"

const SheetRoot = (props: SheetRootProps) => {
  const { defaultOpen, open: openProp, children, onOpenChange = noop, ...restProps } = props

  const [open = false, setOpen] = useControllableState({
    defaultProp: defaultOpen,
    prop: openProp,
    onChange: onOpenChange,
  })

  const triggerRef = useRef<HTMLButtonElement>(null)

  return (
    <SheetPrimitive open={open} onOpenChange={setOpen} {...restProps}>
      <SheetProvider triggerRef={triggerRef} open={open} setOpen={setOpen}>
        {typeof children === "function"
          ? children({ open, setOpen: setOpen as Dispatch<SetStateAction<boolean>> })
          : children}
      </SheetProvider>
    </SheetPrimitive>
  )
}

export { SheetRoot }

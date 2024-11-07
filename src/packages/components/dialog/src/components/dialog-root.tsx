"use client"

import { Dialog as DialogPrimitive } from "@radix-ui/react-dialog"

import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { noop } from "@renderui/utils"
import { type Dispatch, type SetStateAction, useRef } from "react"
import { DialogProvider } from "../contexts/dialog-context"
import type { DialogRootProps } from "../types/dialog-root"

const DialogRoot = (props: DialogRootProps) => {
  const { children, defaultOpen, open: openProp, onOpenChange = noop, ...restProps } = props

  const [open = false, setOpen] = useControllableState({
    defaultProp: defaultOpen,
    prop: openProp,
    onChange: onOpenChange,
  })

  const triggerRef = useRef<HTMLButtonElement>(null)

  return (
    <DialogPrimitive open={open} onOpenChange={setOpen} {...restProps}>
      <DialogProvider triggerRef={triggerRef} open={open} setOpen={setOpen}>
        {typeof children === "function"
          ? children({ open, setOpen: setOpen as Dispatch<SetStateAction<boolean>> })
          : children}
      </DialogProvider>
    </DialogPrimitive>
  )
}

export { DialogRoot }

"use client"

import { Dialog as DialogPrimitive } from "@radix-ui/react-dialog"
import { useControlledState } from "@renderui/hooks-internal"

import { noop } from "@renderui/utils"
import { useRef } from "react"
import { DialogProvider } from "../contexts/dialog-context"
import type { DialogRootProps } from "../types/dialog-root"

const DialogRoot = (props: DialogRootProps) => {
  const { children, defaultOpen, open: openProp, onOpenChange = noop, ...restProps } = props

  const [open, setOpen] = useControlledState({
    defaultProp: defaultOpen,
    prop: openProp,
    onChange: onOpenChange,
  })

  const triggerRef = useRef<HTMLButtonElement>(null)

  return (
    <DialogPrimitive open={open} onOpenChange={setOpen} {...restProps}>
      <DialogProvider value={{ triggerRef, open, setOpen }}>
        {typeof children === "function" ? children({ open, setOpen }) : children}
      </DialogProvider>
    </DialogPrimitive>
  )
}

export { DialogRoot }

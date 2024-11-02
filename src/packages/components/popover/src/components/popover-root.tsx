"use client"

import { Popover as PopoverRootPrimitive } from "@radix-ui/react-popover"
import { useControlledState } from "@renderui/hooks-internal"
import { noop } from "@renderui/utils"
import { useRef } from "react"
import { PopoverProvider } from "../contexts/popover-context"
import type { PopoverRootProps } from "../types/popover-root"

const PopoverRoot = (props: PopoverRootProps) => {
  const { defaultOpen, open: openProp, children, onOpenChange = noop, ...restProps } = props

  const [open, setOpen] = useControlledState({
    defaultProp: defaultOpen,
    prop: openProp,
    onChange: onOpenChange,
  })

  const triggerRef = useRef<HTMLButtonElement>(null)

  return (
    <PopoverRootPrimitive open={open} onOpenChange={setOpen} {...restProps}>
      <PopoverProvider value={{ triggerRef, open, setOpen }}>{children}</PopoverProvider>
    </PopoverRootPrimitive>
  )
}

export { PopoverRoot }

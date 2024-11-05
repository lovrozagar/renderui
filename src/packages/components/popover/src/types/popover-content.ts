import type { PopoverContent as PopoverContentPrimitive } from "@radix-ui/react-popover"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { AnimationStyleVariables } from "@renderui/utils-internal"
import type React from "react"
import type { PopoverContentArrowProps } from "./popover-content-arrow"

type PopoverContentPrimitiveType = typeof PopoverContentPrimitive

type PopoverContentPrimitiveProps = Omit<
  React.ComponentPropsWithRef<PopoverContentPrimitiveType>,
  "className" | "onPointerDownOutside" | "onFocusOutside" | "onInteractOutside"
>

type PopoverContentCustomProps = ClassNameProps &
  AnimationStyleVariables &
  PopoverContentArrowProps & {
    portalContainer?: HTMLElement | null | undefined
    hasTriggerHeight?: boolean
    hasTriggerWidth?: boolean
    hasTriggerMinWidth?: boolean
    hasTriggerMinHeight?: boolean
    hasTriggerMaxWidth?: boolean
    hasTriggerMaxHeight?: boolean
    hasArrow?: boolean
    onPointerDownOutside?: (event: PointerEvent) => void
  }

type PopoverContentProps = Simplify<PopoverContentPrimitiveProps & PopoverContentCustomProps>

export type { PopoverContentProps }

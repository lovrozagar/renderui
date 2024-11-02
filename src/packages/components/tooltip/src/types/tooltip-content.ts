import type {
  TooltipArrow as TooltipArrowPrimitive,
  TooltipContent as TooltipContentPrimitive,
} from "@radix-ui/react-tooltip"
import type { ClassNameProps, Color, Simplify } from "@renderui/utils"
import type { AnimationStyleVariables } from "@renderui/utils-internal"
import type { ComponentPropsWithRef } from "react"

type TooltipContentArrowPrimitiveProps = Omit<
  ComponentPropsWithRef<typeof TooltipArrowPrimitive>,
  "className"
>

type TooltipContentArrowCustomProps = ClassNameProps

type TooltipContentPrimitiveProps = Omit<
  ComponentPropsWithRef<typeof TooltipContentPrimitive>,
  "className" | "color"
>

type TooltioContentCustomProps = ClassNameProps &
  AnimationStyleVariables & {
    color?: Color
    hasArrow?: boolean
    arrowProps?: Simplify<TooltipContentArrowPrimitiveProps & TooltipContentArrowCustomProps>
  }

type TooltipContentProps = Simplify<TooltipContentPrimitiveProps & TooltioContentCustomProps>

export type { TooltipContentProps }

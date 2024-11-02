import type { HoverCardContent as HoverCardContentPrimitive } from "@radix-ui/react-hover-card"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { AnimationStyleVariables } from "@renderui/utils-internal"
import type { ComponentPropsWithRef } from "react"
import type { HoverCardContentArrowProps } from "./hover-card-content-arrow"

type HoverCardPrimitiveProps = Omit<
  ComponentPropsWithRef<typeof HoverCardContentPrimitive>,
  "className"
>

type HoverCardCustomProps = ClassNameProps &
  AnimationStyleVariables &
  HoverCardContentArrowProps & {
    hasArrow?: boolean
  }

type HoverCardContentProps = Simplify<HoverCardPrimitiveProps & HoverCardCustomProps>

export type { HoverCardContentProps }

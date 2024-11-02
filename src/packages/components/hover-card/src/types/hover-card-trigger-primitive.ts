import type { HoverCardTrigger } from "@radix-ui/react-hover-card"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type HoverCardTriggerPrimitivePrimitiveProps = Omit<
  ComponentPropsWithRef<typeof HoverCardTrigger>,
  "className"
>

type HoverCardTriggerPrimitiveCustomProps = ClassNameProps

type HoverCardTriggerPrimitiveProps = Simplify<
  HoverCardTriggerPrimitivePrimitiveProps & HoverCardTriggerPrimitiveCustomProps
>

export type { HoverCardTriggerPrimitiveProps }

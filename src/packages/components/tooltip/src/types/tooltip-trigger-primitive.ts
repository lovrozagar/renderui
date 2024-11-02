import type { TooltipTrigger } from "@radix-ui/react-tooltip"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type TooltipTriggerPrimitivePrimitiveProps = Omit<
  ComponentPropsWithRef<typeof TooltipTrigger>,
  "className"
>

type TooltipTriggerPrimitiveCustomProps = ClassNameProps

type TooltipTriggerPrimitiveProps = Simplify<
  TooltipTriggerPrimitivePrimitiveProps & TooltipTriggerPrimitiveCustomProps
>

export type { TooltipTriggerPrimitiveProps }

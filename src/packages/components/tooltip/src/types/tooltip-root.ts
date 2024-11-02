import type { Simplify } from "@renderui/utils"

import type { Tooltip as TooltipRootPrimitive } from "@radix-ui/react-tooltip"
import type { ComponentPropsWithRef } from "react"

type TooltipPrimitiveProps = Omit<
  ComponentPropsWithRef<typeof TooltipRootPrimitive>,
  "disableHoverableContent" | "delayDuration" | "skipDelayDuration" | "disableHoverableContent"
>

type TooltipProviderProps = {
  skipDelayDuration?: number | undefined
  delayDuration?: number | undefined
  isHoverableContentDisabled?: boolean | undefined
}

type TooltipProps = Simplify<TooltipPrimitiveProps & TooltipProviderProps>

export type { TooltipProps }

import type { Simplify } from "@renderui/utils"

import type { Tooltip as TooltipRootPrimitive } from "@radix-ui/react-tooltip"
import type { ComponentPropsWithRef } from "react"

type TooltipRootPrimitiveProps = Omit<
  ComponentPropsWithRef<typeof TooltipRootPrimitive>,
  "disableHoverableContent" | "delayDuration" | "skipDelayDuration" | "disableHoverableContent"
>

type TooltipRootProviderProps = {
  skipDelayDuration?: number | undefined
  delayDuration?: number | undefined
  isHoverableContentDisabled?: boolean | undefined
}

type TooltipRootProps = Simplify<TooltipRootPrimitiveProps & TooltipRootProviderProps>

export type { TooltipRootProps }

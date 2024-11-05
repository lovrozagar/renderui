"use client"

import { Collapsible as CollapsiblePrimitive } from "@radix-ui/react-collapsible"
import { cn } from "@renderui/utils"
import type { CollapsibleRootProps } from "../types/collapsible-root"

const CollapsibleRoot = (props: CollapsibleRootProps) => {
  const { className, ...restProps } = props

  return (
    <CollapsiblePrimitive
      data-slot="collapsible-root"
      className={cn("_collapsible-root", className)}
      {...restProps}
    />
  )
}

export { CollapsibleRoot }

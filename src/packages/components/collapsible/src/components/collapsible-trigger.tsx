"use client"

import { CollapsibleTrigger as CollapsibleTriggerPrimitive } from "@radix-ui/react-collapsible"
import { Button } from "@renderui/button"
import { cx } from "@renderui/utils"
import type { CollapsibleTriggerProps } from "../types/collapsible-trigger"

const CollapsibleTrigger = (props: CollapsibleTriggerProps) => {
  const { className, variant = "plain" } = props

  return (
    <CollapsibleTriggerPrimitive asChild>
      <Button
        variant={variant}
        data-slot="collapsible-trigger"
        className={cx("_collapsible-trigger", className)}
        {...props}
      />
    </CollapsibleTriggerPrimitive>
  )
}

export { CollapsibleTrigger }

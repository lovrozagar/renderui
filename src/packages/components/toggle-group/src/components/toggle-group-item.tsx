"use client"

import { ToggleGroupItem as ToggleGroupItemPrimitive } from "@radix-ui/react-toggle-group"
import { Button } from "@renderui/button"
import { cn } from "@renderui/utils"
import {
  DEFAUL_TOGGLE_ITEM_CLASSNAME,
  TOGGLE_ITEM_OFF_RING_CLASSNAME,
} from "../constants/constants"
import { useToggleGroupContext } from "../contexts/toggle-group-context"
import type { ToggleGroupItemProps } from "../types/toggle-group-item"

const ToggleGroupItem = (props: ToggleGroupItemProps) => {
  const {
    value,
    className,
    children,
    color,
    variant,
    offVariant = 'text',
    onVariant = 'solid',
    hasToggledOffRing = false,
    ...restProps
  } = props

  const { value: rootValue, color: rootColor } = useToggleGroupContext()

  const isOn = Array.isArray(rootValue)
  /* (multiple type), empty array enforced by default, check if item is included */
  ? (rootValue as Array<string | number>).includes(value)
  /* (single type) check that value is exact match to root value (string or number excluding NaN)  */
  : (typeof rootValue === "string" || (typeof rootValue === "number" && !Number.isNaN(rootValue))) 

  return (
    <ToggleGroupItemPrimitive asChild value={value as string}>
      <Button
        data-slot="toggle-group-item"
        color={color ?? rootColor}
        variant={variant ?? (isOn ? onVariant : offVariant)}
        data-state={isOn ? "on" : "off"}
        className={cn(
          DEFAUL_TOGGLE_ITEM_CLASSNAME,
          hasToggledOffRing ? TOGGLE_ITEM_OFF_RING_CLASSNAME : undefined,
          className,
        )}
        {...restProps}
      >
        {typeof children === "function"
          ? ({ loaderProps: _, ...restProps }) => children({ ...restProps, isOn })
          : children}
      </Button>
    </ToggleGroupItemPrimitive>
  )
}

export { ToggleGroupItem }

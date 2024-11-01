"use client"

import { Toggle as TogglePrimitive } from "@radix-ui/react-toggle"
import { Button } from "@renderui/button"
import { useControlledState } from "@renderui/hooks-internal"
import { cn, noop } from "@renderui/utils"
import { DEFAUL_TOGGLE_CLASSNAME } from "../constants/constants"
import type { ToggleProps } from "../types/toggle"

const Toggle = (props: ToggleProps) => {
  const {
    defaultIsOn,
    isOn: isOnProp,
    className,
    children,
    variant,
    onOnChange = noop,
    color = "primary",
    ...restProps
  } = props

  const [isOn, setIsOn] = useControlledState<boolean>({
    prop: isOnProp,
    defaultProp: defaultIsOn,
    onChange: onOnChange,
  })

  return (
    <TogglePrimitive asChild pressed={isOn} onPressedChange={setIsOn}>
      <Button
        color={color}
        variant={variant ?? (isOn ? "solid" : "plain")}
        className={cn(DEFAUL_TOGGLE_CLASSNAME, className)}
        {...restProps}
      >
        {typeof children === "function"
          ? ({ isPressed, isKeyboardPressed }) => children({ isPressed, isKeyboardPressed, isOn })
          : children}
      </Button>
    </TogglePrimitive>
  )
}

export { Toggle }

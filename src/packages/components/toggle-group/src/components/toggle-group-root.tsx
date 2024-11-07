"use client"

import { ToggleGroup as ToggleGroupPrimitive } from "@radix-ui/react-toggle-group"
import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { cn, noop } from "@renderui/utils"
import { DEFAULT_TOGGLE_GROUP_CLASSNAME } from "../constants/constants"
import { ToggleGroupProvider } from "../contexts/toggle-group-context"
import type {
  ToggleGroupRootProps,
  ToggleGroupRootRenderProps,
  ToggleGroupRootType,
} from "../types/toggle-group-root"

const ToggleGroupRoot = <T extends ToggleGroupRootType, V extends string | number>(
  props: ToggleGroupRootProps<T, V>,
) => {
  const {
    value: valueProp,
    className,
    children,
    onValueChange = noop,
    color = "primary",
    type = "multiple",
    defaultValue = type === "multiple" ? [] : undefined,
    ...restProps
  } = props

  /* biome-ignore lint/suspicious/noExplicitAny: cast as any for primitive compatiblity */
  const [value, setValue] = useControllableState<any>({
    prop: valueProp,
    defaultProp: defaultValue,
    onChange: onValueChange,
  })

  return (
    <ToggleGroupPrimitive
      data-slot="group"
      type={type}
      value={value}
      onValueChange={setValue}
      className={cn(DEFAULT_TOGGLE_GROUP_CLASSNAME, className)}
      {...restProps}
    >
      <ToggleGroupProvider color={color} value={value}>
        {typeof children === "function"
          ? children({
              value: value as ToggleGroupRootRenderProps<T, V>["value"],
              setValue: onValueChange as ToggleGroupRootRenderProps<T, V>["setValue"],
            })
          : children}
      </ToggleGroupProvider>
    </ToggleGroupPrimitive>
  )
}

export { ToggleGroupRoot }

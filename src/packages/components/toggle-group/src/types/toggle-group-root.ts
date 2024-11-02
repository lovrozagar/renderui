import type { ToggleGroup as ToggleGroupPrimitive } from "@radix-ui/react-toggle-group"
import type { ClassNameProps, Color, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef, Dispatch, ReactNode, SetStateAction } from "react"

type ToggleGroupRootType = "single" | "multiple"

type ToggleGroupRootPrimitiveProps = Omit<
  ComponentPropsWithRef<typeof ToggleGroupPrimitive>,
  "type" | "value" | "defaultValue" | "onValueChange" | "className" | "children" | "color"
>

type ToggleGroupRootRenderProps<T extends ToggleGroupRootType, V extends string | number> = {
  value: T extends "single" ? V | undefined : V[]
  setValue: Dispatch<SetStateAction<T extends "single" ? V : V[]>>
}

type ToggleGroupRootCustomProps<
  T extends ToggleGroupRootType,
  V extends string | number,
> = ClassNameProps & {
  type: T
  value?: T extends "single" ? V | undefined : V[]
  defaultValue?: T extends "single" ? V | undefined : V[]
  onValueChange?: T extends "single" ? (value: V | undefined) => void : (value: V[]) => void
  children?: ((props: ToggleGroupRootRenderProps<T, V>) => ReactNode) | ReactNode
  color?: Color
}

type ToggleGroupRootProps<
  T extends ToggleGroupRootType,
  V extends string | number = string,
> = Simplify<ToggleGroupRootPrimitiveProps & ToggleGroupRootCustomProps<T, V>>

export type { ToggleGroupRootProps, ToggleGroupRootRenderProps, ToggleGroupRootType }

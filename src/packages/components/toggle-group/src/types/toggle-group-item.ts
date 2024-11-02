import type { ButtonProps, ButtonRenderProps } from "@renderui/button"
import type { Simplify } from "@renderui/utils"
import type { ReactNode } from "react"

type ToggleGroupItemPrimitiveProps = Omit<ButtonProps, "value" | "children">

type ToggleGroupItemRenderProps = Omit<ButtonRenderProps, 'loaderProps'> & {
  isOn: boolean
}

type ToggleGroupItemCustomProps =  {
  onVariant?: ButtonProps['variant']
  offVariant?: ButtonProps['variant']
  value: string | number
  hasToggledOffRing?: boolean
  children?: ((props: ToggleGroupItemRenderProps) => ReactNode) | ReactNode
}

type ToggleGroupItemProps = Simplify<ToggleGroupItemPrimitiveProps & ToggleGroupItemCustomProps>

export type { ToggleGroupItemProps }

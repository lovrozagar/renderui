import type { ButtonProps, ButtonRenderProps } from "@renderui/button"
import type { Simplify } from "@renderui/utils"
import type { ReactNode } from "react"

type TogglePrimitiveProps = Omit<ButtonProps, "children">

type ToggleRenderProps = Omit<ButtonRenderProps, "loaderProps"> & {
  isOn?: boolean
}

type ToggleCustomProps = {
  isOn?: boolean
  defaultIsOn?: boolean
  onOnChange?: (isOn: boolean) => void
  children?: ((props: ToggleRenderProps) => ReactNode) | ReactNode
}

type ToggleProps = Simplify<TogglePrimitiveProps & ToggleCustomProps>

export type { ToggleProps }

import type { ButtonProps } from "@renderui/button"
import type { Simplify } from "@renderui/utils"
import type { ReactNode } from "react"

type TogglePrimitiveProps = Omit<ButtonProps, "children">

type ToggleRenderProps = { isPressed: boolean; isKeyboardPressed: boolean; isOn: boolean }

type ToggleCustomProps = {
  isOn?: boolean
  defaultIsOn?: boolean
  onOnChange?: (isOn: boolean) => void
  children?: ((props: ToggleRenderProps) => ReactNode) | ReactNode
}

type ToggleProps = Simplify<TogglePrimitiveProps & ToggleCustomProps>

export type { ToggleProps }

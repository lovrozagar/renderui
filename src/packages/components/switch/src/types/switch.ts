import type { ButtonProps } from "@renderui/button"
import type { Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef, ReactNode, Ref } from "react"
import type { SwitchThumbProps } from "./switch-thumb"

type SwitchButtonProps = Omit<
  ButtonProps,
  "children" | "disabled" | "readonly" | "required" | "startContent" | "children" | "endContent"
>

type SwitchRenderPropProps = {
  isPressed: boolean
  isChecked: boolean
}

type SwitchRenderProp = ((props: SwitchRenderPropProps) => ReactNode) | ReactNode

type SwitchThumbPropProps = {
  isChecked: boolean
}

type SwitchThumbRenderProp = ((props: SwitchThumbPropProps) => SwitchThumbProps) | SwitchThumbProps

type SwitchCustomProps = {
  startContent?: SwitchRenderProp
  children?: SwitchRenderProp
  endContent?: SwitchRenderProp
  inputProps?: ComponentPropsWithRef<"input">
  thumbProps?: SwitchThumbRenderProp
  name?: string
  defaultChecked?: boolean
  isChecked?: boolean
  isDisabled?: boolean
  isReadOnly?: boolean
  isInvalid?: boolean
  isRequired?: boolean
  onCheckedChange?: (checked: boolean) => void
}

type SwitchProps = Simplify<SwitchButtonProps & SwitchCustomProps>

export type { SwitchProps }

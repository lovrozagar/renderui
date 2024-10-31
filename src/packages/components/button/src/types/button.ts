import type { UseAriaHandlersProps } from "@renderui/hooks-internal"
import type { Ripple, RippleProps } from "@renderui/ripple"
import type { ClassNameProps, Color, PolymorphicProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef, ReactNode } from "react"
import type { ButtonClassesProps } from "../classes/button-classes"
import type { GetLoaderPropsReturn } from "../utils/get-loader-props"

type ButtonPrimitiveProps = Omit<ComponentPropsWithRef<"button">, "className" | "children" | "disabled" | "color">

type ButtonRenderPropsProps = {
  isPressed: boolean
  isKeyboardPressed: boolean
  Ripple: typeof Ripple
}

type ButtonRenderProps = ((props: ButtonRenderPropsProps) => ReactNode) | ReactNode

type LoaderPosition = "start" | "end"

type ButtonLoaderRenderPropsProps = Omit<ButtonRenderPropsProps, "Ripple"> & {
  loaderProps: GetLoaderPropsReturn
}

type ButtonLoaderRenderProps = ((props: ButtonLoaderRenderPropsProps) => ReactNode) | ReactNode

type ButtonCustomProps = ClassNameProps & ButtonClassesProps & Partial<UseAriaHandlersProps> & PolymorphicProps &  {
  children?: ButtonRenderProps
  startContent?: ButtonRenderProps
  endContent?: ButtonRenderProps
  loadingContent?: ButtonRenderProps
  isDisabled?: boolean
  isLoading?: boolean
  loaderPosition?: LoaderPosition
  loader?: ButtonLoaderRenderProps
  color?: Color
  hasRipple?: boolean
  rippleProps?: RippleProps
  subLayerProps?: RippleProps["subLayerProps"]
}

type ButtonProps = Simplify<
  ButtonPrimitiveProps &
    ButtonCustomProps
>

export type { ButtonProps, ButtonClassesProps }

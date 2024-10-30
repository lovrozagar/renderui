import type { UseAriaHandlersProps } from "@renderui/hooks-internal"
import type { Ripple, RippleProps } from "@renderui/ripple"
import type { Color, PolymorphicProps, Simplify, VariantProps } from "@renderui/utils"
import type { ComponentPropsWithRef, ReactNode } from "react"
import type { buttonClasses } from "../classes/button-classes"

type ButtonPrimitiveProps = Omit<ComponentPropsWithRef<"button">, "children" | "disabled" | "color">

type ButtonRenderPropsProps = {
  isPressed: boolean
  isKeyboardPressed: boolean
  Ripple: typeof Ripple
}

type ButtonRenderProps = ((props: ButtonRenderPropsProps) => ReactNode) | ReactNode

type ButtonLoaderRenderPropsProps = Omit<ButtonRenderPropsProps, "Ripple"> & {
  loaderProps: {
    position: string | undefined
    className: string | undefined
  }
}

type ButtonLoaderRenderProps = ((props: ButtonLoaderRenderPropsProps) => ReactNode) | ReactNode

type ButtonCustomProps = {
  children?: ButtonRenderProps
  loadingContent?: ButtonRenderProps
  startContent?: ButtonRenderProps
  endContent?: ButtonRenderProps
  hasRipple?: boolean
  isDisabled?: boolean
  isLoading?: boolean
  color?: Color
  loaderPosition?: "start" | "end"
  loader?: ButtonLoaderRenderProps
  rippleProps?: RippleProps
  subLayerProps?: RippleProps["subLayerProps"]
}

type ButtoVariantProps = VariantProps<typeof buttonClasses>

type ButtonProps = Simplify<
  ButtonPrimitiveProps &
    ButtonCustomProps &
    ButtoVariantProps &
    Partial<UseAriaHandlersProps> &
    PolymorphicProps
>

export type { ButtonProps }

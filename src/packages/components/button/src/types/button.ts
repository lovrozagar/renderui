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

type LoaderPosition = "start" | "end" | "absolute-center" | "absolute-start" | "absolute-end"

type ButtonLoaderRenderPropsProps = Omit<ButtonRenderPropsProps, "Ripple"> & {
  loaderProps: {
    position: LoaderPosition | undefined
    className: string | undefined
  }
}

type ButtonLoaderRenderProps = ((props: ButtonLoaderRenderPropsProps) => ReactNode) | ReactNode

type ButtonCustomProps = {
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
    VariantProps<typeof buttonClasses> &
    ButtonCustomProps &
    Partial<UseAriaHandlersProps> &
    PolymorphicProps
>

export type { ButtonProps }

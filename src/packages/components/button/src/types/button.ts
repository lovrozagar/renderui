import type { UseAriaHandlersProps } from "@renderui/hooks-internal"
import type { Ripple, RippleProps } from "@renderui/ripple"
import type { Color, PolymorphicProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef, ReactNode } from "react"

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

type Variant = "plain" | "solid" | "outline" | "text" | "ghost" | "shadow"

type Size = "auto" | "icon" | "small" | "medium" | "large"

type ButtonCustomProps = {
  children?: ButtonRenderProps
  startContent?: ButtonRenderProps
  endContent?: ButtonRenderProps
  loadingContent?: ButtonRenderProps
  isDisabled?: boolean
  isLoading?: boolean
  loaderPosition?: "start" | "end"
  loader?: ButtonLoaderRenderProps
  color?: Color
  variant?: Variant
  size?: Size
  hasDefaultFocusVisibleStyles?: boolean
  hasRingOnAnyFocus?: boolean
  hasDefaultInnerRing?: boolean
  hasDefaultPressedStyles?: boolean
  hasDefaultHoverStyles?: boolean
  hasLowerOpacityOnLoading?: boolean
  hasLoaderOnLoading?: boolean
  hasContentOnLoading?: boolean
  hasDisabledStyles?: boolean
  hasShadowOnHover?: boolean
  hasRipple?: boolean
  rippleProps?: RippleProps
  subLayerProps?: RippleProps["subLayerProps"]
}

type ButtonProps = Simplify<
  ButtonPrimitiveProps & ButtonCustomProps & Partial<UseAriaHandlersProps> & PolymorphicProps
>

export type { ButtonProps }

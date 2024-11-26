import type { UseAriaHandlersProps } from "@renderui/hooks-internal"
import type { RippleProps } from "@renderui/ripple"
import type { ClassNameProps, ClassValue, Color, PolymorphicProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef, ReactNode } from "react"
import type { ButtonClassesProps } from "../classes/button-classes"
import type { useButton } from "../hooks/use-button"

type ButtonPrimitiveProps = Omit<
  ComponentPropsWithRef<"button">,
  "className" | "children" | "disabled" | "color"
>

type ButtonRenderProps = ReturnType<typeof useButton>["utility"]["renderProps"]

type ButtonRenderPropsFn = ((props: ButtonRenderProps) => ReactNode) | ReactNode

type LoaderPosition = "start" | "end"

type ButtonCustomProps = ClassNameProps &
  ButtonClassesProps &
  Partial<UseAriaHandlersProps> &
  PolymorphicProps & {
    children?: ButtonRenderPropsFn
    startContent?: ButtonRenderPropsFn
    endContent?: ButtonRenderPropsFn
    loadingContent?: ButtonRenderPropsFn
    isDisabled?: boolean
    isLoading?: boolean
    loaderPosition?: LoaderPosition
    loader?: ButtonRenderPropsFn
    color?: Color
    hasRipple?: boolean
    rippleProps?: RippleProps
    classNames?: {
      root?: ClassValue
      rippleItem?: ClassValue
    }
  }

type ButtonProps = Simplify<ButtonPrimitiveProps & ButtonCustomProps>

export type { ButtonProps, ButtonRenderProps, ButtonRenderPropsFn }

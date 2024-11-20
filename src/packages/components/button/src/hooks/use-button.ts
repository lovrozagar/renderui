import { useComposedRefs } from "@radix-ui/react-compose-refs"
import { useAriaHandlers } from "@renderui/hooks-internal"
import { chain, cn } from "@renderui/utils"
import { splitAriaProps } from "@renderui/utils-internal"
import { type CSSProperties, useRef } from "react"
import { buttonClasses } from "../classes/button-classes"
import type { ButtonProps } from "../types/button"
import { getLoaderProps } from "../utils/get-loader-props"
import { getRippleProps } from "../utils/get-ripple-props"
import { getStyleVariables } from "../utils/get-style-variables"

function useButton(
  props: Omit<
    ButtonProps,
    | "asChild"
    | "children"
    | "startContent"
    | "endContent"
    | "loader"
    | "loadingContent"
    | "hasRipple"
  >,
) {
  const { ariaProps, nonAriaProps } = splitAriaProps(props)
  const {
    ref,
    className,
    style,
    isDisabled,
    isLoading,
    loaderProps,
    subLayerProps,
    rippleProps,
    type = "button",
    size = "medium",
    variant = "solid",
    color = "primary",
    loaderPosition = "end",
    hasDefaultInnerRing = true,
    hasDefaultHoverStyles = true,
    hasDefaultFocusVisibleStyles = true,
    hasDefaultPressedStyles = true,
    hasRingOnAnyFocus = false,
    hasLowerOpacityOnLoading = true,
    hasContentOnLoading = true,
    hasDisabledStyles = true,
    hasShadowOnHover = false,
    onClick,
    ...restProps
  } = nonAriaProps

  const internalRef = useRef<HTMLButtonElement>(null)
  const mergedRefs = useComposedRefs<HTMLButtonElement>(internalRef, ref)

  const isPressDisabled = isDisabled || ariaProps?.isPressDisabled || isLoading
  const isHoverDisabled = isDisabled || ariaProps?.isHoverDisabled || isLoading

  const { ariaComponentProps, ariaFlags } = useAriaHandlers(
    {
      ...ariaProps,
      onPress: chain(ariaProps.onPress, onClick),
      isPressDisabled,
      isHoverDisabled,
    },
    internalRef,
  )

  return {
    buttonProps: {
      type,
      ref: mergedRefs,
      disabled: isDisabled,
      className: cn(
        buttonClasses({
          size,
          variant,
          hasRingOnAnyFocus,
          hasDefaultInnerRing,
          hasDefaultFocusVisibleStyles,
          hasDefaultPressedStyles,
          hasDefaultHoverStyles,
          hasLowerOpacityOnLoading,
          hasDisabledStyles,
          hasShadowOnHover,
          hasContentOnLoading,
        }),
        className,
      ),
      style: {
        ...getStyleVariables({ color, variant }),
        ...style,
      } as CSSProperties,
      "aria-label": isLoading ? "loading" : undefined,
      "aria-busy": isLoading || undefined,
      "data-slot": "button",
      "data-variant": variant,
      "data-color": color,
      "data-loading": isLoading || undefined,
      "data-disabled": isDisabled,
      ...ariaComponentProps,
      ...restProps,
    },
    subLayerProps,
    rippleProps: getRippleProps({ rippleProps, isLoading }),
    utility: {
      isLoading,
      loaderPosition,
      renderProps: {
        isPressed: ariaFlags.isPressed,
        isKeyboardPressed: ariaFlags.isKeyboardPressed,
        isFocused: ariaFlags.isFocused,
        isFocusVisible: ariaFlags.isFocusVisible,
        loaderProps: getLoaderProps({ isLoading }),
      },
    },
  }
}

export { useButton }

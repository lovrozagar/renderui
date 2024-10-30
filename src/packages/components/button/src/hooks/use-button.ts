import { useMergedRef } from "@renderui/hooks"
import { useAriaHandlers } from "@renderui/hooks-internal"
import { chain, cn } from "@renderui/utils"
import { splitAriaProps } from "@renderui/utils-internal"
import { type CSSProperties, useRef } from "react"
import { buttonClasses } from "../classes/button-classes"
import type { ButtonProps } from "../types/button"
import { getLoaderProps } from "../utils/get-loader-props"
import { getRippleProps } from "../utils/get-ripple-props"

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
    hasLoaderOnLoading = true,
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
  const mergedRefs = useMergedRef<HTMLButtonElement>([internalRef, ref])

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
  const { isPressed, isKeyboardPressed } = ariaFlags

  const mergedLoaderProps = getLoaderProps({ isLoading, loaderPosition })

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
          hasLoaderOnLoading,
          hasDisabledStyles,
          hasShadowOnHover,
          hasContentOnLoading: !(isLoading && loaderPosition === "absolute-center"),
        }),
        className,
      ),
      style: {
        "--button-bg": `var(--${color})`,
        "--button-color": `var(--${color}-foreground)`,
        ...style,
      } as CSSProperties,
      "aria-label": isLoading ? "loading" : undefined,
      "aria-busy": isLoading || undefined,
      "data-variant": variant,
      "data-color": color,
      "data-loading": isLoading || undefined,
      "data-disabled": isDisabled,
      "data-slot": "base",
      ...ariaComponentProps,
      ...restProps,
    },
    subLayerProps,
    rippleProps: getRippleProps({ rippleProps, isLoading }),
    loaderProps: mergedLoaderProps,
    utility: {
      isPressed,
      isKeyboardPressed,
      isLoading,
      loaderPosition,
      hasLoaderOnLoading,
      loaderProps: getLoaderProps({ isLoading, loaderPosition }),
    },
  }
}

export { useButton }

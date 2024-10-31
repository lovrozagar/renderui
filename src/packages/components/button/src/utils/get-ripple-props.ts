import type { RippleProps } from "@renderui/ripple"
import { cx, getOptionalObject } from "@renderui/utils"

type GetRipplePropsArgs = {
  rippleProps: RippleProps | undefined
  isLoading: boolean | undefined
}

/* biome-ignore lint/suspicious/noExplicitAny: avoid external module reference error: */
const getRippleProps = (props: GetRipplePropsArgs): any => {
  const { rippleProps, isLoading } = props

  const {
    isDisabled: isDisabledProp,
    className,
    style,
    ...restRippleProps
  } = getOptionalObject(rippleProps)

  const isDisabled = isLoading ?? isDisabledProp

  return {
    "data-slot": "loader",
    "data-disabled": isDisabled,
    "className": isLoading ? cx("text-[rgba(var(--button-color))]", className) : undefined,
    ...restRippleProps,
  }
}

export { getRippleProps }

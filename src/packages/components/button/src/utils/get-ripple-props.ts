import type { RippleProps } from "@renderui/ripple"
import { type ClassValue, optional } from "@renderui/utils"

type GetRipplePropsArgs = {
  rippleProps: RippleProps | undefined
  isLoading: boolean | undefined
  classNamesRippleItem: ClassValue | undefined
}

const getRippleProps = (props: GetRipplePropsArgs) => {
  const { rippleProps, isLoading, classNamesRippleItem } = props

  const {
    style,
    className,
    isDisabled: isDisabledProp,
    itemProps,
    asChild = true,
    type = "wrapper",
    ...restRippleProps
  } = optional(rippleProps)

  const { className: itemClassName, ...restItemProps } = optional(itemProps)

  const isDisabled = isLoading ?? isDisabledProp

  return {
    type,
    asChild,
    "data-disabled": isDisabled,
    "className": isLoading ? ["text-[rgba(var(--button-color))]", className] : undefined,
    itemsProps: {
      className: [itemClassName, classNamesRippleItem],
      ...restItemProps,
    },
    ...restRippleProps,
  }
}

export { getRippleProps }

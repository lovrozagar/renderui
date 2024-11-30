import type { RippleProps } from "@renderui/ripple"
import { type ClassValue, optional } from "@renderui/utils"

type GetRipplePropsArgs = {
	rippleProps: RippleProps | undefined
	rippleItemClassName: ClassValue | undefined
}

const getRippleProps = (props: GetRipplePropsArgs) => {
	const { rippleProps, rippleItemClassName } = props

	const { classNames, asChild = true, type = "wrapper", ...restRippleProps } = optional(rippleProps)

	return {
		type,
		asChild,
		classNames: {
			...classNames,
			rippleItem: [rippleItemClassName, classNames?.rippleItem],
		},
		...restRippleProps,
	} satisfies Partial<RippleProps>
}

export { getRippleProps }

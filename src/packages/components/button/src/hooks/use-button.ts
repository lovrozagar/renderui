import { chain, cn } from "@renderui/utils"
import type { CSSProperties } from "react"
import { buttonClasses } from "../classes/button-classes"
import type { ButtonProps } from "../types/button"
import { getRippleProps } from "../utils/get-ripple-props"
import { usePress } from "./use-press"

function useButton(
	props: Omit<
		ButtonProps,
		"asChild" | "children" | "startContent" | "endContent" | "loader" | "loadingContent"
	>,
) {
	const {
		style,
		className,
		classNames,
		isLoading,
		isDisabled,
		rippleProps,
		onClick,
		onPress,
		onKeyDown,
		onKeyUp,
		onPointerDown,
		onPointerUp,
		onPointerLeave,
		type = "button",
		size = "medium",
		variant = "solid",
		color = "primary",
		ring = "default",
		loaderPosition = "end",
		hasRipple = true,
		hasDefaultHoverStyles = true,
		hasDefaultFocusVisibleStyles = true,
		hasDefaultPressedStyles = true,
		hasRingOnAnyFocus = false,
		hasDefaultLoadingStyles = true,
		hasDisabledStyles = true,
		hasShadowOnHover = false,
		...restProps
	} = props

	/* press state to fix active: selector, text selection and other issues */
	/* akin to react-aria usePress but much lighter, keeps same events */
	/* onClick allowed and same as native, passing onPress stops propagation by default */
	const press = usePress({ isDisabled, isLoading, onPress })

	return {
		buttonProps: {
			type,
			disabled: press.isInactive,
			className: cn(
				buttonClasses({
					variant,
					size,
					ring,
					hasRingOnAnyFocus,
					hasDefaultFocusVisibleStyles,
					hasDefaultPressedStyles,
					hasDefaultHoverStyles,
					hasDefaultLoadingStyles,
					hasDisabledStyles,
					hasShadowOnHover,
					isInactive: press.isInactive,
				}),
				className,
				classNames?.button,
			),
			style: {
				/* prevent text selection on double tap or hold */
				userSelect: press.isPressed ? "none" : undefined,

				/* set button color variables */
				"--button-bg": `var(--${color})`,
				"--button-color": variant === "light" ? `var(--${color})` : `var(--${color}-foreground)`,

				/* merge with style prop */
				...style,
			} as CSSProperties,
			/* if button is disabled or loading, disable press events (capture can still be used) */
			onClick: press.isInactive ? undefined : chain(onClick, press.handlePress),
			onKeyDown: press.isInactive ? undefined : chain(onKeyDown, press.handleKeyDown),
			onKeyUp: press.isInactive ? undefined : chain(onKeyUp, press.handleKeyUp),
			onPointerDown: press.isInactive ? undefined : chain(onPointerDown, press.handlePointerDown),
			onPointerUp: press.isInactive ? undefined : chain(onPointerUp, press.handlePointerUp),
			onPointerLeave: chain(onPointerLeave, press.handlePointerLeave),
			"data-slot": "button",
			"data-pressed": press.isPressed,
			"data-variant": variant,
			"data-color": color,
			"data-loading": isLoading,
			"data-disabled": isDisabled,
			"aria-label": isLoading ? "loading" : undefined,
			"aria-busy": isLoading,
			...restProps,
		},
		rippleProps: getRippleProps({ rippleProps, rippleItemClassName: classNames?.["ripple-item"] }),
		ui: {
			hasRipple,
			isLoading,
			loaderPosition,
			renderProps: {
				isPressed: press.isPressed,
			},
		},
	}
}

export { useButton }

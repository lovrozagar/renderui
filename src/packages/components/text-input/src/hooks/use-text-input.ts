import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { useMergedRef, useOnClickOutside } from "@renderui/hooks"
import { chain, cn, cx, getOptionalObject, renderProp } from "@renderui/utils"
import { type CSSProperties, useRef } from "react"
import { inputContainerClasses } from "../classes/input-container-classes"
import {
	DEFAULT_TEXT_INPUT_BASE_PASSWORD_TOGGLE_BUTTON_ICON_CLASSNAME,
	DEFAULT_TEXT_INPUT_CLASSNAME,
	DEFAULT_TEXT_INPUT_CLEAR_BUTTON_CLASSNAME,
	DEFAULT_TEXT_INPUT_CLEAR_BUTTON_ICON_CLASSNAME,
	DEFAULT_TEXT_INPUT_CONTAINER_CLASSNAME,
	DEFAULT_TEXT_INPUT_PASSWORD_TOGGLE_BUTTON_CLASSNAME,
	TEXT_INPUT_CONTAINER_ACTIONS_PADDING,
	TEXT_INPUT_CONTAINER_BASE_PADDING,
	TEXT_INPUT_DISABLED_BUTTON_CLASSNAME,
	TEXT_INPUT_INVALID_BUTTON_RING_CLASSNAME,
} from "../constants/constants"
import type { TextInputProps } from "../types/text-input"
import { useInputActions } from "./use-input-actions"

function useTextInput(props: TextInputProps) {
	const {
		ref,
		defaultValue,
		value: valueProp,
		isDisabled,
		isReadOnly,
		isInvalid,
		isRequired,
		className,
		classNames: classNamesProp,
		children,
		startContent,
		endContent,
		hasClearButton,
		hasClearButtonAlways,
		hasPasswordToggleButton,
		containerProps,
		clearButtonProps,
		clearButtonIconProps,
		passwordToggleButtonProps,
		passwordToggleButtonIconProps,
		onClear,
		onClick,
		onPointerDown,
		onValueChange,
		onChange: nativeOnChange,
		hasDefaultFocusWithinStyles = true,
		hasDefaultHoverStyles = true,
		hasDefaultInvalidStyles = true,
		variant = "solid",
		size = "medium",
		type = "text",
		color = "primary",
		...restProps
	} = props

	const [value = "", setValue] = useControllableState<string>({
		prop: valueProp as string,
		defaultProp: defaultValue as string,
		onChange: onValueChange,
	})

	const internalInputRef = useRef<HTMLInputElement>(null)
	const mergedRefCallback = useMergedRef<HTMLInputElement>([internalInputRef, ref])

	const {
		inputType,
		clearTimeouts,
		handleClear,
		handleInputFocusOnContainerClick,
		handlePasswordToggle,
	} = useInputActions(
		{
			type,
			setValue,
			onClear,
		},
		internalInputRef,
	)

	useOnClickOutside({
		event: "pointerdown",
		element: internalInputRef.current,
		handler: clearTimeouts,
	})

	const shouldRenderClearButton =
		hasClearButtonAlways || (hasClearButton && typeof value === "string" && value.length > 0)

	const renderProps = { value }

	const {
		className: containerClassName,
		style: containerStyle,
		onClick: containerOnClick,
		onPointerDown: containerOnPointerDown,
		isTextInput = true,
		isFocusWithin = true,
		isUsingAriaPressProps = false,
		...restContainerClassName
	} = getOptionalObject(renderProp(containerProps, renderProps))

	const {
		variant: clearButtonVariant = "ghost",
		className: clearButtonClassName,
		style: clearButtonStlye,
		onPress: clearButtonOnPress,
		...restClearButtonProps
	} = getOptionalObject(renderProp(clearButtonProps, renderProps))

	const { className: clearButtonIconClassName, ...restClearButtonIconProps } = getOptionalObject(
		renderProp(clearButtonIconProps, renderProps),
	)

	const {
		variant: passwordToggleButtonVariant = "ghost",
		className: passwordToggleButtonClassName,
		style: passwordToggleButtonStyle,
		onPress: passwordToggleButtonOnPress,
		...restPasswordToggleButtonProps
	} = getOptionalObject(renderProp(passwordToggleButtonProps, renderProps))

	const { className: passwordToggleIconButtonClassName, ...restPasswordToggleIconProps } =
		getOptionalObject(renderProp(passwordToggleButtonIconProps, renderProps))

	const classNames = getOptionalObject(renderProp(classNamesProp, renderProps))

	const chainedOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (nativeOnChange) nativeOnChange(event)

		setValue(event.target.value)
	}

	const getVisibleActionButtonClasses = () =>
		(value && hasClearButton) ||
		(!value && hasClearButton && hasClearButtonAlways) ||
		hasPasswordToggleButton
			? "pr-2"
			: undefined

	const forcedVariant = variant === "outline" ? "outline" : "solid"

	return {
		containerProps: {
			isTextInput,
			isFocusWithin,
			isDisabled,
			isUsingAriaPressProps,
			"data-empty": !value,
			"data-disabled": isDisabled,
			"data-readonly": isReadOnly,
			"data-invalid": isInvalid,
			"data-required": isRequired,
			"data-slot": "text-input-container",
			className: cx(
				DEFAULT_TEXT_INPUT_CONTAINER_CLASSNAME,
				getVisibleActionButtonClasses(),
				inputContainerClasses({
					variant: forcedVariant,
					size,
					isDisabled,
					hasDefaultFocusWithinStyles,
					hasDefaultHoverStyles,
					hasDefaultInvalidStyles,
				}),
				containerClassName,
				classNames.container,
			),
			style: {
				...containerStyle,
				"--container-color": `var(--${color})`,
			} as CSSProperties,
			onPointerDown: chain(
				(event: React.PointerEvent<HTMLDivElement> | React.PointerEvent<Element>) =>
					event.preventDefault(),
				containerOnPointerDown,
			),
			onClick: chain(handleInputFocusOnContainerClick, containerOnClick),
			...restContainerClassName,
		},
		inputProps: {
			ref: mergedRefCallback,
			onChange: chainedOnChange,
			value: value ?? "",
			"aria-disabled": isDisabled,
			"aria-readonly": isReadOnly,
			"aria-invalid": isInvalid,
			"aria-required": isRequired,
			"data-value": value,
			"data-empty": !value,
			"data-disabled": isDisabled,
			"data-readonly": isReadOnly,
			"data-invalid": isInvalid,
			"data-required": isRequired,
			"data-slot": "text-input",
			disabled: isDisabled,
			readOnly: isReadOnly,
			type: inputType,
			className: cn(
				DEFAULT_TEXT_INPUT_CLASSNAME,
				hasClearButton || hasPasswordToggleButton
					? TEXT_INPUT_CONTAINER_ACTIONS_PADDING
					: TEXT_INPUT_CONTAINER_BASE_PADDING,
				className,
				classNames.input,
			),
			onPointerDown: chain(
				(event: React.PointerEvent<HTMLInputElement>) => event.stopPropagation(),
				onPointerDown,
			),
			onClick: chain(
				(event: React.MouseEvent<HTMLInputElement, MouseEvent>) => event.stopPropagation(),
				onClick,
			),
			...restProps,
		},
		clearButtonProps: {
			"data-slot": "text-input-clear-button",
			variant: clearButtonVariant,
			className: cn(
				DEFAULT_TEXT_INPUT_CLEAR_BUTTON_CLASSNAME,
				isDisabled ? TEXT_INPUT_DISABLED_BUTTON_CLASSNAME : undefined,
				isInvalid ? TEXT_INPUT_INVALID_BUTTON_RING_CLASSNAME : undefined,
				clearButtonClassName,
				classNames.clearButton,
			),
			style: {
				"--button-bg": `var(--${isInvalid ? "destructive" : color})`,
				...clearButtonStlye,
			},
			onPress: chain(handleClear, clearButtonOnPress),
			...restClearButtonProps,
		},
		clearButtonIconProps: {
			"data-slot": "text-input-clear-button-icon",
			className: cn(
				DEFAULT_TEXT_INPUT_CLEAR_BUTTON_ICON_CLASSNAME,
				clearButtonIconClassName,
				classNames.clearButtonIcon,
			),
			...restClearButtonIconProps,
		},
		passwordToggleButtonProps: {
			type: inputType,
			"data-slot": "text-input-password-toggle",
			variant: passwordToggleButtonVariant,
			className: cn(
				DEFAULT_TEXT_INPUT_PASSWORD_TOGGLE_BUTTON_CLASSNAME,
				isDisabled ? TEXT_INPUT_DISABLED_BUTTON_CLASSNAME : undefined,
				isInvalid ? TEXT_INPUT_INVALID_BUTTON_RING_CLASSNAME : undefined,
				passwordToggleButtonClassName,
				classNames.passwordToggle,
			),
			style: {
				"--button-bg": `var(--${isInvalid ? "destructive" : color})`,
				...passwordToggleButtonStyle,
			},
			passwordToggleButtonIconProps: {
				"data-slot": "text-input-password-toggle-icon",
				className: cn(
					DEFAULT_TEXT_INPUT_BASE_PASSWORD_TOGGLE_BUTTON_ICON_CLASSNAME,
					passwordToggleButtonIconProps,
					classNames.passwordToggleIcon,
				),
				...restPasswordToggleIconProps,
			},
			onPress: chain(handlePasswordToggle, passwordToggleButtonOnPress),
			...restPasswordToggleButtonProps,
		},
		utilityProps: {
			value,
			setValue,
			shouldRenderClearButton,
			hasPasswordToggleButton,
			startContent,
			children,
			endContent,
		},
	}
}

export { useTextInput }

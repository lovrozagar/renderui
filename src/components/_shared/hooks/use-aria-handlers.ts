import { mergeProps } from '@renderui/utils'
import React, { useState } from 'react'
import {
	useFocus,
	useFocusRing,
	useHover,
	useLongPress,
	usePress,
	type FocusProps,
	type FocusRingProps,
	type HoverProps,
	type LongPressProps,
	type PressEvent,
	type PressHookProps,
} from 'react-aria'

import type { UseAriaHandlersProps } from '@/components/_shared/types/aria'
import type { OrUndefined } from '@/components/_shared/types/or-undefined'
import { isKeyboardPointerType } from '@/components/_shared/utils/is-keyboard-pointer-type'
import { chain } from '@renderui/utils'

function useAriaHandlers<T extends HTMLElement>(
	props: OrUndefined<UseAriaHandlersProps>,
	ref: ForwardedRef<T | null> | undefined,
) {
	const {
		// PRESS
		isPressDisabled,
		isPressed: isPressedControlled,
		preventFocusOnPress,
		allowTextSelectionOnPress,
		shouldCancelOnPointerExit,
		onPress,
		onPressStart,
		onPressEnd,
		onPressChange,
		onPressUp,

		// KEYBOARD PRESS
		onKeyboardPressStart,
		onKeyboardPressEnd,
		onKeyboardPress,

		// LONG PRESS
		isLongPressDisabled,
		longPressTreshold,
		longPressAccessibilityDescription,
		onLongPressStart,
		onLongPress,
		onLongPressEnd,

		// FOCUS
		isFocusDisabled,
		onFocus,
		onFocusChange,
		onBlur,

		// FOCUS WITHIN
		isTextInput,
		isFocusWithin,

		// HOVER
		isHoverDisabled,
		onHoverStart,
		onHoverChange,
		onHoverEnd,

		// NATIVE
		onDragStart,
		onKeyDown,
		onKeyUp,
		onMouseDown,
		onPointerDown,
		onPointerEnter,
		onPointerLeave,
		onPointerUp,

		isUsingAriaPressProps = true,
	} = props

	const [isKeyboardPressed, setIsKeyboardPressed] = useState(false)
	const [isLongPressed, setIsLongPressed] = useState(false)

	const handlePressStart = (event: PressEvent) => {
		if (event.pointerType === 'keyboard') setIsKeyboardPressed(true)
	}

	const handlePressEnd = (event: PressEvent) => {
		if (event.pointerType === 'keyboard') setIsKeyboardPressed(false)
	}

	const handleKeyboardPressStart = (event: PressEvent) => {
		if (event.pointerType === 'keyboard' && onKeyboardPressStart) onKeyboardPressStart(event)
	}

	const handleKeyboardPressEnd = (event: PressEvent) => {
		if (event.pointerType === 'keyboard' && onKeyboardPressEnd) onKeyboardPressEnd(event)
	}

	const handleKeyboardPress = (event: PressEvent) => {
		if (event.pointerType === 'keyboard' && onKeyboardPress) onKeyboardPress(event)
	}

	// hooks propeties are asserted due to the decision to keep exactOptionalPropertyTypes: true - TS rule

	const { pressProps, isPressed } = usePress({
		ref,
		isPressed: isPressedControlled,
		preventFocusOnPress,
		allowTextSelectionOnPress,
		shouldCancelOnPointerExit,
		isDisabled: isPressDisabled,
		onPressChange,
		onPressUp,
		onPress: chain(handleKeyboardPress, onPress),
		onPressStart: chain(handlePressStart, handleKeyboardPressStart, onPressStart),
		onPressEnd: chain(handlePressEnd, handleKeyboardPressEnd, onPressEnd),
	} as PressHookProps)

	const { longPressProps } = useLongPress({
		isDisabled: isLongPressDisabled,
		threshold: longPressTreshold,
		accessibilityDescription: longPressAccessibilityDescription,
		onLongPressStart: chain(onLongPressStart, () => setIsLongPressed(true)),
		onLongPress,
		onLongPressEnd,
	} as LongPressProps)

	const { focusProps } = useFocus({
		isDisabled: isFocusDisabled,
		onFocus,
		onBlur,
		onFocusChange,
	} as FocusProps)

	const {
		focusProps: focusVisibleProps,
		isFocusVisible,
		isFocused,
	} = useFocusRing({
		isTextInput,
		within: isFocusWithin,
	} as FocusRingProps)

	const { hoverProps, isHovered } = useHover({
		isDisabled: isHoverDisabled,
		onHoverStart,
		onHoverChange,
		onHoverEnd,
	} as HoverProps)

	const ariaHandlerProps = mergeProps(
		isLongPressDisabled ? undefined : longPressProps,
		isUsingAriaPressProps ? pressProps : undefined,
		focusProps,
		focusVisibleProps,
		hoverProps,
		{
			onPointerUp: chain(onPointerUp, () => setIsLongPressed(false)),
			onPointerLeave: chain(onPointerLeave, () => setIsLongPressed(false)),
			onDragStart,
			onKeyDown,
			onKeyUp,
			onMouseDown,
			onPointerDown,
			onPointerEnter,
		},
	)

	const accessibilityProps = {
		'aria-pressed': isPressed,
		'data-pressed': isPressed,
		'data-long-pressed': isLongPressed,
		'data-keyboard-pressed': isKeyboardPressed,
		'data-hover': isHovered,
		'data-focus-within': isFocusWithin ? isFocused : undefined,
		'data-focus': isFocusWithin ? undefined : isFocused,
		'data-focus-visible': isFocusVisible,
	}

	return {
		ariaComponentProps: {
			...accessibilityProps,
			...ariaHandlerProps,
		},
		ariaFlags: {
			isPressed,
			isKeyboardPressed,
			isFocused,
			isFocusVisible,
			isHovered,
		},
	}
}

export { useAriaHandlers }

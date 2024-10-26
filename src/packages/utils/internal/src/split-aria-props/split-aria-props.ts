"use client"

/* biome-ignore lint/suspicious/noExplicitAny: using any instead of UseAriaHandlersProps for now */
type AriaHandlerPropsSelectorProps<T extends object> = T & Record<string, any>

const splitAriaProps = <T extends object>(props: AriaHandlerPropsSelectorProps<T>) => {
  const {
    isPressDisabled,
    isPressed,
    preventFocusOnPress,
    allowTextSelectionOnPress,
    shouldCancelOnPointerExit,
    onPress,
    onPressStart,
    onPressEnd,
    onPressChange,
    onPressUp,
    onKeyboardPress,
    onKeyboardPressStart,
    onKeyboardPressEnd,
    isLongPressDisabled = true,
    longPressTreshold,
    longPressAccessibilityDescription,
    onLongPressStart,
    onLongPress,
    onLongPressEnd,
    isFocusDisabled,
    onFocus,
    onFocusChange,
    onBlur,
    isTextInput,
    isFocusWithin,
    isHoverDisabled,
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    onDragStart,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onPointerDown,
    onPointerEnter,
    onPointerLeave,
    onPointerUp,
    ...nonAriaProps
  } = props

  const ariaProps = {
    isPressDisabled,
    isPressed,
    preventFocusOnPress,
    allowTextSelectionOnPress,
    shouldCancelOnPointerExit,
    onPress,
    onPressStart,
    onPressEnd,
    onPressChange,
    onPressUp,
    onKeyboardPress,
    onKeyboardPressStart,
    onKeyboardPressEnd,
    isLongPressDisabled,
    longPressTreshold,
    longPressAccessibilityDescription,
    onLongPressStart,
    onLongPress,
    onLongPressEnd,
    isFocusDisabled,
    onFocus,
    onFocusChange,
    onBlur,
    isTextInput,
    isFocusWithin,
    isHoverDisabled,
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    onDragStart,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onPointerDown,
    onPointerEnter,
    onPointerLeave,
    onPointerUp,
  }

  return {
    ariaProps,
    nonAriaProps,
  }
}

export { splitAriaProps }

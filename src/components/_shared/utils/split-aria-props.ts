"use client"

type UseAriaHandlersProps = {
  isPressDisabled: PressProps["isDisabled"] | undefined
  isPressed: PressProps["isPressed"] | undefined
  preventFocusOnPress: PressProps["preventFocusOnPress"] | undefined
  allowTextSelectionOnPress: PressProps["allowTextSelectionOnPress"] | undefined
  shouldCancelOnPointerExit: PressProps["shouldCancelOnPointerExit"] | undefined
  onPress: PressProps["onPress"] | undefined
  onPressStart: PressProps["onPressStart"] | undefined
  onPressEnd: PressProps["onPressEnd"] | undefined
  onPressChange: PressProps["onPressChange"] | undefined
  onPressUp: PressProps["onPressUp"] | undefined
  onKeyboardPress: ((event: PressEvent) => void) | undefined
  onKeyboardPressStart: ((event: PressEvent) => void) | undefined
  onKeyboardPressEnd: ((event: PressEvent) => void) | undefined
  isLongPressDisabled: LongPressProps["isDisabled"] | undefined
  longPressTreshold: LongPressProps["threshold"] | undefined
  longPressAccessibilityDescription: LongPressProps["accessibilityDescription"] | undefined
  onLongPressStart: LongPressProps["onLongPressStart"] | undefined
  onLongPress: LongPressProps["onLongPress"] | undefined
  onLongPressEnd: LongPressProps["onLongPressEnd"] | undefined
  isFocusDisabled: FocusProps["isDisabled"] | undefined
  onFocus: FocusProps["onFocus"] | undefined
  onFocusChange: FocusProps["onFocusChange"] | undefined
  onBlur: FocusProps["onBlur"] | undefined
  isTextInput: AriaFocusRingProps["isTextInput"] | undefined
  isFocusWithin: AriaFocusRingProps["within"] | undefined
  isHoverDisabled: HoverProps["isDisabled"] | undefined
  onHoverStart: HoverProps["onHoverStart"] | undefined
  onHoverChange: HoverProps["onHoverChange"] | undefined
  onHoverEnd: HoverProps["onHoverEnd"] | undefined
  isUsingAriaPressProps?: boolean
  onDragStart: React.DragEventHandler | undefined
  onKeyDown: React.KeyboardEventHandler | undefined
  onKeyUp: React.KeyboardEventHandler | undefined
  onMouseDown: React.MouseEventHandler | undefined
  onPointerDown: React.PointerEventHandler | undefined
  onPointerEnter: React.PointerEventHandler | undefined
  onPointerLeave: React.PointerEventHandler | undefined
  onPointerUp: React.PointerEventHandler | undefined
}

type AriaHandlerPropsSelectorProps<T extends object> = T & Partial<UseAriaHandlersProps>

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

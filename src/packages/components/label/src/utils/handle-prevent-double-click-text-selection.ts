function handlePreventDoubleClickTextSelection(
  event: React.MouseEvent<HTMLLabelElement, MouseEvent>,
) {
  if (!event.defaultPrevented && event.detail > 1) event.preventDefault()
}

export { handlePreventDoubleClickTextSelection }

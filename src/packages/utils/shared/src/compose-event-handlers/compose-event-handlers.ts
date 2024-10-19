function composeEventHandlers<E>(
	nativeHanler?: (event: E) => void,
	externalHandler?: (event: E) => void,
	{ checkForDefaultPrevented = true } = {},
) {
	return function handleEvent(event: E) {
		nativeHanler?.(event)

		if (checkForDefaultPrevented === false || !(event as unknown as Event).defaultPrevented) {
			return externalHandler?.(event)
		}
	}
}

export { composeEventHandlers }

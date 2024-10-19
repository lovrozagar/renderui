/**
 * Chain calls passed callbacks in order with their arguments.
 */
function chain(...callbacks: unknown[]) {
	return (...args: unknown[]) => {
		for (const callback of callbacks) {
			if (typeof callback === 'function') {
				callback(...args)
			}
		}
	}
}

export { chain }

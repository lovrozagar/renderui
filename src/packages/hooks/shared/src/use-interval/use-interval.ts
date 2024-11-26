"use client"

import { useCallback, useEffect, useRef } from "react"

type UseIntervalProps = {
	delay: number
}

/**
 * Interval that is automatically cleared on unmount, exposed interval ref, isActive value, call and clear methods.
 * Runs only one interval at a time.
 * Calling call() while previous interval is active will be ignored,
 * instead to interupt an old interval and start a new one call clear() first and then call().
 */
function useInterval(props: UseIntervalProps) {
	const { delay } = props
	const ref = useRef<NodeJS.Timeout | null>(null)
	const isActive = useRef(false)

	const call = (callback: () => void) => {
		if (!isActive.current) {
			isActive.current = true
			ref.current = setInterval(() => {
				callback()
			}, delay)
		}
	}

	const clear = useCallback(() => {
		if (ref.current !== null) {
			clearInterval(ref.current)
			ref.current = null
			isActive.current = false
		}
	}, [])

	useEffect(() => {
		return () => clear()
	}, [clear])

	return { ref, isActive: isActive.current, call, clear }
}

export { useInterval }

"use client"

import { useCallback, useEffect, useRef } from "react"

type UseTimeoutProps = {
	delay: number
}

/**
 * Timeout that is automatically cleared on unmount, exposed interval ref, isActive value, call and clear methods.
 * Runs only one timeout at a time.
 * Calling call() while previous timeout is active will be ignored,
 * instead to interupt an old timeout and start a new one call clear() first and then call().
 */
function useTimeout(props: UseTimeoutProps) {
	const { delay } = props
	const ref = useRef<NodeJS.Timeout | null>(null)
	const isActive = useRef(false)

	const call = (callback: () => void) => {
		if (!isActive.current) {
			isActive.current = true
			ref.current = setTimeout(() => {
				callback()	
			}, delay)
		}
	}

	const clear = useCallback(() => {
		if (ref.current !== null) {
			clearTimeout(ref.current)
			ref.current = null
			isActive.current = false
		}
	}, [])

	useEffect(() => {
		return () => clear()
	}, [clear])

	return { ref, isActive: isActive.current, call, clear }
}

export { useTimeout, type UseTimeoutProps }

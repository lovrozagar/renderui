"use client"

import { useCallback, useEffect, useState } from 'react'

const getMatches = (query: string, defaultValue: boolean) => {
  if (typeof window === 'undefined') {
    return defaultValue
  }
  return window.matchMedia(query).matches
}

type UseMediaQueryOptions = {
	defaultValue?: boolean
	initializeWithValue?: boolean
}

function useMediaQuery(
	query: string,
	{ defaultValue = false, initializeWithValue = true }: UseMediaQueryOptions = {},
) {

	const [matches, setMatches] = useState<boolean>(() => {
		if (initializeWithValue) {
			return getMatches(query, defaultValue)
		}
		return defaultValue
	})

	/* Handles the change event of the media query. */
  const handleChange = useCallback(() =>{ 
    setMatches(getMatches(query, defaultValue))
  }, [query, defaultValue])


	useEffect(() => {
    if(typeof window === 'undefined' ) return

		const matchMedia = window.matchMedia(query)

		/* Triggered at the first client-side load and if query changes */
		handleChange()

		/* Use deprecated `addListener` and `removeListener` to support Safari < 14 */
		if (matchMedia.addListener) {
			matchMedia.addListener(handleChange)
		} else {
			matchMedia.addEventListener('change', handleChange)
		}

		return () => {
			if (matchMedia.removeListener) {
				matchMedia.removeListener(handleChange)
			} else {
				matchMedia.removeEventListener('change', handleChange)
			}
		}
	}, [query, handleChange])

	return matches
}

export { useMediaQuery }

'use client'

function defaultFilter(value: string, search: string) {
	if (value.toLowerCase().startsWith(search.toLowerCase())) return 1

	return 0
}

export { defaultFilter }

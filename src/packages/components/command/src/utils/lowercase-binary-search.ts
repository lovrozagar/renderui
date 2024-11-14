"use client"

function lowercaseBinarySearch(array: string[], target: string): string | undefined {
	let left = 0
	let right = array.length - 1

	const lowerCaseTarget = target.toLowerCase()

	while (left <= right) {
		const mid = Math.floor((left + right) / 2)
		const midValue = array[mid]?.toLowerCase() ?? ""

		if (midValue.startsWith(lowerCaseTarget)) {
			/* If the previous element also starts with the target, continue the search */
			if (mid > 0 && array[mid - 1]?.toLowerCase().startsWith(lowerCaseTarget)) {
				right = mid - 1
			} else {
				return array[mid] /* return original value, not lowercased */
			}
		} else if (midValue < lowerCaseTarget) {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	return undefined
}

export { lowercaseBinarySearch }

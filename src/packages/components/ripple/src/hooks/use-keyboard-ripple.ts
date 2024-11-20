import { type Dispatch, type RefObject, type SetStateAction, useCallback, useEffect } from "react"
import {
	KEYBOARD_RIPPLE_DATASET_ATTRIBUTE,
	KEYBOARD_RIPPLE_MUTATION_OBSERVER_OPTIONS,
} from "../constants/constants"
import type { RippleRipple } from "../types/ripple-ripple"
import { createRipple } from "../utils/create-ripple"

function useKeyboardRipple<T extends HTMLElement>(
	ref: RefObject<T>,
	setRipples: Dispatch<SetStateAction<RippleRipple[]>>,
) {
	const addRippleOnKeyboardPress = useCallback(
		(height: number, width: number) => {
			const newRipple = createRipple({ type: "keyboard", width, height })

			setRipples((previousRipples) => [...previousRipples, newRipple])

			return newRipple.key
		},
		[setRipples],
	)

	const mutationHandler = useCallback(
		(mutations: MutationRecord[]) => {
			const element = ref.current?.parentElement
			const parentElement = element

			if (!parentElement) return

			mutations.forEach((mutation) => {
				if (mutation.attributeName !== KEYBOARD_RIPPLE_DATASET_ATTRIBUTE) return

				const parentDatasetState = parentElement.dataset.pressed

				if (parentDatasetState === "true") return

				addRippleOnKeyboardPress(element.clientHeight, element.clientWidth)
			})
		},
		[ref, addRippleOnKeyboardPress],
	)

	useEffect(() => {
		const parentElement = ref.current?.parentElement ?? null

		if (!parentElement) return

		const observer = new MutationObserver(mutationHandler)

		observer.observe(parentElement, KEYBOARD_RIPPLE_MUTATION_OBSERVER_OPTIONS)

		return () => observer.disconnect()
	}, [ref, mutationHandler])
}

export { useKeyboardRipple }

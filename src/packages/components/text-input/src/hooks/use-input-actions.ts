import { focusInput } from "@renderui/utils-internal"
import { type Dispatch, type RefObject, type SetStateAction, useRef, useState } from "react"
import type { TextInputProps } from "../types/text-input"

type UseInputActionsArgs = {
	type: TextInputProps["type"]
	onClear: TextInputProps["onClear"]
	setValue: Dispatch<SetStateAction<string | undefined>>
}

const useInputActions = (args: UseInputActionsArgs, inputRef: RefObject<HTMLInputElement>) => {
	const { type, onClear, setValue } = args

	const originalNonPasswordType = useRef(!type || type === "password" ? "text" : type)

	const [inputType, setInputType] = useState(type ?? "text")

	const clickTimeout = useRef<NodeJS.Timeout | null>(null)

	const focusInputOnClickTimeout = () => {
		if (clickTimeout.current) {
			clearTimeout(clickTimeout.current)
			clickTimeout.current = null
		}

		clickTimeout.current = setTimeout(() => {
			if (inputRef.current) focusInput(inputRef)
		}, 0)
	}

	const handleInputFocusOnContainerClick = () => {
		if (inputRef.current) focusInput(inputRef)
	}

	const handleClear = () => {
		setValue("")

		if (inputRef.current) focusInputOnClickTimeout()

		if (onClear) onClear()
	}

	const handlePasswordToggle = () => {
		setInputType((previousType) => {
			if (previousType === "password") {
				return originalNonPasswordType.current
			}

			return "password"
		})

		if (inputRef.current) focusInputOnClickTimeout()
	}

	const clearTimeouts = () => {
		if (clickTimeout.current) {
			clearTimeout(clickTimeout.current)
			clickTimeout.current = null
		}
	}

	return {
		inputType,
		handleClear,
		clearTimeouts,
		handleInputFocusOnContainerClick,
		handlePasswordToggle,
	}
}

export { useInputActions }

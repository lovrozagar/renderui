import { useEffect, useState } from "react"

type UsePressProps = {
	isDisabled: boolean | undefined
	isLoading: boolean | undefined
	onPress: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined
}

function usePress(props: UsePressProps) {
	const { isDisabled, isLoading, onPress } = props

	const [isPressed, setIsPressed] = useState(false)
	const [pressType, setPressType] = useState<"pointer" | "keyboard" | null>(null)

	useEffect(() => {
		if (!isDisabled) return

		setIsPressed(false)
		setPressType(null)
	}, [isDisabled])

	useEffect(() => {
		if (!isLoading) return

		setIsPressed(false)
		setPressType(null)
	}, [isLoading])

	const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
		/* only handle keyboard press by enter and spacebar */
		if (event.key !== "Enter" && event.key !== " ") return

		setIsPressed(true)

		/* if initially pressed by pointer, pointer owns that press, do not update press type */
		if (pressType === "pointer") return

		setPressType("keyboard")
	}

	const handleKeyUp = (event: React.KeyboardEvent<HTMLButtonElement>) => {
		/* only handle keyboard press by enter and spacebar */
		if (event.key !== "Enter" && event.key !== " ") return

		/* if initially pressed by pointer, pointer owns that press, only pointer can unpress */
		if (pressType === "pointer") return

		setIsPressed(false)
		setPressType(null)
	}

	const handlePointerDown = () => {
		setIsPressed(true)

		/* if initially pressed by keyboard, keyboard owns that press, do not update press type */
		if (pressType === "keyboard") return

		setPressType("pointer")
	}

	const handlePointerUp = () => {
		/* if initially pressed by keyboard, keyboard owns that press, only keyboard can unpress */
		if (pressType === "keyboard") return

		setIsPressed(false)
		setPressType(null)
	}

	const handlePointerLeave = () => {
		/* if initially pressed by keyboard, keyboard owns that press, only keyboard can unpress */
		if (pressType === "keyboard") return

		setIsPressed(false)
		setPressType(null)
	}

	/* if onPress passed, automatically stop propagation */
	const handlePress = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (!onPress) return undefined

		event.stopPropagation()

		onPress(event)
	}

	const isInactive = isDisabled || isLoading || false

	return {
		isPressed,
		isInactive,
		pressType,
		handleKeyDown,
		handleKeyUp,
		handlePointerDown,
		handlePointerUp,
		handlePointerLeave,
		handlePress,
	}
}

export { usePress }

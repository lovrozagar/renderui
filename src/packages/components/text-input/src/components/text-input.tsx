"use client"

import { Aria } from "@renderui/aria"
import { polymorphic, renderProp } from "@renderui/utils"
import type { Dispatch, SetStateAction } from "react"
import { useTextInput } from "../hooks/use-text-input"
import type { TextInputProps } from "../types/text-input"
import { ClearButton } from "./clear-button"
import { PasswordToggleButton } from "./password-toggle-button"

const TextInput = (props: TextInputProps) => {
	const {
		containerProps,
		inputProps,
		clearButtonProps,
		clearButtonIconProps,
		passwordToggleButtonProps,
		utilityProps,
	} = useTextInput(props)

	const {
		children,
		startContent,
		endContent,
		shouldRenderClearButton,
		hasPasswordToggleButton,
		value,
		setValue,
	} = utilityProps

	const { asChild, ...restInputProps } = inputProps

	const InputComponent = polymorphic(asChild, "input")

	const renderProps = { value, setValue: setValue as Dispatch<SetStateAction<string>> }

	return (
		<Aria {...containerProps}>
			{renderProp(startContent, renderProps)}
			<InputComponent {...restInputProps} />
			{shouldRenderClearButton ? (
				<ClearButton
					clearButtonProps={clearButtonProps}
					clearButtonIconProps={clearButtonIconProps}
				/>
			) : null}
			{hasPasswordToggleButton ? <PasswordToggleButton {...passwordToggleButtonProps} /> : null}
			{renderProp(children, renderProps)}
			{renderProp(endContent, renderProps)}
		</Aria>
	)
}

export { TextInput }

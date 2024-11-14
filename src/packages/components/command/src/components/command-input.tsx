"use client"

import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { cn, getOptionalObject, polymorphic } from "@renderui/utils"
import { CommandInput as CommandInputPrimitive } from "cmdk"
import {
	COMMAND_INPUT_CLASSNAME,
	COMMAND_INPUT_CONTAINER_CLASSNAME,
	COMMAND_INPUT_ICON_CLASSNAME,
} from "../constants/constants"
import { useSearch } from "../hooks/use-search"
import type { CommandInputProps } from "../types/command-input"

const CommandInput = (props: CommandInputProps) => {
	const {
		ref,
		asChild,
		className,
		containerProps,
		iconProps,
		onValueChange,
		value: valueProp,
		defaultValue = "",
		...restProps
	} = props

	const {
		asChild: inputContainerAsChild,
		className: inputContainerClassName,
		...restInputContainerProps
	} = getOptionalObject(containerProps)

	const { className: iconClassName, ...restIconProps } = getOptionalObject(iconProps)

	const [value = "", setValue] = useControllableState<string>({
		prop: valueProp,
		defaultProp: defaultValue as string,
		onChange: onValueChange,
	})

	const { type, handleValueChangeWithSearch } = useSearch(value, setValue)

	const InputContainerComponent = polymorphic(inputContainerAsChild, "div")

	const InputComponent = polymorphic(asChild, "input")

	return (
		<InputContainerComponent
			cmdk-input-wrapper=""
			data-slot="command-input-container"
			className={cn(COMMAND_INPUT_CONTAINER_CLASSNAME, inputContainerClassName)}
			{...restInputContainerProps}
		>
			<svg
				width="15"
				height="15"
				viewBox="0 0 15 15"
				fill="none"
				data-slot="command-input-icon"
				className={cn(COMMAND_INPUT_ICON_CLASSNAME, iconClassName)}
				{...restIconProps}
			>
				<path
					d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
					fill="currentColor"
					fillRule="evenodd"
					clipRule="evenodd"
				/>
			</svg>
			{type === "select" ? (
				<InputComponent
					data-slot="command-input"
					value={value}
					onChange={(event) => handleValueChangeWithSearch(event.target.value)}
					className={cn(COMMAND_INPUT_CLASSNAME, className)}
					{...restProps}
				/>
			) : (
				<CommandInputPrimitive
					data-slot="command-input"
					className={cn(COMMAND_INPUT_CLASSNAME, className)}
					{...restProps}
				/>
			)}
		</InputContainerComponent>
	)
}

export { CommandInput }

"use client"

import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { useFreshRef } from "@renderui/hooks"
import { cn } from "@renderui/utils"
import { Command as CommandPrimitive } from "cmdk"
import { DEFAULT_COMMAND_CLASSNAME } from "../constants/constants"
import { CommandProvider } from "../contexts/command-context"
import type { CommandRootProps } from "../types/command-root"
import { defaultFilter } from "../utils/default-filter"

const CommandRoot = (props: CommandRootProps) => {
	const {
		className,
		children,
		value: valueProp,
		defaultValue,
		onValueChange,
		onSelect,
		filter,
		loop = true,
		type = "combobox",
		color = "primary",
		...restProps
	} = props

	const [value = "", setValue] = useControllableState<string>({
		prop: valueProp,
		defaultProp: defaultValue,
		onChange: onValueChange,
	})

	const freshOnSelect = useFreshRef(onSelect)

	return (
		<CommandPrimitive
			data-slot="command-root"
			loop={loop}
			value={value}
			className={cn(DEFAULT_COMMAND_CLASSNAME, className)}
			onValueChange={setValue}
			filter={filter ?? defaultFilter}
			{...restProps}
		>
			<CommandProvider
				type={type}
				color={color}
				onSelect={freshOnSelect.current}
				setValue={setValue}
			>
				{children}
			</CommandProvider>
		</CommandPrimitive>
	)
}

export { CommandRoot }

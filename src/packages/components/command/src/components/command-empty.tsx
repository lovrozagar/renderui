"use client"

import { cn } from "@renderui/utils"
import { CommandEmpty as CommandEmptyPrimitive } from "cmdk"
import { DEFAULT_COMMAND_EMPTY_CLASSNAME } from "../constants/constants"
import type { CommandEmptyProps } from "../types/command-empty"

const CommandEmpty = (props: CommandEmptyProps) => {
	const { className, ...restProps } = props

	return (
		<CommandEmptyPrimitive
			data-slot="command-empty"
			className={cn(DEFAULT_COMMAND_EMPTY_CLASSNAME, className)}
			{...restProps}
		/>
	)
}

export { CommandEmpty }

"use client"

import { cn } from "@renderui/utils"
import { CommandGroup as CommandGroupPrimitive } from "cmdk"
import { DEFAULT_COMMAND_GROUP_CLASSNAME } from "../constants/constants"
import type { CommandGroupProps } from "../types/command-group"

const CommandGroup = (props: CommandGroupProps) => {
	const { className, ...restProps } = props

	return (
		<CommandGroupPrimitive
			data-slot="command-group"
			className={cn(DEFAULT_COMMAND_GROUP_CLASSNAME, className)}
			{...restProps}
		/>
	)
}

export { CommandGroup }

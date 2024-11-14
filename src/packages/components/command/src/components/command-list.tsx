"use client"

import { cn } from "@renderui/utils"
import { CommandList as CommandListPrimitive } from "cmdk"
import { DEFAULT_COMMAND_LIST_CLASSNAME } from "../constants/constants"
import type { CommandListProps } from "../types/command-list"

const CommandList = (props: CommandListProps) => {
	const { className, ...restProps } = props

	return (
		<CommandListPrimitive
			data-slot="command-list"
			className={cn(DEFAULT_COMMAND_LIST_CLASSNAME, className)}
			{...restProps}
		/>
	)
}

export { CommandList }

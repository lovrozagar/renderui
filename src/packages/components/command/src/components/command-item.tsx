"use client"

import { chain, cn } from "@renderui/utils"
import { CommandItem as CommandItemPrimitive } from "cmdk"

import type { CSSProperties } from "react"
import { DEFAULT_COMMAND_ITEM_CLASSNAME } from "../constants/constants"
import { useCommandContext } from "../contexts/command-context"
import type { CommandItemProps } from "../types/command-item"

const CommandItem = (props: CommandItemProps) => {
	const { value, className, style, color, onSelect, ...restProps } = props

	const { color: rootColor, onSelect: rootOnSelect } = useCommandContext("CommandItem")

	return (
		<CommandItemPrimitive
			data-slot="command-item"
			value={value as string}
			className={cn(DEFAULT_COMMAND_ITEM_CLASSNAME, className)}
			style={
				{
					...style,
					"--item-color": `var(--${color ?? rootColor})`,
				} as CSSProperties
			}
			onSelect={chain(rootOnSelect, onSelect)}
			{...restProps}
		/>
	)
}

export { CommandItem }

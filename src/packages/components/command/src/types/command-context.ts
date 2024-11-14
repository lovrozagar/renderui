import type { Dispatch, SetStateAction } from "react"
import type { CommandRootProps } from "./command-root"

type CommandContext = {
	type: CommandRootProps["type"]
	color: CommandRootProps["color"]
	setValue: Dispatch<SetStateAction<string | undefined>>
	onSelect: CommandRootProps["onSelect"]
}

export type { CommandContext }

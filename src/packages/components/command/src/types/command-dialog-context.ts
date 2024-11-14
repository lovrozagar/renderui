import type { RefObject } from "react"

type CommandDialogContext = {
	isDialog: boolean
	inputRef: RefObject<HTMLInputElement> | null
}

export type { CommandDialogContext }

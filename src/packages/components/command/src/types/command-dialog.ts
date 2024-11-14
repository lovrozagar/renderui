import type { DialogContentProps, DialogRootProps } from "@renderui/dialog"
import type { Simplify } from "@renderui/utils"
import type { CommandRootProps } from "./command-root"

type CommandDialogProps = Simplify<
	CommandRootProps & {
		dialogProps?: DialogRootProps
		dialogContentProps?: DialogContentProps
	}
>

export type { CommandDialogProps }

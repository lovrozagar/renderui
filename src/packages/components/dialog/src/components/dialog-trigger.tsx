"use client"

import { DialogTrigger as DialogTriggerPrimitive } from "@radix-ui/react-dialog"
import { Button } from "@renderui/button"
import { useMergedRef } from "@renderui/hooks"
import { DEFAULT_DIALOG_TRIGGER_CLASSNAME } from "../constants/constants"
import { useDialogContext } from "../contexts/dialog-context"
import type { DialogTriggerProps } from "../types/dialog-trigger"

const DialogTrigger = (props: DialogTriggerProps) => {
	const { ref, className, variant = "plain", ...restProps } = props

	const { triggerRef } = useDialogContext("DialogTrigger")

	const mergedRefCallback = useMergedRef<HTMLButtonElement>([ref, triggerRef])

	return (
		<DialogTriggerPrimitive asChild>
			<Button
				data-slot="dialog-trigger"
				ref={mergedRefCallback}
				variant={variant}
				className={[DEFAULT_DIALOG_TRIGGER_CLASSNAME, className]}
				{...restProps}
			/>
		</DialogTriggerPrimitive>
	)
}

export { DialogTrigger }

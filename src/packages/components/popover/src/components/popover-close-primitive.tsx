import { PopoverClose } from "@radix-ui/react-popover"
import { cn } from "@renderui/utils"
import type { PopoverClosePrimitiveProps } from "../types/popover-close-primitive"

const PopoverClosePrimitive = (props: PopoverClosePrimitiveProps) => {
	const { className, ...restProps } = props

	return (
		<PopoverClose data-slot="popover-close-primitive" className={cn(className)} {...restProps} />
	)
}

export { PopoverClosePrimitive }

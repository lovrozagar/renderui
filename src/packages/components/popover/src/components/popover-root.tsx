"use client"

import { Popover as PopoverRootPrimitive } from "@radix-ui/react-popover"
import type { PopoverRootProps } from "../types/popover-root"

const PopoverRoot = (props: PopoverRootProps) => {
	return (
		<PopoverRootPrimitive {...props}   />
	)
}

export { PopoverRoot }

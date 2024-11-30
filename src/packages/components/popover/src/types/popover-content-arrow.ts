import type { ClassValue } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type PopoverContentArrowProps = {
	arrowContainerProps?: ComponentPropsWithRef<"span">
	arrowProps?: ComponentPropsWithRef<"svg">
	arrowContainerClassName?: ClassValue
	arrowClassName?: ClassValue
}

export type { PopoverContentArrowProps }

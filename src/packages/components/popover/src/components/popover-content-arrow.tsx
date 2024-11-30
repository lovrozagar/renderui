"use client"

import { cn, optional } from "@renderui/utils"
import {
	DEFAULT_POPOVER_CONTENT_ARROW_CLASSNAME,
	DEFAULT_POPOVER_CONTENT_ARROW_CONTAINER_CLASSNAME,
} from "../constants/constants"
import type { PopoverContentArrowProps } from "../types/popover-content-arrow"

const PopoverContentArrow = (props: PopoverContentArrowProps) => {
	const { arrowContainerProps, arrowProps, arrowContainerClassName, arrowClassName } = props

	const { className: containerClassName, ...restArrowContainerProps } =
		optional(arrowContainerProps)

	const { className: svgClassName, ...restArrowProps } = optional(arrowProps)

	return (
		<span
			data-slot="popover-arrow-container"
			className={cn(
				DEFAULT_POPOVER_CONTENT_ARROW_CONTAINER_CLASSNAME,
				containerClassName,
				arrowContainerClassName,
			)}
			{...restArrowContainerProps}
		>
			<svg
				data-slot="popover-arrow"
				className={cn(DEFAULT_POPOVER_CONTENT_ARROW_CLASSNAME, svgClassName, arrowClassName)}
				width="10"
				height="5"
				viewBox="0 0 30 10"
				preserveAspectRatio="none"
				{...restArrowProps}
			>
				<polygon points="0,0 30,0 15,10" />
			</svg>
		</span>
	)
}

export { PopoverContentArrow }

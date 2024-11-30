"use client"

import {
	PopoverArrow as PopoverArrowPrimitive,
	PopoverContent as PopoverContentPrimitive,
	PopoverPortal as PopoverPortalPrimitive,
} from "@radix-ui/react-popover"
import { cn } from "@renderui/utils"
import { getAnimationStyleVariables } from "@renderui/utils-internal"
import {
	DEFAULT_POPOVER_CONTENT_CLASSNAME,
	POPOVER_CONTENT_TRIGGER_HEIGHT_CLASSNAME,
	POPOVER_CONTENT_TRIGGER_MAX_HEIGHT_CLASSNAME,
	POPOVER_CONTENT_TRIGGER_MAX_WIDTH_CLASSNAME,
	POPOVER_CONTENT_TRIGGER_MIN_HEIGHT_CLASSNAME,
	POPOVER_CONTENT_TRIGGER_MIN_WIDTH_CLASSNAME,
	POPOVER_CONTENT_TRIGGER_WIDTH_CLASSNAME,
} from "../constants/constants"
import type { PopoverContentProps } from "../types/popover-content"
import { PopoverContentArrow } from "./popover-content-arrow"

const PopoverContent = (props: PopoverContentProps) => {
	const {
		ref,
		style,
		children,
		className,
		classNames,
		portalContainer,
		forceMount,
		hasTriggerHeight,
		hasTriggerWidth,
		hasTriggerMinWidth,
		hasTriggerMinHeight,
		hasTriggerMaxWidth,
		hasTriggerMaxHeight,
		arrowContainerProps,
		arrowProps,
		animationDuration,
		animationInDuration,
		animationOutDuration,
		animationTimingFunction,
		animationInTimingFunction,
		animationOutTimingFunction,
		hasArrow = true,
		align = "center",
		sideOffset = 4,
		...restProps
	} = props

	return (
		<PopoverPortalPrimitive container={portalContainer} forceMount={forceMount}>
			<PopoverContentPrimitive
				data-slot="popover-content"
				align={align}
				forceMount={forceMount}
				sideOffset={sideOffset}
				className={cn(
					DEFAULT_POPOVER_CONTENT_CLASSNAME,
					hasTriggerHeight ? POPOVER_CONTENT_TRIGGER_HEIGHT_CLASSNAME : undefined,
					hasTriggerWidth ? POPOVER_CONTENT_TRIGGER_WIDTH_CLASSNAME : undefined,
					hasTriggerMinHeight ? POPOVER_CONTENT_TRIGGER_MIN_HEIGHT_CLASSNAME : undefined,
					hasTriggerMinWidth ? POPOVER_CONTENT_TRIGGER_MIN_WIDTH_CLASSNAME : undefined,
					hasTriggerMaxHeight ? POPOVER_CONTENT_TRIGGER_MAX_HEIGHT_CLASSNAME : undefined,
					hasTriggerMaxWidth ? POPOVER_CONTENT_TRIGGER_MAX_WIDTH_CLASSNAME : undefined,
					className,
					classNames?.popoverContent,
				)}
				style={{
					...getAnimationStyleVariables({
						animationDuration,
						animationInDuration,
						animationOutDuration,
						animationTimingFunction,
						animationInTimingFunction,
						animationOutTimingFunction,
						defaultAnimationDuration: 150,
						defaultAnimationTimingFunction: "ease",
					}),
					...style,
				}}
				{...restProps}
			>
				{children}
				{hasArrow ? (
					<PopoverArrowPrimitive asChild>
						<PopoverContentArrow
							arrowContainerProps={arrowContainerProps}
							arrowProps={arrowProps}
							arrowContainerClassName={classNames?.popoverArrowContainer}
							arrowClassName={classNames?.popoverArrow}
						/>
					</PopoverArrowPrimitive>
				) : null}
			</PopoverContentPrimitive>
		</PopoverPortalPrimitive>
	)
}

export { PopoverContent }

import { chain, cn, optional, polymorphic } from "@renderui/utils"
import type { CSSProperties } from "react"
import {
	DEFAULT_RIPPLE_CLASSNAME,
	RIPPLE_CHILD_CLASSNAME,
	RIPPLE_WRAPPER_CLASSNAME,
} from "../constants/constants"
import { useRipple } from "../hooks/use-ripple"
import type { RippleProps } from "../types/ripple"
import { RippleItem } from "./ripple-item"

const Ripple = (props: RippleProps) => {
	const {
		ref,
		asChild,
		tabIndex,
		style,
		className,
		/* @ts-ignore children only exists if type is wrapper */
		children,
		itemProps,
		onKeyDown,
		onClick,
		type = "child",
		animationDuration = 775,
		startingOpacity = 0.25,
		isTriggeredOnEnter = true,
		isTriggeredOnSpace = true,
		animationTimingFunction = "ease-out",
		...restProps
	} = props

	const { style: itemStyle, ...restItemProps } = optional(itemProps)

	const { ripples, mergedCallbackRef, handleClick, handleKeyUp } = useRipple({
		ref,
		animationDuration,
		isTriggeredOnEnter,
		isTriggeredOnSpace,
	})

	const Component = polymorphic(asChild, "span")

	return (
		<Component
			ref={mergedCallbackRef}
			tabIndex={tabIndex ?? (type === "wrapper" ? 0 : -1)}
			data-slot="ripple"
			className={cn(
				DEFAULT_RIPPLE_CLASSNAME,
				type === "wrapper" ? RIPPLE_WRAPPER_CLASSNAME : RIPPLE_CHILD_CLASSNAME,
				className,
			)}
			onKeyUp={chain(onKeyDown, handleKeyUp)}
			onClick={chain(onClick, handleClick)}
			style={
				{
					"--animation-duration": `${animationDuration}ms`,
					"--animation-timing-function": animationTimingFunction,
					...style,
				} as CSSProperties
			}
			{...restProps}
		>
			{typeof children === "function"
				? children({
						ripples: ripples.map((ripple) => (
							<RippleItem
								key={ripple.key}
								style={{
									opacity: startingOpacity,
									width: ripple.size,
									height: ripple.size,
									top: ripple.y,
									left: ripple.x,
									...itemStyle,
								}}
								{...restItemProps}
							/>
						)),
					})
				: ripples.map((ripple) => (
						<RippleItem
							key={ripple.key}
							style={{
								opacity: startingOpacity,
								width: ripple.size,
								height: ripple.size,
								top: ripple.y,
								left: ripple.x,
								...itemStyle,
							}}
							{...restItemProps}
						/>
					))}
		</Component>
	)
}

export { Ripple }

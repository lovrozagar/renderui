'use client'

import {
	AccordionHeader as AccordionHeaderPrimitive,
	AccordionTrigger as AccordionTriggerPrimitive,
} from '@radix-ui/react-accordion'
import type { AccordionTriggerProps } from '../types/accordion-trigger'
import {
	DEFAULT_ACCORDION_HEADER_CLASSNAME,
	DEFAULT_ACCORDION_TRIGGER_CLASSNAME,
	DEFAULT_ACCORDION_TRIGGER_ICON_CLASSNAME,
} from '../constants/constants'

const AccordionTrigger = (props: AccordionTriggerProps) => {
	const {
		ref,
		className,
		children,
		icon,
		iconProps,
		accordionHeaderProps,
		hasIcon = true,
		hasRipple = false,
		hasDefaultPressedStyles = false,
		...restProps
	} = props

	const { className: headerClassName, ...restAccordionHeaderProps } =
		getOptionalObject(accordionHeaderProps)

	const { className: iconClassName, ...restIconProps } = getOptionalObject(iconProps)

	const renderIcon = () => {
		if (!hasIcon) return null

		if (icon) return icon

		return (
			<ChevronDownIcon
				className={cn(DEFAULT_ACCORDION_TRIGGER_ICON_CLASSNAME, iconClassName)}
				{...restIconProps}
			/>
		)
	}

	return (
		<AccordionHeaderPrimitive
			data-slot='header'
			className={cn(DEFAULT_ACCORDION_HEADER_CLASSNAME, headerClassName)}
			{...restAccordionHeaderProps}
		>
			<AccordionTriggerPrimitive asChild>
				<Button
					ref={ref}
					variant='plain'
					data-slot='trigger'
					hasRipple={hasRipple}
					hasDefaultPressedStyles={hasDefaultPressedStyles}
					className={cn(DEFAULT_ACCORDION_TRIGGER_CLASSNAME, className)}
					{...restProps}
				>
					{children}
					{renderIcon()}
				</Button>
			</AccordionTriggerPrimitive>
		</AccordionHeaderPrimitive>
	)
}

export { AccordionTrigger }

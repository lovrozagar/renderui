'use client'

import { Accordion as AccordionPrimitive } from '@radix-ui/react-accordion'
import { DEFAULT_ACCORDION_CLASSNAME } from '../constants/constants'
import type { AccordionProps } from '../types/accordion'

const Accordion = (props: AccordionProps) => {
	const { className, ...restProps } = props

	return (
		<AccordionPrimitive
			data-slot='base'
			className={cn(DEFAULT_ACCORDION_CLASSNAME, className)}
			{...restProps}
		/>
	)
}

export { Accordion }

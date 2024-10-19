import type { Simplify } from '@/components/_shared/types/simplify'
import type { AccordionHeader as AccordionHeaderPrimitive } from '@radix-ui/react-accordion'
import type React from 'react'

import type { ChevronDownIcon } from '@/components/_shared/components/icons/chevron-down-icon'
import type { ButtonProps } from '@/components/button/types/button'

type AccordionTriggerButtonProps = Omit<ButtonProps, 'children'>

type AccordionTriggerTriggerProps = {
	children?: React.ReactNode
	hasIcon?: boolean
	icon?: React.ReactNode
	iconProps?: React.ComponentPropsWithRef<typeof ChevronDownIcon>
	accordionHeaderProps?: React.ComponentPropsWithRef<typeof AccordionHeaderPrimitive>
}

type AccordionTriggerProps = Simplify<AccordionTriggerButtonProps & AccordionTriggerTriggerProps>

export type { AccordionTriggerProps }

import type { Simplify } from '@/components/_shared/types/simplify'
import type { AccordionContent as AccordionContentPrimitive } from '@radix-ui/react-accordion'
import type React from 'react'

import type { AnimationStyleVariables } from '@renderui/utils'

type AccordionContentPrimitiveType = typeof AccordionContentPrimitive

type AccordionContentPrimitiveProps = React.ComponentPropsWithRef<AccordionContentPrimitiveType>

type AccordionContentChildrenContainerProps = {
	childrenContainerProps?: Simplify<React.ComponentPropsWithRef<'div'> & AsChildProp>
	animationDuration?: number
} & AnimationStyleVariables

type AccordionContentProps = Simplify<
	AccordionContentPrimitiveProps & AccordionContentChildrenContainerProps
>

export type { AccordionContentProps }

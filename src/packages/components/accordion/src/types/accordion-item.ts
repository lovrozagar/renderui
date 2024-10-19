import type { AccordionItem as AccordionItemPrimitive } from '@radix-ui/react-accordion'
import type React from 'react'

type AccordionItemPrimitiveType = typeof AccordionItemPrimitive

type AccordionItemProps = React.ComponentPropsWithRef<AccordionItemPrimitiveType>

export type { AccordionItemProps }

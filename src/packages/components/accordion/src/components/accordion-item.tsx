"use client"

import { AccordionItem as AccordionItemPrimitive } from "@radix-ui/react-accordion"
import { cn } from "@renderui/utils"
import { DEFAULT_ACCORDION_ITEM_CLASSNAME } from "../constants/constants"
import type { AccordionItemProps } from "../types/accordion-item"

const AccordionItem = (props: AccordionItemProps) => {
  const { value, className, ...restProps } = props

  return (
    <AccordionItemPrimitive
      /* cast to string for primitive compatibility */
      value={value as string}
      data-slot="accordion-item"
      className={cn(DEFAULT_ACCORDION_ITEM_CLASSNAME, className)}
      {...restProps}
    />
  )
}

export { AccordionItem }

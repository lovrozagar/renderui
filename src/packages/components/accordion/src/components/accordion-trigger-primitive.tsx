"use client"

import { AccordionTrigger } from "@radix-ui/react-accordion"
import { cn } from "@renderui/utils"
import { DEFAULT_ACCORDION_TRIGGER_PRIMITIVE_CLASSNAME } from "../constants/constants"
import type { AccordionTriggerPrimitiveProps } from "../types/accordion-trigger-primitive"

const AccordionTriggerPrimitive = (props: AccordionTriggerPrimitiveProps) => {
  const { className, ...restProps } = props

  return (
    <AccordionTrigger
      data-slot="accordion-trigger-primitive"
      className={cn(DEFAULT_ACCORDION_TRIGGER_PRIMITIVE_CLASSNAME, className)}
      {...restProps}
    />
  )
}

export { AccordionTriggerPrimitive }

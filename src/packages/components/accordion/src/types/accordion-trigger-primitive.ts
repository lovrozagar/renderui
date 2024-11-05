import type { ComponentPropsWithRef } from "react"

import type { AccordionTrigger } from "@radix-ui/react-accordion"
import type { ClassNameProps, Simplify } from "@renderui/utils"

type AccordionTriggerPrimitivePrimitiveProps = Omit<
  ComponentPropsWithRef<typeof AccordionTrigger>,
  "className"
>

type AcccordionTriggerPrimitiveCustomProps = ClassNameProps

type AccordionTriggerPrimitiveProps = Simplify<
  AccordionTriggerPrimitivePrimitiveProps & AcccordionTriggerPrimitiveCustomProps
>

export type { AccordionTriggerPrimitiveProps }

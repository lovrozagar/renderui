import type { AccordionItem as AccordionItemPrimitive } from "@radix-ui/react-accordion"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type AccordionItemPrimitiveProps = Omit<
  ComponentPropsWithRef<typeof AccordionItemPrimitive>,
  "value" | "defaultValue" | "className"
>

type AccordionItemCustomProps = ClassNameProps & {
  value: string | number
  defaultValue?: string | number
}

type AccordionItemProps = Simplify<AccordionItemPrimitiveProps & AccordionItemCustomProps>

export type { AccordionItemProps }

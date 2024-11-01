import type { AccordionHeader as AccordionHeaderPrimitive } from "@radix-ui/react-accordion"
import type { ButtonProps } from "@renderui/button"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef, ReactNode } from "react"

type AccordionTriggerIconPrimitiveProps = Omit<ComponentPropsWithRef<"svg">, "className">

type AccordionTriggerIconCustomProps = ClassNameProps

type AccordionTriggerHeaderPrimitiveProps = Omit<
  ComponentPropsWithRef<typeof AccordionHeaderPrimitive>,
  "className"
>

type AccordionTriggerHeaderCustomProps = ClassNameProps

type AccordionTriggerPrimitiveProps = ButtonProps

type AccordionTriggerCustomProps = {
  hasIcon?: boolean
  icon?: ReactNode
  iconProps?: Simplify<AccordionTriggerIconPrimitiveProps & AccordionTriggerIconCustomProps>
  headerProps?: Simplify<AccordionTriggerHeaderPrimitiveProps & AccordionTriggerHeaderCustomProps>
}

type AccordionTriggerProps = Simplify<AccordionTriggerPrimitiveProps & AccordionTriggerCustomProps>

export type { AccordionTriggerProps }

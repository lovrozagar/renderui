import type { Accordion as AccordionPrimitive } from "@radix-ui/react-accordion"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef, Dispatch, ReactNode, SetStateAction } from "react"

type AccordionRootType = "single" | "multiple"

type AccordionRootPrimitiveProps = Omit<
  ComponentPropsWithRef<typeof AccordionPrimitive>,
  "type" | "value" | "defaultValue" | "onValueChange" | "className" | "children"
>

type AccordionRootRenderProps<T extends AccordionRootType, V extends string | number> = {
  value: T extends "single" ? V : V[]
  setValue: Dispatch<SetStateAction<T extends "single" ? V : V[]>>
}

type AccordionRootCustomProps<
  T extends AccordionRootType,
  V extends string | number,
> = ClassNameProps & {
  type: T
  value?: T extends "single" ? V : V[]
  defaultValue?: T extends "single" ? V : V[]
  onValueChange?: T extends "single" ? (value: V) => void : (value: V[]) => void
  children?: ((props: AccordionRootRenderProps<T, V>) => ReactNode) | ReactNode
}

type AccordionRootProps<T extends AccordionRootType, V extends string | number = string> = Simplify<
  AccordionRootPrimitiveProps & AccordionRootCustomProps<T, V>
>

export type { AccordionRootProps, AccordionRootRenderProps, AccordionRootType }

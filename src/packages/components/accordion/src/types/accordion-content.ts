import type { AccordionContent as AccordionContentPrimitive } from "@radix-ui/react-accordion"

import type { ClassNameProps, PolymorphicProps, Simplify } from "@renderui/utils"
import type { AnimationStyleVariables } from "@renderui/utils-internal"
import type { ComponentPropsWithRef } from "react"

type AccordionContentChildrenContainerPrimitiveProps = Omit<
  ComponentPropsWithRef<"div">,
  "className"
>

type AccordionContentChildrenContainerCustomProps = ClassNameProps & PolymorphicProps

type AccordionContentPrimitiveType = Omit<
  ComponentPropsWithRef<typeof AccordionContentPrimitive>,
  "className"
>

type AccordionContentCustomProps = ClassNameProps &
  AnimationStyleVariables & {
    childrenContainerProps?: Simplify<
      AccordionContentChildrenContainerPrimitiveProps & AccordionContentChildrenContainerCustomProps
    >
  }

type AccordionContentProps = Simplify<AccordionContentPrimitiveType & AccordionContentCustomProps>

export type { AccordionContentProps }

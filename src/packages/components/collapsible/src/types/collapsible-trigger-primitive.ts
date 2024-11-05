import type { CollapsibleTrigger } from "@radix-ui/react-collapsible"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type CollapsibleTriggerPrimitivePrimitiveProps = Omit<
  ComponentPropsWithRef<typeof CollapsibleTrigger>,
  "className"
>

type CollapsibleTriggerPrimitiveCustomProps = ClassNameProps

type CollapsibleTriggerPrimitiveProps = Simplify<
  CollapsibleTriggerPrimitivePrimitiveProps & CollapsibleTriggerPrimitiveCustomProps
>

export type { CollapsibleTriggerPrimitiveProps }

import type { Collapsible as CollapsiblePrimitive } from "@radix-ui/react-collapsible"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type CollapsibleRootPrimitiveProps = Omit<
  ComponentPropsWithRef<typeof CollapsiblePrimitive>,
  "className"
>

type CollapsibleRootCustomProps = ClassNameProps

type CollapsibleRootProps = Simplify<CollapsibleRootPrimitiveProps & CollapsibleRootCustomProps>

export type { CollapsibleRootProps }

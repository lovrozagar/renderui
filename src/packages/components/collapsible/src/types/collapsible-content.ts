import type { CollapsibleContent as CollapsibleContentPrimitive } from "@radix-ui/react-collapsible"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { AnimationStyleVariables } from "@renderui/utils-internal"
import type { ComponentPropsWithRef } from "react"

type CollapsibleContentPrimitiveProps = Omit<
  ComponentPropsWithRef<typeof CollapsibleContentPrimitive>,
  "className"
>

type CollapsibleCustomProps = ClassNameProps &
  AnimationStyleVariables & {
    hasDefaultAnimation?: boolean
    hasSkippedInitialAnimation?: boolean
  }

type CollapsibleContentProps = Simplify<CollapsibleContentPrimitiveProps & CollapsibleCustomProps>

export type { CollapsibleContentProps }

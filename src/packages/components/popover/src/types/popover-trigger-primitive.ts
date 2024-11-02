import type { PopoverTrigger } from "@radix-ui/react-popover"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type PopoverTriggerPrimitivePrimitiveProps = Omit<
  ComponentPropsWithRef<typeof PopoverTrigger>,
  "className"
>

type PopoverTriggerPrimitiveCustomProps = ClassNameProps

type PopoverTriggerPrimitiveProps = Simplify<
  PopoverTriggerPrimitivePrimitiveProps & PopoverTriggerPrimitiveCustomProps
>

export type { PopoverTriggerPrimitiveProps }

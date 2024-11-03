import type { DialogTrigger as SheetTriggerPrimitive } from "@radix-ui/react-dialog"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type SheetTriggerPrimitivePrimitiveProps = Omit<
  ComponentPropsWithRef<typeof SheetTriggerPrimitive>,
  "className"
>

type SheetTriggerPrimitiveCustomProps = ClassNameProps

type SheetTriggerPrimitiveProps = Simplify<
  SheetTriggerPrimitivePrimitiveProps & SheetTriggerPrimitiveCustomProps
>

export type { SheetTriggerPrimitiveProps }

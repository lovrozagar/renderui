import type { DialogClose as SheetClosePrimitive } from "@radix-ui/react-dialog"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type SheetClosePrimitivePrimitiveProps = Omit<
  ComponentPropsWithRef<typeof SheetClosePrimitive>,
  "className"
>

type SheetClosePrimitiveCustomProps = ClassNameProps

type SheetClosePrimitiveProps = Simplify<
  SheetClosePrimitivePrimitiveProps & SheetClosePrimitiveCustomProps
>

export type { SheetClosePrimitiveProps }

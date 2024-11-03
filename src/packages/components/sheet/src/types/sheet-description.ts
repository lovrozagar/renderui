import type { DialogDescription as SheetDescriptionPrimitive } from "@radix-ui/react-dialog"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type SheetDescriptionPrimitiveProps = Omit<
  ComponentPropsWithRef<typeof SheetDescriptionPrimitive>,
  "className"
>

type SheetDescriptionCustomProps = ClassNameProps & {
  isVisuallyHidden?: boolean
}

type SheetDescriptionProps = Simplify<SheetDescriptionPrimitiveProps & SheetDescriptionCustomProps>

export type { SheetDescriptionProps }

import type { DialogTitle as SheetTitlePrimitive } from "@radix-ui/react-dialog"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type SheetTitlePrimitiveProps = Omit<ComponentPropsWithRef<typeof SheetTitlePrimitive>, "className">

type SheetTitleCustomProps = ClassNameProps & {
  isVisuallyHidden?: boolean
}

type SheetTitleProps = Simplify<SheetTitlePrimitiveProps & SheetTitleCustomProps>

export type { SheetTitleProps }

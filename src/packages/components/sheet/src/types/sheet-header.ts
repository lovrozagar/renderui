import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type SheetHeaderPrimitiveProps = Omit<ComponentPropsWithRef<"header">, "className">

type SheetHeaderCustomProps = ClassNameProps & {
  isVisuallyHidden?: boolean
}

type SheetHeaderProps = Simplify<SheetHeaderPrimitiveProps & SheetHeaderCustomProps>

export type { SheetHeaderProps }

import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type SheetFooterPrimitiveProps = Omit<ComponentPropsWithRef<"footer">, "className">

type SheetFooterCustomProps = ClassNameProps

type SheetFooterProps = Simplify<SheetFooterPrimitiveProps & SheetFooterCustomProps>

export type { SheetFooterProps }

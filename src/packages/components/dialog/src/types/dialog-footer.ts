import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type DialogFooterPrimitiveProps = Omit<ComponentPropsWithRef<"footer">, "className">

type DialogFooterCustomProps = ClassNameProps

type DialogFooterProps = Simplify<DialogFooterPrimitiveProps & DialogFooterCustomProps>

export type { DialogFooterProps }

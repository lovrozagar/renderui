import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type DialogHeaderPrimitiveProps = Omit<ComponentPropsWithRef<"header">, "className">

type DialogHeaderCustomProps = ClassNameProps & {
  isVisuallyHidden?: boolean
}

type DialogHeaderProps = Simplify<DialogHeaderPrimitiveProps & DialogHeaderCustomProps>

export type { DialogHeaderProps }

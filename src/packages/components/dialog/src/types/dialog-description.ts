import type { DialogDescription } from "@radix-ui/react-dialog"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type DialogDescriptionPrimitiveProps = Omit<
  ComponentPropsWithRef<typeof DialogDescription>,
  "className"
>

type DialogDescriptionCustomProps = ClassNameProps & {
  isVisuallyHidden?: boolean
}

type DialogDescriptionProps = Simplify<
  DialogDescriptionPrimitiveProps & DialogDescriptionCustomProps
>

export type { DialogDescriptionProps }

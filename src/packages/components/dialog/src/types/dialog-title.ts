import type { DialogTitle } from "@radix-ui/react-dialog"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type DialogTitlePrimitiveProps = Omit<ComponentPropsWithRef<typeof DialogTitle>, "className">

type DialogTitleCustomProps = ClassNameProps & {
  isVisuallyHidden?: boolean
}

type DialogTitleProps = Simplify<DialogTitlePrimitiveProps & DialogTitleCustomProps>

export type { DialogTitleProps }

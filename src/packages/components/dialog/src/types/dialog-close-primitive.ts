import type { DialogClose as DialogClosePrimitive } from "@radix-ui/react-dialog"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type DialogClosePrimitivePrimitiveProps = Omit<
  ComponentPropsWithRef<typeof DialogClosePrimitive>,
  "className"
>

type DialogClosePrimitiveCustomProps = ClassNameProps

type DialogClosePrimitiveProps = Simplify<
  DialogClosePrimitivePrimitiveProps & DialogClosePrimitiveCustomProps
>

export type { DialogClosePrimitiveProps }

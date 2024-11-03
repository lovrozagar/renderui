import type { DialogTrigger } from "@radix-ui/react-dialog"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type DialogTriggerPrimitivePrimitiveProps = Omit<
  ComponentPropsWithRef<typeof DialogTrigger>,
  "className"
>

type DialogTriggerPrimitiveCustomProps = ClassNameProps

type DialogTriggerPrimitiveProps = Simplify<
  DialogTriggerPrimitivePrimitiveProps & DialogTriggerPrimitiveCustomProps
>

export type { DialogTriggerPrimitiveProps }

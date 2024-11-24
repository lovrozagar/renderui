import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type RippleItemPrimitiveProps = Omit<ComponentPropsWithRef<"span">, "className">

type RippleItemCustomProps = ClassNameProps

type RippleItemProps = Simplify<RippleItemPrimitiveProps & RippleItemCustomProps>

export type { RippleItemProps }

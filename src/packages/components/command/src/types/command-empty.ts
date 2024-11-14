import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { CommandEmpty as CommandEmptyPrimitive } from "cmdk"
import type { ComponentPropsWithRef } from "react"

type CommandEmptyPrimitiveProps = ComponentPropsWithRef<typeof CommandEmptyPrimitive>

type CommandEmptyCustomProps = ClassNameProps

type CommandEmptyProps = Simplify<CommandEmptyPrimitiveProps & CommandEmptyCustomProps>

export type { CommandEmptyProps }

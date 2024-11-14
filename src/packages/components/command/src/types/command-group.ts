import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { CommandGroup as CommandGroupPrimitive } from "cmdk"
import type { ComponentPropsWithRef } from "react"

type CommandGroupPrimitiveProps = Omit<
	ComponentPropsWithRef<typeof CommandGroupPrimitive>,
	"className"
>

type CommandGroupCustomProps = ClassNameProps

type CommandGroupProps = Simplify<CommandGroupPrimitiveProps & CommandGroupCustomProps>

export type { CommandGroupProps }

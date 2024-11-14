import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { CommandList as CommandListPrimitive } from "cmdk"
import type { ComponentPropsWithRef } from "react"

type CommandListPrimitiveType = Omit<
	ComponentPropsWithRef<typeof CommandListPrimitive>,
	"className"
>

type CommandListCustomProps = ClassNameProps

type CommandListProps = Simplify<CommandListPrimitiveType & CommandListCustomProps>

export type { CommandListProps }

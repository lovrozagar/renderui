import type { ClassNameProps, Color, Simplify } from "@renderui/utils"
import type { CommandRoot as CommandRootPrimitive } from "cmdk"
import type { ComponentPropsWithRef } from "react"

type CommandRootPrimitiveProps = Omit<
	ComponentPropsWithRef<typeof CommandRootPrimitive>,
	"className" | "color" | "onSelect"
>

type CommandRootCustomProps = ClassNameProps & {
	type?: "select" | "combobox"
	color?: Color
	onSelect?: (value: unknown) => void
}

type CommandRootProps = Simplify<CommandRootPrimitiveProps & CommandRootCustomProps>

export type { CommandRootProps }

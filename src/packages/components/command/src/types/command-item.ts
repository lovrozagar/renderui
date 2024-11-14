import type { ClassNameProps, Color, Simplify } from "@renderui/utils"
import type { CommandItem as CommandItemPrimitive } from "cmdk"
import type { ComponentPropsWithRef } from "react"

type CommandItemPrimtiveProps = Omit<
	ComponentPropsWithRef<typeof CommandItemPrimitive>,
	"className" | "value" | "color" | "onSelect"
>

type CommandItemCustomProps = ClassNameProps & {
	value: string | number
	color?: Color
	onSelect?: (value: unknown) => void
}

type CommandItemProps = Simplify<CommandItemPrimtiveProps & CommandItemCustomProps>

export type { CommandItemProps }

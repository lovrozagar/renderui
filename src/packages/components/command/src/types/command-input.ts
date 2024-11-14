import type { ClassNameProps, PolymorphicProps, Simplify } from "@renderui/utils"
import type { CommandInput as CommandInputPrimitive } from "cmdk"
import type { ComponentPropsWithRef } from "react"

type CommandInputPrimitiveProps = Omit<
	ComponentPropsWithRef<typeof CommandInputPrimitive>,
	"className"
>

type ComboboxInputCustomProps = ClassNameProps &
	PolymorphicProps & {
		containerProps?: Simplify<ComponentPropsWithRef<"div"> & PolymorphicProps>
		iconProps?: ComponentPropsWithRef<"svg">
	}

type CommandInputProps = Simplify<CommandInputPrimitiveProps & ComboboxInputCustomProps>

export type { CommandInputProps }

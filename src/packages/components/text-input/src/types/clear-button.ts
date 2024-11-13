import type { ButtonProps } from "@renderui/button"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type ClearButtonIconPrimitiveProps = Omit<ComponentPropsWithRef<"svg">, "className">

type ClearButtonIconCustomProps = ClassNameProps

type ClearButtonIconProps = Simplify<ClearButtonIconPrimitiveProps & ClearButtonIconCustomProps>

type ClearButtonProps = {
	clearButtonProps: ButtonProps
	clearButtonIconProps: ClearButtonIconProps
}

export type { ClearButtonProps }

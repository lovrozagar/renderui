import type { ButtonProps } from "@renderui/button"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type PasswordToggleButtonPrimitiveProps = ButtonProps

type PasswordToggleButtonCustomProps = {
	type: ComponentPropsWithRef<"input">["type"]
	passwordToggleButtonIconProps?: Simplify<
		Omit<ComponentPropsWithRef<"svg">, "className"> & ClassNameProps
	>
}

type PasswordToggleButtonProps = Simplify<
	Omit<PasswordToggleButtonPrimitiveProps, "type"> & PasswordToggleButtonCustomProps
>

export type { PasswordToggleButtonProps }

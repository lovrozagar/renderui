import type { AriaProps } from "@renderui/aria"
import type { ButtonProps } from "@renderui/button"
import type {
	ClassNameProps,
	CnOptions,
	Color,
	PolymorphicProps,
	Simplify,
	VariantProps,
} from "@renderui/utils"
import type { ComponentPropsWithRef, Dispatch, ReactNode, SetStateAction } from "react"
import type { inputContainerClasses } from "../classes/input-container-classes"

type TextInputPrimitiveProps = Omit<
	ComponentPropsWithRef<"input">,
	| "type"
	| "color"
	| "size"
	| "className"
	| "children"
	| "startContent"
	| "endContent"
	| "disabled"
	| "readonly"
	| "required"
>

type TextInputRenderPropProps = {
	value: string
	setValue: Dispatch<SetStateAction<string>>
}

type TextInputSlotRenderPropProps = {
	value: string
}

type TextInputRenderProp = ((props: TextInputRenderPropProps) => ReactNode) | ReactNode

type TextInputIconProps = Simplify<Omit<ComponentPropsWithRef<"svg">, "className"> & ClassNameProps>

type TextInputClassNamesProps = {
	container?: CnOptions
	input?: CnOptions
	clearButton?: CnOptions
	clearButtonIcon?: CnOptions
	passwordToggle?: CnOptions
	passwordToggleIcon?: CnOptions
}

type TextInputCustomProps = ClassNameProps &
	PolymorphicProps &
	VariantProps<typeof inputContainerClasses> & {
		type?: "text" | "password" | "email" | "search" | "tel" | "url"
		color?: Color
		children?: TextInputRenderProp
		startContent?: TextInputRenderProp
		endContent?: TextInputRenderProp
		hasPasswordToggleButton?: boolean
		hasClearButton?: boolean
		hasClearButtonAlways?: boolean
		containerProps?: AriaProps | ((props: TextInputSlotRenderPropProps) => AriaProps)
		clearButtonProps?: ButtonProps | ((props: TextInputSlotRenderPropProps) => ButtonProps)
		clearButtonIconProps?:
			| TextInputIconProps
			| ((props: TextInputSlotRenderPropProps) => TextInputIconProps)
		passwordToggleButtonProps?: ButtonProps | ((props: TextInputSlotRenderPropProps) => ButtonProps)
		passwordToggleButtonIconProps?:
			| TextInputIconProps
			| ((props: TextInputSlotRenderPropProps) => TextInputIconProps)
		classNames?:
			| TextInputClassNamesProps
			| ((props: TextInputSlotRenderPropProps) => TextInputClassNamesProps)
		isDisabled?: boolean
		isReadOnly?: boolean
		isInvalid?: boolean
		isRequired?: boolean
		onClear?: () => void
		onValueChange?: (value: string) => void
	}

type TextInputProps = Simplify<TextInputPrimitiveProps & TextInputCustomProps>

export type { TextInputProps }

import type { ButtonProps, ButtonRenderProps } from "@renderui/button"
import type { Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef, ReactNode } from "react"
import type { CheckboxIndicatorProps } from "./checkbox-indicator"

type CheckboxPrimitiveProps = Omit<
	ButtonProps,
	"children" | "disabled" | "readonly" | "required" | "startContent" | "children" | "endContent"
>

type CheckboxRenderPropProps = Omit<ButtonRenderProps, "loaderProps"> & {
	isChecked: boolean
}

type CheckboxRenderProp = ((props: CheckboxRenderPropProps) => ReactNode) | ReactNode

type CheckboxIndicatorRenderPropProps = {
	isChecked: boolean
}

type CheckboxIndicatorRenderProps =
	| ((props: CheckboxIndicatorRenderPropProps) => CheckboxIndicatorProps)
	| CheckboxIndicatorProps

type CheckboxCustomProps = {
	children?: CheckboxRenderProp
	startContent?: CheckboxRenderProp
	endContent?: CheckboxRenderProp
	inputProps?: ComponentPropsWithRef<"input">
	indicatorProps?: CheckboxIndicatorRenderProps
	name?: string
	isChecked?: boolean
	isReadOnly?: boolean
	isInvalid?: boolean
	isRequired?: boolean
	defaultChecked?: boolean
	hasIconContentWhenUnchecked?: boolean
	animationDuration?: number
	onCheckedChange?: (isChecked: boolean) => void
}

type CheckboxProps = Simplify<CheckboxPrimitiveProps & CheckboxCustomProps>

export type { CheckboxProps }

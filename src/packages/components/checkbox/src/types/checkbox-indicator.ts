import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type CheckboxIndicatorPrimitiveProps = Omit<ComponentPropsWithRef<"svg">, "className">

type CheckboxIndicatorCustomProps = ClassNameProps & {
	isChecked?: boolean
	animationDuration?: number
	hasIconContentWhenUnchecked?: boolean
}

type CheckboxIndicatorProps = Simplify<
	CheckboxIndicatorPrimitiveProps & CheckboxIndicatorCustomProps
>

export type { CheckboxIndicatorProps }

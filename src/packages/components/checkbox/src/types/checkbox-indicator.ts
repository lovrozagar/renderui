import type { Simplify } from "@renderui/utils"
import type { m } from "framer-motion"
import type { ComponentPropsWithRef } from "react"

type CheckboxIndicatorPrimitiveProps = ComponentPropsWithRef<typeof m.svg>

type CheckboxIndicatorCustomProps = {
	isChecked?: boolean
	animationDuration?: number
	hasIconContentWhenUnchecked?: boolean
	pathProps?: ComponentPropsWithRef<typeof m.path>
}

type CheckboxIndicatorProps = Simplify<
	CheckboxIndicatorPrimitiveProps & CheckboxIndicatorCustomProps
>

export type { CheckboxIndicatorProps }

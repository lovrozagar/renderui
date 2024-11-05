import type { ClassNameProps, Color, PolymorphicProps, Simplify } from "@renderui/utils"
import type { ComponentPropsWithRef } from "react"

type ProgressIndicatorPrimitiveProps = Omit<ComponentPropsWithRef<'div'>, 'className'>

type ProgressIndicatorCustomProps = ClassNameProps & PolymorphicProps

type ProgressIndicatorProps = Simplify<ProgressIndicatorPrimitiveProps & ProgressIndicatorCustomProps>

type ProgressPrimitiveProps = Omit<ComponentPropsWithRef<'div'>, 'color' | 'className'>

type ProgressCustomProps = ClassNameProps & PolymorphicProps & {
	orientation?: 'horizontal' | 'vertical'
	variant?: 'path' | 'spot'
	color?: Color
	spotCount?: number
	isIndeterminate?: boolean | undefined
	value?: number | undefined
	indicatorProps?: ProgressIndicatorProps
}

type ProgressProps = Simplify<ProgressPrimitiveProps & ProgressCustomProps>

export type { ProgressProps }

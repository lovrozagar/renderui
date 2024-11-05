import type { CSSProperties } from "react"
import type { ProgressProps } from "../types/progress"

type GetTranslateXStyleByValueProps = Pick<
	ProgressProps,
	'isIndeterminate' | 'orientation' | 'variant' | 'value' | 'spotCount'
> & {
	definedValue: number
}

const getTranslateXStyleByValue = (props: GetTranslateXStyleByValueProps) => {
	const { isIndeterminate, orientation, variant, definedValue, spotCount = 1, value = 0 } = props

	if (isIndeterminate) return {}

	const axis = orientation === 'horizontal' ? 'X' : 'Y'

	if (variant === 'spot') {
		const realValue = definedValue - 1

		return {
			width: `${spotCount ? 100 / spotCount : 100}%`,
			transform: `translate${axis}(${realValue ? realValue * 100 : 0}%)`,
		} as CSSProperties
	}

	return { transform: `translate${axis}(-${100 - (value || 0)}%)` } as CSSProperties
}

export { getTranslateXStyleByValue }

import type { Simplify } from '@/components/_shared/types/simplify'
import type React from 'react'

import type { AsChildProp } from '@/components/_shared/types/as-child'
import type { Color } from '@/components/_shared/types/color'

type ProgressPrimitiveProps = Omit<React.ComponentPropsWithRef<'div'>, 'color'>

type ProgressCustomProps = {
	orientation?: 'horizontal' | 'vertical'
	variant?: 'path' | 'spot'
	color?: Color
	spotCount?: number
	isIndeterminate?: boolean | undefined
	value?: number | undefined
	indicatorRef?: React.RefObject<React.ElementRef<'div'>>
	indicatorProps?: React.ComponentPropsWithRef<'div'> & AsChildProp
}

type ProgressProps = Simplify<ProgressPrimitiveProps & ProgressCustomProps & AsChildProp>

export type { ProgressProps }

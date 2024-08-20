import { Simplify } from '@/components/_shared/types/simplify'
import React from 'react'

import { AsChildProp } from '@/components/_shared/types/as-child'
import { Aria } from '@/components/aria'

type TextAreaHTMLProps = Omit<
	React.ComponentPropsWithRef<'textarea'>,
	'children' | 'disabled' | 'readonly'
>

type TextAreaCustomProps = {
	children?: React.ReactNode | ((value: string) => React.ReactNode)
	startContent?: React.ReactNode | ((value: string) => React.ReactNode)
	endContent?: React.ReactNode | ((value: string) => React.ReactNode)
	isReadOnly?: boolean
	isInvalid?: boolean
	isDisabled?: boolean
	isRequired?: boolean
	inputContainerProps?: React.ComponentPropsWithRef<typeof Aria>
	minHeight?: number | `${number}`
	maxHeight?: number | `${number}`
	onValueChange?: (value: string) => void
}

type TextVariantProps = {
	variant?: 'solid' | 'outline'
}

type TextAreaProps = Simplify<
	TextAreaHTMLProps & TextAreaCustomProps & TextVariantProps & AsChildProp
>

export type { TextAreaProps }

import { Simplify } from '@/components/_shared/types/simplify'

import { CaretSortIcon } from '@/components/_shared/components/icons/caret-sort-icon'
import { ButtonProps } from '@/components/button/types/button'

type ComboboxTriggerButtonProps = Omit<ButtonProps, 'children' | 'variant' | 'size'>

type ComboboxTriggerCustomProps = {
	variant?: 'solid' | 'outline'
	hasTruncatedText?: boolean
	hasIndicator?: boolean
	children?: React.ReactNode
	iconProps?: React.ComponentPropsWithRef<typeof CaretSortIcon>
}

type ComboboxTriggerProps = Simplify<ComboboxTriggerButtonProps & ComboboxTriggerCustomProps>

export type { ComboboxTriggerProps }

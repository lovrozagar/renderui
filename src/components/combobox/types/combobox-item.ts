import type { Simplify } from '@/components/_shared/types/simplify'
import type { CommandItemProps } from '@/components/command/types/command-item'

type ComboboxItemCommandItemProps = Omit<CommandItemProps, 'value' | 'children'>

type ComboboxItemCustomProps = {
	value: string | number
	children: React.ReactNode
	startContent?: React.ReactNode
	endContent?: React.ReactNode
}

type ComboboxItemProps = Simplify<ComboboxItemCommandItemProps & ComboboxItemCustomProps>

export type { ComboboxItemProps }

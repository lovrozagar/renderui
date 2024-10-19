import type { AsChildProp } from '@/components/_shared/types/as-child'
import type { Simplify } from '@/components/_shared/types/simplify'

type TypeWritterCursorPrimitiveProps = React.ComponentPropsWithRef<'span'>

type TypeWritterCursorCustomProps = AsChildProp

type TypeWritterCursorProps = Simplify<
	TypeWritterCursorPrimitiveProps & TypeWritterCursorCustomProps
>

export type { TypeWritterCursorProps }

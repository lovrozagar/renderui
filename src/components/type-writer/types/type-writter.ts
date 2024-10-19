import type { AsChildProp } from '@/components/_shared/types/as-child'
import type { Simplify } from '@/components/_shared/types/simplify'

type TypeWritterPrimitiveProps = React.ComponentPropsWithRef<'span'>

type TypeWritterCustomProps = AsChildProp

type TypeWritterProps = Simplify<TypeWritterPrimitiveProps & TypeWritterCustomProps>

export type { TypeWritterProps }

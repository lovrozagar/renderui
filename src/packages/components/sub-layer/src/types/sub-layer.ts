import type { Simplify } from '@/components/_shared/types/simplify'
import type React from 'react'

import type { AsChildProp } from '@/components/_shared/types/as-child'

type SubLayerProps = Simplify<React.ComponentPropsWithRef<'span'> & AsChildProp>

export type { SubLayerProps }

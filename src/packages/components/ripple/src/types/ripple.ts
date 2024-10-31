import type { SubLayerProps } from "@renderui/sub-layer"
import type { ClassNameProps, Simplify } from "@renderui/utils"
import type { m } from "framer-motion"
import type { ComponentPropsWithRef } from "react"

type RipplePrimitiveProps = Omit<ComponentPropsWithRef<typeof m.span>, 'className'>

type RippleCustomProps = ClassNameProps & {
  isDisabled?: boolean
  opacity?: number
  animationDuration?: number
  scale?: number
  subLayerProps?: SubLayerProps
}

type RippleProps = Simplify<RipplePrimitiveProps & RippleCustomProps>

export type { RippleProps }

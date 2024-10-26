import type { SubLayerProps } from "@renderui/sub-layer"
import type { Simplify } from "@renderui/utils"
import type { m } from "framer-motion"
import type { ComponentPropsWithRef } from "react"

type RipplePrimitiveProps = ComponentPropsWithRef<typeof m.span>

type RippleCustomProps = {
  isDisabled?: boolean
  opacity?: number
  duration?: number
  scale?: number
  subLayerProps?: SubLayerProps
}

type RippleProps = Simplify<RipplePrimitiveProps & RippleCustomProps>

export type { RippleProps }

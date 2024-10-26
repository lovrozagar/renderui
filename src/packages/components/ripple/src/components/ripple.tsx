"use client"

import { LazyMotionDomAnimationProvider } from "@renderui/lazy-motion"
import { SubLayer } from "@renderui/sub-layer"
import { getOptionalObject } from "@renderui/utils"
import { AnimatePresence, m } from "framer-motion"
import { useRipple } from "../hooks/use-ripple"
import type { RippleProps } from "../types/ripple"

const Ripple = (props: RippleProps) => {
  const { subLayerProps, ...otherProps } = getOptionalObject(props)

  const { ripples, internalSubLayerRef, addRippleOnPress, getRippleRipplesProps } =
    useRipple(otherProps)

  return (
    <SubLayer ref={internalSubLayerRef} {...subLayerProps} onClick={addRippleOnPress}>
      {ripples.map((ripple) => (
        <LazyMotionDomAnimationProvider key={ripple.key}>
          <AnimatePresence mode="popLayout">
            <m.span {...getRippleRipplesProps(ripple)} />
          </AnimatePresence>
        </LazyMotionDomAnimationProvider>
      ))}
    </SubLayer>
  )
}

export { Ripple }

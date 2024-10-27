"use client"

import { LazyMotion } from "framer-motion"
import type { LazyMotionProviderProps } from "../types/lazy-motion-provider"

const LazyMotionDomAnimationProvider = (props: LazyMotionProviderProps) => {
  const { children, strict = true } = props

  return (
    <LazyMotion strict={strict} features={async () => (await import("framer-motion")).domAnimation}>
      {children}
    </LazyMotion>
  )
}

export { LazyMotionDomAnimationProvider }

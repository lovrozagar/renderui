"use client"

import { LazyMotion } from "framer-motion"
import type { LazyMotionProviderProps } from "../types/lazy-motion-provider"

const LazyMotionDomMaxProvider = (props: LazyMotionProviderProps) => {
  const { children, strict = true } = props

  return (
    <LazyMotion features={async () => (await import("framer-motion")).domMax} strict={strict}>
      {children}
    </LazyMotion>
  )
}

export { LazyMotionDomMaxProvider }

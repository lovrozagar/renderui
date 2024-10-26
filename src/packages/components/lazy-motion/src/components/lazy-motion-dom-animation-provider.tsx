import { LazyMotion } from "framer-motion"
import type { LazyMotionProviderProps } from "../types/lazy-motion-provider"

const LazyMotionDomAnimationProvider = (props: LazyMotionProviderProps) => {
  const { children, strict = true } = props

  return (
    <LazyMotion
      features={async () => import("../lib/dom-animation").then((res) => res.default)}
      strict={strict}
    >
      {children}
    </LazyMotion>
  )
}

export { LazyMotionDomAnimationProvider }

import type { LazyMotion } from "framer-motion"
import type { ComponentPropsWithRef } from "react"

type LazyMotionProviderProps = Omit<ComponentPropsWithRef<typeof LazyMotion>, "features">

export type { LazyMotionProviderProps }

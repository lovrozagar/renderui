"use client"

import { LazyMotionDomAnimationProvider } from "./lazy-motion-dom-animation-provider"
import { LazyMotionDomMaxProvider } from "./lazy-motion-dom-max-provider"

const LazyMotionProvider = () => null

LazyMotionProvider.DomAnimation = LazyMotionDomAnimationProvider
LazyMotionProvider.DomMax = LazyMotionDomMaxProvider

export { LazyMotionProvider }

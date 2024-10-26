import { LazyMotionDomAnimationProvider } from "./lazy-motion-dom-animation-provider"
import { LazyMotionDomMaxProvider } from "./lazy-motion-dom-max-provider"

type LazyMotionProviderCompoundComponent = JSX.Element & {
  DomAnimation: typeof LazyMotionDomAnimationProvider
  DomMax: typeof LazyMotionDomMaxProvider
}

/* biome-ignore lint/complexity/noUselessFragments: <explanation> */
const LazyMotionProvider = (<></>) as LazyMotionProviderCompoundComponent

LazyMotionProvider.DomAnimation = LazyMotionDomAnimationProvider
LazyMotionProvider.DomMax = LazyMotionDomMaxProvider

export { LazyMotionProvider }

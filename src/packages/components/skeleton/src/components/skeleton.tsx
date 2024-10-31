import { cn, polymorphic } from "@renderui/utils"
import { getAnimationStyleVariables } from "@renderui/utils-internal"
import { skeletonClasses } from "../classes/skeleton-classes"
import type { SkeletonProps } from "../types/skeleton"

const Skeleton = (props: SkeletonProps) => {
  const {
    asChild,
    className,
    style,
    count,
    animationDuration,
    animationTimingFunction,
    variant = "slide",
    type = "static",
    ...restProps
  } = props

  const Component = polymorphic(asChild, "div")

  const mergedClassName = cn(skeletonClasses({ variant, type }), className)

  const mergedStyle = {
    ...style,
    ...getAnimationStyleVariables({
      animationDuration,
      animationTimingFunction,
      defaultAnimationDuration: 1500,
      defaultAnimationTimingFunction: "ease",
    }),
  }

  return count && count > 0 ? (
    Array.from({ length: count }, (_, index) => (
      <Component key={index} className={mergedClassName} style={mergedStyle} {...restProps} />
    ))
  ) : (
    <Component className={mergedClassName} style={mergedStyle} {...restProps} />
  )
}

export { Skeleton }
